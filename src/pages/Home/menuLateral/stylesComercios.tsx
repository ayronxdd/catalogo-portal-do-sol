import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 15,
    
    // Sombra para Android
    elevation: 4,

    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoContainer: {
    marginBottom: 12,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  categoria: {
    fontSize: 14,
    color: '#0047AB',
    fontWeight: '600',
    marginBottom: 4,
  },
  descricao: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 12,
  },
  botaoZap: {
    backgroundColor: '#25D366',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  botaoMapa: {
    backgroundColor: '#F0F0F0',
    padding: 8,
    borderRadius: 8,
  }
});