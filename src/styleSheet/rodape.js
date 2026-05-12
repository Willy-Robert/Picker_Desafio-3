import { StyleSheet } from 'react-native';

const rodape = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
  },
  resultado: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
    paddingHorizontal: 10,
    minHeight: 40,
  },
});

export default rodape;
