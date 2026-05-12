import { StyleSheet } from 'react-native';

const componentes = StyleSheet.create({
  inputNome: {
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 10,
    fontSize: 14,
    backgroundColor: '#FFFFFF',
  },
  inputObservacoes: {
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 10,
    fontSize: 14,
    backgroundColor: '#FFFFFF',
    minHeight: 60,
    textAlignVertical: 'top',
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#FFD700',
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 10,
  },
  botao: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  imagem: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 15,
  },
  textoConteudo: {
    fontSize: 14,
    color: '#666',
    marginTop: 15,
    fontWeight: '600',
  },
});

export default componentes;

