import React from 'react';
import { Modal, View, Text, TouchableOpacity, Pressable } from 'react-native';
import { styles } from './stylesMenu';
import { Ionicons } from '@expo/vector-icons';

// Definindo o que o menu precisa receber da Home
interface MenuProps {
  visivel: boolean;
  onClose: () => void;
}

export default function MenuLateral({ visivel, onClose }: MenuProps) {
  return (
    <Modal
      visible={visivel}
      transparent={true}
      animationType="fade" 
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.menuContainer}>
          <Text style={styles.titulo}>Categorias</Text>

          <TouchableOpacity style={styles.item} onPress={() => console.log('Alimentação')}>
            <Ionicons name="restaurant" size={24} color="#0047AB" />
            <Text style={styles.textoItem}>Alimentação</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => console.log('Serviços')}>
            <Ionicons name="construct" size={24} color="#0047AB" />
            <Text style={styles.textoItem}>Serviços</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => console.log('Saúde')}>
            <Ionicons name="medical" size={24} color="#0047AB" />
            <Text style={styles.textoItem}>Saúde</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => {}}>
         <Ionicons name="basket" size={24} color="#0047AB" />
         <Text style={styles.textoItem}>Mercados</Text>
        </TouchableOpacity>

       <TouchableOpacity style={styles.item} onPress={() => {}}>
         <Ionicons name="shirt-sharp" size={24} color="#0047AB" />
         <Text style={styles.textoItem}>Vestuário</Text>
        </TouchableOpacity>
          
        </View>
      </Pressable>
    </Modal>
  );
}