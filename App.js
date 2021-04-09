import 'react-native-gesture-handler';
// import {StatusBar} from 'expo-status-bar';
import React from 'react';
import UserProvider from './src/modules/Users/store/UserContext';
import AppNavigation from './src/navigation';

export default function App() {
    return (
        <UserProvider>
            <AppNavigation />
        </UserProvider>
    );
}
