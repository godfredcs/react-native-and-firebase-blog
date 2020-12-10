import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from './../screens';

const Stack = createStackNavigator();

const Auth = () => (
    <Stack.Navigator headerMode="none" initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
);

const Main = () => (
    <Stack.Navigator headerMode="none" initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
);

const AppNavigation = () => {
    return <NavigationContainer>{true ? <Auth /> : <Main />}</NavigationContainer>;
};

export default AppNavigation;
