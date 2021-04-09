import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDg579mWIcOXvbItCsmrW07laMapnV5ZFg',
    authDomain: 'react-native-firebase-blog.firebaseapp.com',
    projectId: 'react-native-firebase-blog',
    storageBucket: 'react-native-firebase-blog.appspot.com',
    messagingSenderId: '88101330613',
    appId: '1:88101330613:web:c2fbf94e6f1b377ced28fc',
    measurementId: 'G-D78TSN6NZK',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
