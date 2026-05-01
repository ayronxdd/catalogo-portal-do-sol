import React from 'react';
import { Modal, View, Text, TouchableOpacity, Pressable } from 'react-native';
import { styles } from './stylesMenu';
import { Ionicons } from '@expo/vector-icons';

// Definindo o que o menu precisa receber da Home
interface MenuProps {
  visivel: boolean;
  onClose: () => void;
  onSelecionarCategoria: (categoria: string) => void;
}

export default function MenuLateral({ visivel, onClose, onSelecionarCategoria }: MenuProps) {
  return (
    <Modal
      visible={visivel}
      transparent={true}
      animationType="fade" 
      onRequestClose={onClose}
    >
  <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.menuContainer}>
          <Text style={styles.tituloMenu}>Categorias</Text>

      {/* 1. TODOS - Note que passamos o nome exato: 'Todas as Lojas' */}
      <TouchableOpacity 
            style={styles.itemMenu} 
            onPress={() => onSelecionarCategoria('Todas as Lojas')}
      >
        <Ionicons name="grid-sharp" size={24} color="#0047AB" />
          <Text style={styles.textoItem}>Todos</Text>
        </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.itemMenu} 
        onPress={() => onSelecionarCategoria('Alimentação')}
      >
        <Ionicons name="restaurant" size={24} color="#0047AB" />
        <Text style={styles.textoItem}>Alimentação</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.itemMenu} 
        onPress={() => onSelecionarCategoria('Serviços')}
      >
        <Ionicons name="construct" size={24} color="#0047AB" />
        <Text style={styles.textoItem}>Serviços</Text>
      </TouchableOpacity>

      {/* 4. SAÚDE */}
      <TouchableOpacity 
        style={styles.itemMenu} 
        onPress={() => onSelecionarCategoria('Saúde')}
      >
        <Ionicons name="medical" size={24} color="#0047AB" />
        <Text style={styles.textoItem}>Saúde</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.itemMenu} 
        onPress={() => onSelecionarCategoria('Mercados')}
      >
        <Ionicons name="basket" size={24} color="#0047AB" />
        <Text style={styles.textoItem}>Mercados</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.itemMenu} 
        onPress={() => onSelecionarCategoria('Vestuário')}
      >
        <Ionicons name="shirt-sharp" size={24} color="#0047AB" />
        <Text style={styles.textoItem}>Vestuário</Text>
      </TouchableOpacity>
        
    </View>
  </Pressable>
</Modal>)
}