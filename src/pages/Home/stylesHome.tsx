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
  }
});