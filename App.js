import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TextInput, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import estilos from './src/styleSheet/estilos';

function Conteudo() {
  const [nome, setNome] = useState('');
  const [lanche, setLanche] = useState('Hambúrguer');
  const [observacoes, setObservacoes] = useState('');
  const [pedido, setPedido] = useState('');

  const lanches = {
    Hambúrguer: require('./assets/hamburger.png'),
    Pizza: require('./assets/pizza.png'),
    Sanduíche: require('./assets/sandwich.png'),
    Sushi: require('./assets/sushi.png')
  };

  function fazerPedido() {
    if (nome === '') {
      setPedido('Por favor, digite seu nome!');
    } else {
      setPedido(`Pedido de: ${nome}\nLanche: ${lanche}\nObservação: ${observacoes || 'Nenhuma'}`);
    }
  }

  return (
    <ScrollView style={estilos.container} contentContainerStyle={estilos.conteudo}>
      <View style={estilos.conteudoInterno}>
        <Text style={estilos.tituloConteudo}>Lanchonete App</Text>

        <TextInput
          placeholder="Digite seu nome"
          style={estilos.inputNome}
          value={nome}
          onChangeText={setNome}
        />

        <Text style={estilos.textoConteudo}>Escolha seu lanche:</Text>
        <Picker
          selectedValue={lanche}
          style={estilos.picker}
          onValueChange={(itemValue) => setLanche(itemValue)}
        >
          <Picker.Item label="Hambúrguer" value="Hambúrguer" />
          <Picker.Item label="Pizza" value="Pizza" />
          <Picker.Item label="Sanduíche" value="Sanduíche" />
          <Picker.Item label="Sushi" value="Sushi" />
        </Picker>

        <Image
          source={lanches[lanche]}
          style={estilos.imagem}
        />

        <TextInput
          placeholder="Observações (ex: sem cebola)"
          style={estilos.inputObservacoes}
          value={observacoes}
          onChangeText={setObservacoes}
          multiline={true}
        />

        <TouchableHighlight
          style={estilos.botao}
          onPress={fazerPedido}
        >
          <Text style={estilos.textoBotao}>Fazer Pedido</Text>
        </TouchableHighlight>

        <Text style={estilos.textoResultado}>{pedido}</Text>
      </View>
    </ScrollView>
  );
}

export default Conteudo;