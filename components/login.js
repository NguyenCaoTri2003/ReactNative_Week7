import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome6';
import { useState } from 'react'; 

export default function Login({navigation}) {

  const [name, setName] = useState(''); 

  return (
    <View style={styles.container}>
      <Image source={require('../assets/imgMain.png')} style={styles.imgMain}/>
      <Text style={styles.text1}>MANAGE YOUR TASK</Text>
      <View style={styles.input}>
        <Icons name= 'envelope' color= '#BCC1CA' size={20} style={styles.iconInput}/>
        <TextInput 
          placeholder= 'Enter your name' 
          placeholderTextColor="#BCC1CA"  
          style={styles.inputName}
         // onChangeText={text => setName(text)}
          value={name}
          onChangeText={setName} 
          >
        </TextInput>
      </View>
      <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Screen2', { userName: name })}>
        <Text style={styles.textBtnSubmit}>GET STARTED</Text>
        <Icons name= 'arrow-right' color= '#fff' size={16}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
  imgMain:{
    width: 180,
    height: 180
  },
  text1:{
    width: '60%',
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 36,
    color: '#8353E2',
    textAlign: 'center',
    marginBottom: 70
  },
  input:{
    borderWidth: 1,
    borderColor: '#9095A0',
    width: '80%',
    height: 43,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputName:{
    flex: 1,
    borderRadius: 12,
    height: 30,
    marginLeft: 10
  }, 
  iconInput:{
    marginLeft: 10
  },
  btnSubmit:{
    width: 190,
    height: 44,
    backgroundColor: '#00BDD6',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
    marginTop: 40
  },
  textBtnSubmit:{
    fontSize: 16,
    color: '#fff',
    marginRight: 10,
    
  }
});
