import React,{useState} from 'react'
import {View,Text, StyleSheet, Button, TextInput} from 'react-native';

const Home= ({ navigation }) =>{
    const [name,setName] = useState("")
    const [password, setPassword] = useState()
    const handleLogin = () =>{
        if(name==="Fire" && password==="Flames"){
            navigation.navigate('Yolo');
        }
    }
    return(
        <View style={styles.container}>
        <View style={styles.header}>
          <Text style = {styles.boldText}>The Yolo App!</Text>
        </View>
        <View style={styles.body}>
            <Text>Username:</Text>
            <TextInput 
            placeholder='e.g. examplename@gmail.com'
            onChangeText={(val) =>setName(val)}
            ></TextInput>
            <Text>Password:</Text><TextInput onChangeText={(val) =>setPassword(val)}></TextInput>
           <Button title="Yolo" onPress={handleLogin}></Button>    
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor: 'yellow',
     alignItems: 'center',
     justifyContent: 'center',
    },
    header:{
     backgroundColor:'red',
     padding:20
    },
    boldText:{
     fontWeight: 'bold'
    },
    input:{
     backgroundColor:'blue',
     padding:20
    }
 })
export default Home;