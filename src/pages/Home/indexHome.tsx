import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './stylesHome';
import MenuLateral from '../menuLateral/indexMenu'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Location from 'expo-location';

import { COMERCIOS } from '../menuLateral/dadosComercios';
import CardsComercios from '../menuLateral/cardsComercios'; 

export default function Home() {
  // 1. Estados
  const [userName, setUserName] = useState('');
  const [saudacao, setSaudacao] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas as Lojas');
  const [busca, setBusca] = useState('');
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [favoritos, setFavoritos] = useState<string[]>([]);

  // 2. Efeitos (Carregamento de Dados)
  useEffect(() => {
    const carregarDadosIniciais = async () => {
      const nomeSalvo = await AsyncStorage.getItem('@user_name');
      if (nomeSalvo) setUserName(nomeSalvo);

      const horaAtual = new Date().getHours();
      if (horaAtual >= 5 && horaAtual < 12) setSaudacao('Bom dia');
      else if (horaAtual >= 12 && horaAtual < 18) setSaudacao('Boa tarde');
      else setSaudacao('Boa noite');
    };
    
    const carregarFavoritos = async () => {
      const salvos = await AsyncStorage.getItem('@favoritos');
      if (salvos) setFavoritos(JSON.parse(salvos));
    };

    carregarDadosIniciais();
    carregarFavoritos();
  }, []);

  // Efeito para Localização
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  // 3. Funções de Lógica
  const alternarFavorito = async (id: string) => {
    let novaLista = [...favoritos];
    if (novaLista.includes(id)) {
      novaLista = novaLista.filter(favId => favId !== id);
    } else {
      novaLista.push(id);
    }
    setFavoritos(novaLista);
    await AsyncStorage.setItem('@favoritos', JSON.stringify(novaLista));
  };

  function calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return (R * c).toFixed(1);
  }

  // 4. Filtragem (Sempre antes do Return)
  const comerciosFiltrados = COMERCIOS.filter(item => {
    // Lógica de Categoria + Favoritos
    const matchesCategoria = 
      categoriaSelecionada === 'Todas as Lojas' || 
      (categoriaSelecionada === 'Favoritos' ? favoritos.includes(item.id) : item.categoria === categoriaSelecionada);
    
    // Lógica de Busca
    const buscaLower = busca.toLowerCase();
    const nomeLower = (item?.nome || "").toLowerCase();
    const matchesTags = item?.tags ? item.tags.some(tag => tag.toLowerCase().includes(buscaLower)) : false;
    const matchesNome = nomeLower.includes(buscaLower);
    
    return matchesCategoria && (matchesNome || matchesTags);
  });

  // 5. Renderização da Interface
  return (
    <View style={styles.container}>
      
      <MenuLateral 
        visivel={menuAberto} 
        onClose={() => setMenuAberto(false)} 
        categoriaSelecionada={categoriaSelecionada} // Passando a prop que faltava
        onSelecionarCategoria={(cat) => {
          setCategoriaSelecionada(cat);
          setMenuAberto(false);
        }}
      />

      <View style={styles.topoAzul}>
        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => setMenuAberto(true)}
        >
          <Ionicons name="menu" size={32} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoSaudacao}>
          {saudacao}, {userName}!
        </Text>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 15 }}> 
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#888" />
          <TextInput
            style={styles.inputBusca}
            placeholder="Pesquisar comércio..."
            value={busca}
            onChangeText={(texto) => setBusca(texto)}
          />
          {busca !== '' && (
            <TouchableOpacity onPress={() => setBusca('')}>
              <Ionicons name="close-circle" size={20} color="#888" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.divisor} />

      <ScrollView 
        style={styles.conteudo}
        contentContainerStyle={styles.containerInternoCards}
      >
        <Text style={styles.tituloCatalogo}>
           Catálogo de Comércios - Portal do Sol
        </Text>

        {comerciosFiltrados.map((item) => {
          const dist = location ? calcularDistancia(
            location.coords.latitude, 
            location.coords.longitude, 
            item.latitude, 
            item.longitude
          ) : null;
          
          const isFavorito = favoritos.includes(item.id);

          return (
            <CardsComercios 
              key={item.id}
              nome={item.nome}
              categoria={item.categoria}
              descricao={item.descricao}
              whatsapp={item.whatsapp}
              linkMapa={item.linkMapa}
              distancia={dist}
              isFavorito={isFavorito}
              onFavoritar={() => alternarFavorito(item.id)}
            />
          );
        })} 
      </ScrollView>
    </View>
  ); 
}