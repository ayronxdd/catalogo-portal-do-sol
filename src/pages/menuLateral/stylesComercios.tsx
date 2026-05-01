import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    width: '94%', // Para ocupar quase toda a largura da tela
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    position: 'relative',
    // IMPORTANTE: Remova o flexDirection: 'row' se ele estiver aqui
    
    // Sombras
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  infoContainer: {
    marginBottom: 15, // Dá espaço para os botões aparecerem embaixo
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
  },

  descricao: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },

  botoesContainer: {
    flexDirection: 'row', // Faz os botões ficarem um ao lado do outro
    justifyContent: 'space-between', // Joga um para cada ponta
    alignItems: 'center',
  },

  botaoZap: {
    backgroundColor: '#25D366',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    gap: 8,
  },

  botaoMapa: {
    backgroundColor: '#F0F5FF', // Um fundo leve para o ícone do mapa
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  badgeDistancia: {
  position: 'absolute', // Faz o selo "flutuar"
  top: 10,
  right: 10,
  backgroundColor: '#E8E8E8', // Um cinza suave
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 6,
  borderWidth: 0.5,
  borderColor: '#CCC',
},
textoDistancia: {
  fontSize: 11,
  fontWeight: 'bold',
  color: '#0047AB', // Cor azul para destacar
},
});