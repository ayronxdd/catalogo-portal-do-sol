import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
  },
  menuContainer: {
    width: '65%',
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
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0047AB',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F0F0F0',
  },
  textoItem: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  }
});