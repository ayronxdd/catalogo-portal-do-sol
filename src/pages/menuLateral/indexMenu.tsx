import React from 'react';
import { Modal, View, Text, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import { styles } from './stylesMenu';
import { Ionicons } from '@expo/vector-icons';
import { List } from 'react-native-paper';

interface MenuProps {
  visivel: boolean;
  onClose: () => void;
  onSelecionarCategoria: (categoria: string) => void;
  categoriaSelecionada: string;
}

export default function MenuLateral({ 
  visivel, 
  onClose, 
  onSelecionarCategoria, 
  categoriaSelecionada
}: MenuProps) {
  return (
    <Modal
      visible={visivel}
      transparent={true}
      animationType="fade" 
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.menuContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.tituloMenu}>Categorias</Text>

            <TouchableOpacity 
              style={styles.itemMenu} 
              onPress={() => { onSelecionarCategoria('Todas as Lojas'); onClose(); }}
            >
              <Ionicons name="grid-sharp" size={24} color="#0047AB" />
              <Text style={styles.textoItem}>Todos</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.itemMenu} 
              onPress={() => { onSelecionarCategoria('Favoritos'); onClose(); }}
            >
              <Ionicons name="heart" size={24} color="#0047AB" />
              <Text style={styles.textoItem}>Favoritos</Text>
            </TouchableOpacity>

            <List.Accordion
              title="Alimentação"
              titleStyle={styles.textoItem}
              style={{ backgroundColor: 'transparent', paddingLeft: 0 }}
              left={props => <Ionicons name="restaurant" size={24} color="#0047AB" style={{ marginLeft: 10 }} />}
            >
              <List.Item 
                title="Restaurantes" 
                onPress={() => { onSelecionarCategoria('Restaurante'); onClose(); }}
                left={props => <Ionicons name="wine-outline" size={24} color="#0047AB" style={{ marginLeft: 10 }} />}
              />
              <List.Item 
                title="Lanches & Delivery" 
                onPress={() => { onSelecionarCategoria('Lanche'); onClose(); }}
                left={props => <Ionicons name="fast-food-outline" size={24} color="#0047AB" style={{ marginLeft: 10 }} />}
              />
            </List.Accordion>

            <List.Accordion
              title="Serviços"
              titleStyle={styles.textoItem}
              style={{ backgroundColor: 'transparent', paddingLeft: 0 }}
              left={props => <Ionicons name="construct" size={24} color="#0047AB" style={{ marginLeft: 10 }} />}
            >
              <List.Item 
                title="Manutenção" 
                onPress={() => { onSelecionarCategoria('Manutencao'); onClose(); }} 
                left={props => <Ionicons name="hammer-outline" size={24} color="#0047AB" style={{ marginLeft: 10 }} />}
              />
              <List.Item 
                title="Beleza & Estética" 
                onPress={() => { onSelecionarCategoria('Beleza'); onClose(); }} 
                left={props => <Ionicons name="cut-outline" size={24} color="#0047AB" style={{ marginLeft: 10 }} />}
              />
              <List.Item 
                title="Celulares e computadores" 
                onPress={() => { onSelecionarCategoria('Eletronicos'); onClose(); }} 
                left={props => <Ionicons name="phone-portrait-outline" size={24} color="#0047AB" style={{ marginLeft: 10 }} />}
              />
            </List.Accordion>

            <TouchableOpacity 
              style={styles.itemMenu} 
              onPress={() => { onSelecionarCategoria('Saúde'); onClose(); }}
            >
              <Ionicons name="medical" size={24} color="#0047AB" />
              <Text style={styles.textoItem}>Saúde</Text>
            </TouchableOpacity>

          </ScrollView>
        </View>
      </Pressable>
    </Modal>
  );
}