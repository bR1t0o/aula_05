import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  function cadastrarUsuario() {
    if (nome && telefone) {
      setUsuarios([...usuarios, { nome, telefone }]);
      setNome('');
      setTelefone('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Usuário</Text>

      <View style={styles.form}>
        <Text>Nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome"
        />

        <Text>Telefone</Text>
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          placeholder="Digite o telefone"
        />

        <View style={styles.botaoContainer}>
          <Button title="Cadastrar" onPress={cadastrarUsuario} />
        </View>
      </View>

      <View style={styles.divisor} />

      <View style={styles.listaCabecalho}>
        <Text style={styles.colunaCabecalho}>Nome</Text>
        <Text style={styles.colunaCabecalho}>Telefone</Text>
      </View>

      <ScrollView>
        {usuarios.map((user, index) => (
          <View key={index} style={styles.listaItem}>
            <Text style={styles.coluna}>{user.nome}</Text>
            <Text style={styles.coluna}>{user.telefone}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  divisor: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginVertical: 10,
  },
  listaCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  colunaCabecalho: {
    fontWeight: 'bold',
    width: '48%',
  },
  listaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  coluna: {
    width: '48%',
  },
});
