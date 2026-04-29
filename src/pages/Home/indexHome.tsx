import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
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

  return (
    <View style={styles.container}>
      
      <MenuLateral 
        visivel={menuAberto} 
        onClose={() => setMenuAberto(false)} 
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

      <ScrollView 
        style={styles.conteudo}
        contentContainerStyle={styles.containerInternoCards}
      >
        <Text style={styles.tituloCatalogo}>
           Catálogo de Comércios - Portal do Sol
        </Text>

        {COMERCIOS.map((item) => (
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