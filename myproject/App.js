import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react'
import {View,Text, StyleSheet, Button, TextInput} from 'react-native';
import HomeScreen from './HomeScreen';
import Navigator from './routes/homeStack'
//import {theme, darkTheme} from './Theme'

const ThemeContext = React.createContext({});
const App=() => {
  //const [darkMode, setDarkMode] = useState(false)
  return (
    <Navigator/>
  );
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
//   // Get the theme with React's context API
//   const themeFromContext = useContext(ThemeContext)
//   return (
//     <View
//       style={{
//         width: 200,
//         height: 200,
//         background: themeFromContext.colors.background,
//       }}
//     />
//   )
// }

export default App;