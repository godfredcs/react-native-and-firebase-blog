import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {UserContext} from './../modules/Users/store/UserContext';

import {LoginScreen, HomeScreen} from './../screens';

const Stack = createStackNavigator();

const Auth = () => (
    <Stack.Navigator headerMode="none" initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
);

const Main = () => (
    <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
);

const AppNavigation = () => {
    const {
        userState: {is_authenticated},
    } = React.useContext(UserContext);

    return <NavigationContainer>{!is_authenticated ? <Auth /> : <Main />}</NavigationContainer>;
};

export default AppNavigation;
