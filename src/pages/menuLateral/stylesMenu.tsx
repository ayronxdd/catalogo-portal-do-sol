import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Fundo escuro semitransparente
    justifyContent: 'flex-start',
  },
  menuContainer: {
    backgroundColor: 'white',
    width: '75%', // Ocupa boa parte da largura
    height: '100%',
    padding: 20,
    paddingTop: 50,
    // Sombra para dar profundidade
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginBottom: 15,
  },
  tituloMenu: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0047AB',
  },
  itemMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F0F0F0',
  },
  textoItem: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
    fontWeight: '500',
  },
  badgeDistancia: {
  position: 'absolute',
  top: 5,           // Diminua um pouco para garantir que não sumiu para cima
  right: 5,
  backgroundColor: '#FF0000', // Vermelho para teste
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 5,
  zIndex: 99,       // ISSO garante que ele fique na camada de cima
  elevation: 5,     // Necessário para Android aparecer a sombra/camada
},
textoDistancia: {
  fontSize: 12,
  fontWeight: 'bold',
  color: '#FFFFFF', // Texto branco para contrastar com o vermelho
},
});