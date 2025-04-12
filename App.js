import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { rotulo_btn_cadastro_meta, rotulo_lista_cadastros, rotulo_input_meta, rotulo_input_meta2 } from './mensagens';
import { useState } from 'react';
import TextBox from './components/textInput';
import Botao from './components/button'

export default function App() {
  const [nome, setnome] = useState('');
  const [telefone, settelefone] = useState('')
  const [cadastros, setcadastros] = useState([]);

  /*function metaInputHandler(inputText, inputText2) {
    setnome(inputText)
    settelefone(inputText2)
  };*/

  function adicionarMetaHandler() {
    const novoCadastro = {
      nome: nome,
      telefone: telefone
    };

    setcadastros([...cadastros, novoCadastro]);
    setnome('');
    settelefone('');
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize:18, fontWeight:"bold"}}>Cadastro de usuários</Text>
      <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', flex: 1/* backgroundColor: 'red'*/ }}>

        <View style={{ gap: 10, flex: .5, /*backgroundColor:'black'*/ }}>

          <View style={{ flexDirection: 'row', gap: 20, /*backgroundColor:'blue'*/ }}>
            <Text style={{ width: 60, alignSelf: 'center' }}>Nome:</Text>
            <TextBox style={{ alignItems: 'stretch' }}

              value={nome}
              onChangeText={setnome}
              placeholder={rotulo_input_meta}
            />
          </View>
          <View style={{ flexDirection: 'row', gap: 20, /*backgroundColor:'blue'*/ }}>
            <Text style={{ width: 60, alignSelf: 'center' }}>Telefone:</Text>
            <TextBox
              value={telefone}
              onChangeText={settelefone}
              placeholder={rotulo_input_meta2}
            />
          </View>
          


        </View>

        <View style={{marginLeft:80,backgroundColor:"green"}}>

        <Botao title={rotulo_btn_cadastro_meta} onPress={adicionarMetaHandler}  />
        </View>
       

        <View style={styles.divisoria} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between'/*backgroundCo    lor:'green'*/, flex: .2 }}>
        <Text>Nome</Text>
        <Text>Telefone</Text>
      </View>

      <View style={styles.metaContainer}>
        <ScrollView>
          {cadastros.map((pessoa, index) => (
            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

              <Text>{pessoa.nome}</Text>
              <Text>{pessoa.telefone}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    padding: 30,
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'red'
  },

  metaContainer: {
    flex: 2,
    //backgroundColor: 'red',
  },
  divisoria: {
    borderBottomWidth: 1,

    borderBottomColor: 'black'
  }


});

