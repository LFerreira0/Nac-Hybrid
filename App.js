import React,{Component} from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

//módulos do React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

//uso de Hooks para criar objetos
const Stack = createStackNavigator();

//header personalizado
function HeaderPersonalizado(){
  return(
    <View style={styles.titulo}>
    <h1>#Doe Orgãos</h1>
    </View>
  );
}

//tela inicial
function TelaInicial(){

  //chamada do objeto para gerir a navegação
  const navigation = useNavigation();


  //objeto que será passado para a tela de destino
  var obj = {
    nome: 'Usuario',
    sobrenome: 'Teste'
  }

  return(
    <View style={styles.container}>
       <View style={styles.img}>
        <Image
          style={{ width: 150, height: 150 }}
          source={require('./images/heart-beat.png')}
        />
      </View>
      <View>
      <TextInput
          style={styles.input1}
          label="Login"
          placeholder="Insira seu Login"
          autoCorrect={false}
          required={true}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input2}
          secureTextEntry={true}
          placeholder="Insira sua senha"
          autoCorrect={false}          
          onChangeText={() => {}}
        />
      </View>
      <View style={styles.botoes}>

        <TouchableOpacity onPress={() => navigation.navigate('Entrar',obj)}
          style={styles.btnentrar}>      
          <Text style={styles.btnentrartxt}>Entrar</Text>
        </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}
          style={styles.btncadastrar}>      
          <Text style={styles.btncadastrartxt}>Não possui uma conta ?</Text>
          <Text style={styles.btncadastrartxt2}>Cadastrar</Text>
        </TouchableOpacity>

     
      </View>
    </View>
  );
}

//tela de detalhes
function Cadastro(){
  
var obj = {
    nome: 'Usuario',
    sobrenome: 'FIAP'
  }

  //chamada do objeto para gerir a navegação
  const navigation = useNavigation();
  
  return(
    <View>
       <TextInput
      style={styles.input}
      placeholder="Nome"
      autoCorrect={false}
      onChangeText={()=>{}}
      />

      <TextInput
      style={styles.input}
      placeholder="E-mail"
      autoCorrect={false}
      onChangeText={()=>{}}
      />

      <TextInput
      style={styles.input}
      placeholder="RG"
      autoCorrect={false}
      onChangeText={()=>{}}
      />

      <TextInput
      style={styles.input}
      placeholder="CPF"
      autoCorrect={false}
      onChangeText={()=>{}}
      />

      <TextInput
      style={styles.input}
      placeholder="Especialidade"
      autoCorrect={false}
      onChangeText={()=>{}}
      />

      <TextInput
      style={styles.input}
      placeholder="CRM"
      autoCorrect={false}
      onChangeText={()=>{}}
      />

     <TouchableOpacity onPress={() => navigation.navigate('Entrar',obj)}
          style={styles.btnentrar}>      
          <Text style={styles.btnentrartxt}>Cadastrar</Text>
        </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}
          style={styles.btnvoltar}>      
          <Text style={styles.btnentrartxt}>←</Text>
        </TouchableOpacity>
    
    </View>
  );
}

//recebendo dados de uma tela anterior
function Entrar(){
  
  //chamada do objeto para gerir a navegação
  const route = useRoute();

  //recebendo objeto de uma origem de navegação
  const {nome} = route.params;
  const {sobrenome} = route.params;
  const navigation = useNavigation();
  return(
    <View style={styles.busca}>
    <TouchableOpacity onPress={() => navigation.goBack()}
          style={styles.logout}>      
          <Text style={styles.btnentrartxt}><Image
          style={{ width: 23, height: 23 }}
          source={require('./images/logout2.png')}
        /></Text>
        </TouchableOpacity>
      <Text style={styles.paragraph}>{nome} </Text>

       <TextInput
      style={styles.input}
      placeholder="Nome"
      autoCorrect={false}
      onChangeText={()=>{}}
      />

      <TouchableOpacity
      style={styles.buscar}>
        <Text style={styles.btnentrartxt}>Buscar</Text>      
      </TouchableOpacity>
      <View style={styles.bg}>
      <Image
          style={{ width: 200, height: 200 }}
          source={require('./images/skills.png')}
        />
    </View>
     
    </View>    
  );
}


class App extends Component {
  render(){
    return (
      
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name='Home'
            options={{headerTitle: props => <HeaderPersonalizado/>}}>
            {props => <TelaInicial/>}
          </Stack.Screen>

          <Stack.Screen
            name='Entrar'
            options={{title: 'Bem vindo'}}>
            {props => <Entrar/>}
          </Stack.Screen>

          <Stack.Screen
            name='Cadastro'
            options={{title: 'Cadastre-se'}}>
            {props => <Cadastro/>}
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>

  );
  }
} export default App

const styles = StyleSheet.create({
  busca: {
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#cf404a',
  },
  img: {
    marginTop: '40px',
    alignItems: 'center',
  },
  input1: {
    flex: 1,
    width: '90%',
    height: '35px',
    padding: '5px',
    border: '1px solid gray',
    borderRadius: '5px',
    marginLeft: '5%',
    marginTop: '20px'
    
  },
  input2: {
    width: '90%',
    height: '35px',
    padding: '5px',
    marginTop: '20px',
    border: '1px solid gray',
    borderRadius: '5px',
    marginLeft: '5%',
    
  },
  titulo:{
    flex: 1,
    color: '#cf404a',
    fontFamily: 'cursive',
    alignItems: 'center',    
    fontSize: '13px',
    
  },
input:{
  width: '90%',
  marginLeft: '5%',
  padding: '5px',
  border: '1px solid gray',
  borderRadius: '5px',
  marginTop: '20px',
},
 botoes: {
   marginTop: '10px',
   width: '100%',
  },
btnentrar:{
  backgroundColor: '#cf404a',
    color: '#fff',
    width: '40%',
    height: '35px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    marginTop: '25px',
    marginLeft: '30%',
},
  btnentrartxt: {
    color: '#fff',
    fontFamily: 'fantasy',
    letterSpacing: '1px',
  },
  btncadastrar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px'
  },

  btncadastrartxt: {
    color: '#cf404a',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: '15px'
  },
  btncadastrartxt2: {
    color: '#cf404a',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: '17px'
  },
  btnvoltar:{
    backgroundColor: '#cf404a',
    color: '#fff',
    width: '10%',
    height: '35px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    marginTop: '25px',
    marginLeft: '5%',
  },
 buscar:{
   backgroundColor: '#cf404a',
    color: '#fff',
    width: '30%',
    height: '35px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    marginTop: '25px',
    marginLeft: '5%', 
 },
 bg:{
   alignItems: 'center',
   marginTop: '50px',
   opacity: '0.3',
 },
 logout:{
   
    color: '#fff',
    width: '8%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    alignContent: 'center',
    marginTop: '5px'
 },

});