import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './stylesHome';
import MenuLateral from '../menuLateral/indexMenu'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import { useComercios } from '../inteligencia/useComercio';
import CardsComercios from '../modelos/cardsComercios'; 

export default function Home() {
  // Estados de Interface (Controlam o que o usuário interage na tela)
  const [userName, setUserName] = useState('');
  const [saudacao, setSaudacao] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas as Lojas');
  const [busca, setBusca] = useState('');

  // lógica de GPS, Favoritos e Filtros acontece aqui.
  const { comerciosFiltrados, alternarFavorito } = useComercios(busca, categoriaSelecionada);

  useEffect(() => {
    const carregarPerfil = async () => {
      const nomeSalvo = await AsyncStorage.getItem('@user_name');
      if (nomeSalvo) setUserName(nomeSalvo);

      const hora = new Date().getHours();
      setSaudacao(hora >= 5 && hora < 12 ? 'Bom dia' : hora >= 12 && hora < 18 ? 'Boa tarde' : 'Boa noite');
    };
    carregarPerfil();
  }, []);

  return (
    <View style={styles.container}>
      
      <MenuLateral 
        visivel={menuAberto} 
        onClose={() => setMenuAberto(false)} 
        categoriaSelecionada={categoriaSelecionada}
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
            onChangeText={setBusca}
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

        {comerciosFiltrados.map((item) => (
          <CardsComercios 
            key={item.id}
            nome={item.nome}
            categoria={item.categoria}
            descricao={item.descricao}
            whatsapp={item.whatsapp}
            linkMapa={item.linkMapa}
            distancia={item.distancia} 
            isFavorito={item.isFavorito}
            onFavoritar={() => alternarFavorito(item.id)}
            horario={item.horario} 
           endereco={item.endereco}
          />
        ))}
      </ScrollView>
    </View>
  ); 
}

//git add .
//git commit -m "v0.0.7: Adição da o container expansível e inserção de horario e endereco"
//git tag v0.0.6
//git push origin main --tags