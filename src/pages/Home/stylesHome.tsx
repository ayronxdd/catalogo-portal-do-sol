import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Fundo cinza claro para destacar os cards
  },
  topoAzul: {
    backgroundColor: '#0047AB',
    height: 140,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  menuButton: {
    position: 'absolute',
    left: 20,
    top: 50,
  },
  textoSaudacao: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%', // Ajustado após nosso teste de 85%
  },
  conteudo: {
    flex: 1,
  },
  containerInternoCards: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  tituloCatalogo: {
    fontSize: 18, 
    fontWeight: 'bold', 
    marginVertical: 15,
    color: '#333',
  },
  searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: 10,
  paddingHorizontal: 15,
  height: 50,
  // Sombra
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
},
inputBusca: {
  flex: 1,
  marginLeft: 10,
  fontSize: 16,
  color: '#333',
},
divisor: {
  height: 1,
  backgroundColor: '#E0E0E0',
  marginHorizontal: 20,
  marginTop: 15,
  marginBottom: 5,
},
});