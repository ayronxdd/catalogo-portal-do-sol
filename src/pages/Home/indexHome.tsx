import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './stylesHome';
import MenuLateral from './menuLateral/indexMenu'; 
import Ionicons from '@expo/vector-icons/Ionicons';

import { COMERCIOS } from './menuLateral/dadosComercios';
import CardsComercios from './menuLateral/cardsComercios'; 

export default function Home() {
  const [userName, setUserName] = useState('');
  const [saudacao, setSaudacao] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas as Lojas');
  const [busca, setBusca] = useState('');

  useEffect(() => {
    const carregarDadosIniciais = async () => {
      const nomeSalvo = await AsyncStorage.getItem('@user_name');
      if (nomeSalvo) setUserName(nomeSalvo);

      const horaAtual = new Date().getHours();
      if (horaAtual >= 5 && horaAtual < 12) setSaudacao('Bom dia');
      else if (horaAtual >= 12 && horaAtual < 18) setSaudacao('Boa tarde');
      else setSaudacao('Boa noite');
    };
    carregarDadosIniciais();
  }, []);

  const comerciosFiltrados = COMERCIOS.filter(item => {
  const matchesCategoria = categoriaSelecionada === 'Todas as Lojas' || item.categoria === categoriaSelecionada;
  const nomeSeguro = item?.nome || ""; 
  const matchesBusca = nomeSeguro.toLowerCase().includes(busca.toLowerCase());
  
  return matchesCategoria && matchesBusca;
});
  
    return (
    <View style={styles.container}>
      
      <MenuLateral 
        visivel={menuAberto} 
        onClose={() => setMenuAberto(false)} 
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

        {comerciosFiltrados.map((item) => (
          <CardsComercios 
            key={item.id}
            nome={item.nome}
            categoria={item.categoria}
            descricao={item.descricao}
            whatsapp={item.whatsapp}
            linkMapa={item.linkMapa}
          />
        ))}
      </ScrollView>
    </View>
  );
}
//git add .
//git commit -m "v0.0.3: Layout dos cards restaurado e estabilização do ambiente"
//git tag v0.0.3
//git push origin main --tags