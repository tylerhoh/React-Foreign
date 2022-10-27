import {Text, View} from 'react-native';
import React,{useContext} from 'react';
import {theme, darkTheme} from './Theme';
const ThemeContext = React.createContext({});
const HomeScreen = () => {
    const themeFromContext = useContext(ThemeContext)
    return(
    <View>
        <View>
        <Text> I'm a home screen</Text>
        </View>
    </View>
    )
}

export default HomeScreen;