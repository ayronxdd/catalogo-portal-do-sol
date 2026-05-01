import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './stylesComercios';

interface ComercioProps {
  nome: string;
  categoria: string;
  descricao: string;
  whatsapp: string;
  linkMapa: string;
  distancia: string | null;
}

export default function CardsComercios({ nome, categoria, descricao, whatsapp, linkMapa, distancia }: ComercioProps) {
  
  const abrirWhatsapp = () => {
    const url = `https://wa.me/${whatsapp}?text=Olá! Vi seu anuncio no app Portal do Sol.`;
    Linking.openURL(url);
  };

  const abrirMapa = () => {
    Linking.openURL(linkMapa);
  };

  return (
    <View style={styles.card}>
      {distancia && (
        <View style={styles.badgeDistancia}>
          <Text style={styles.textoDistancia}>{distancia} km</Text>
        </View>
      )}

      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>{nome}</Text>
        <Text style={styles.categoria}>{categoria}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
      </View>

      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botaoZap} onPress={abrirWhatsapp}>
          <Ionicons name="logo-whatsapp" size={22} color="white" />
          <Text style={styles.textoBotao}>Pedir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoMapa} onPress={abrirMapa}>
          <Ionicons name="location" size={22} color="#0047AB" />
        </TouchableOpacity>
      </View>
    </View>
  );
}