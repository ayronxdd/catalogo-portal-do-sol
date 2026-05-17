import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
  },
  menuContainer: {
    backgroundColor: 'white',
    width: '75%',
    height: '100%',
    padding: 20,
    paddingTop: 50,
    // Sombra
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
  top: 5,
  right: 5,
  backgroundColor: '#FF0000',
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 5,
  zIndex: 99,
},
textoDistancia: {
  fontSize: 12,
  fontWeight: 'bold',
  color: '#FFFFFF',
},
});