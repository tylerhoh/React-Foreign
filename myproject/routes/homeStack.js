import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home';
import Yolo from '../screens/yolo'

const screens = {
    Home: {
        screen: Home
    },
    Yolo: {
        screen: Yolo
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);