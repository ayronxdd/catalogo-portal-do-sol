import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../menuLateral/stylesComercios';

// Habilita animação no Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface ComercioProps {
  nome: string;
  categoria: string;
  descricao: string;
  whatsapp: string;
  linkMapa: string;
  distancia: string | null;
  isFavorito: boolean;
  onFavoritar: () => void;
  // Sugestão de novos campos para a v0.0.8
  horario?: string;
  endereco?: string;
}

export default function CardsComercios({ 
  nome, categoria, descricao, whatsapp, linkMapa, distancia, isFavorito, onFavoritar, horario, endereco 
}: ComercioProps) {
  
  const [expandido, setExpandido] = useState(false);

  const toggleExpansao = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandido(!expandido);
  };

  const abrirWhatsapp = () => {
    const url = `https://wa.me/${whatsapp}?text=Olá! Vi seu anuncio no app Portal do Sol.`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={toggleExpansao} activeOpacity={0.8}>
        <View style={styles.infoContainer}>
          
          {/* Linha Principal: Título + (Distância e Seta) */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
            
            {/* Título com flex: 1 para não empurrar os ícones para fora da tela */}
            <Text style={[styles.titulo, { flex: 1, marginRight: 10 }]} numberOfLines={1}>
              {nome}
            </Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {distancia && (
                <View style={[styles.badgeDistancia, { position: 'relative', top: 0, right: 0, marginRight: 8 }]}>
                  <Text style={styles.textoDistancia}>{distancia} km</Text>
                </View>
              )}
              <Ionicons name={expandido ? "chevron-up" : "chevron-down"} size={20} color="#888" style={{ marginLeft: 4 }}/>
            </View>
          </View>
          
          <Text style={styles.categoria}>{categoria}</Text>
          
          <Text 
            style={styles.descricao} 
            numberOfLines={expandido ? undefined : 2}
          >
            {descricao}
          </Text>
        </View>
      </TouchableOpacity>

      {expandido && (
        <View style={{ paddingHorizontal: 15, paddingBottom: 10 }}>
          <View style={{ height: 1, backgroundColor: '#EEE', marginVertical: 10 }} />
          
          {horario && (
            <Text style={{ fontSize: 13, color: '#444', marginBottom: 5 }}>
              🕒 <Text style={{ fontWeight: 'bold' }}>Horário:</Text> {horario}
            </Text>
          )}
          
          {endereco && (
            <Text style={{ fontSize: 13, color: '#444', marginBottom: 10 }}>
              📍 <Text style={{ fontWeight: 'bold' }}>Endereço:</Text> {endereco}
            </Text>
          )}

          <View style={styles.botoesContainer}>
            <TouchableOpacity style={styles.botaoZap} onPress={abrirWhatsapp}>
              <Ionicons name="logo-whatsapp" size={20} color="white" />
              <Text style={styles.textoBotao}>WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onFavoritar} style={styles.botaoFavorito}>
              <Ionicons 
                name={isFavorito ? "heart" : "heart-outline"} 
                size={24} 
                color={isFavorito ? "#FF0000" : "#888"} 
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoMapa} onPress={() => Linking.openURL(linkMapa)}>
              <Ionicons name="location" size={22} color="#0047AB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}