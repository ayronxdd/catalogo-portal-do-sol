import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topoAzul: {
    width: '100%',
    height: height * 0.16,
    backgroundColor: '#0047AB',
    justifyContent: 'center', // Centraliza a saudação na vertical
    alignItems: 'center',     // Centraliza a saudação na horizontal
    paddingTop: 20,           // Espaço pra parte de cima do telefone
  },
  menuButton: {
  position: 'absolute',
  left: 20,
  top: 50,
  zIndex: 99, // Trás o botão pra primeira camada
  elevation: 10,
  padding: 10, 
  },
  textoSaudacao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
  },
conteudo: {
  flex: 1,
  backgroundColor: '#fff',
},
containerInternoCards: {
  alignItems: 'center',
  paddingVertical: 20,
},
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
  },
  menuLateral: {
    width: '60%', // % que a barra cobre da tela 
    height: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 60,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tituloMenu: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#0047AB',
  },
  itemMenu: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  }

  
});