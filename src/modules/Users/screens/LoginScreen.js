import React from 'react';
import {Pressable, KeyboardAvoidingView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {View, Text} from 'react-native-animatable';
import {useFonts} from 'expo-font';
import {SmallTextInput, RoundButton} from './../../../components';
import {UserContext} from './../store/UserContext';
import {emailChanged, passwordChanged} from './../store/actions';
import {Colors} from './../../../globals';

const LoginScreen = () => {
    const {userState, dispatch} = React.useContext(UserContext);

    const [fontLoaded] = useFonts({
        DancingScript: require('./../../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
    });

    if (!fontLoaded) {
        return null;
    }

    return (
        <LinearGradient style={styles.linearGradient} colors={Colors.BG_COLORS}>
            <View animation="slideInUp" duration={2000} style={styles.card}>
                <View
                    style={{backgroundColor: '#FFFFFF', borderTopLeftRadius: 5, borderTopRightRadius: 5, padding: 15}}>
                    <Text style={{fontFamily: 'DancingScript', textAlign: 'center', fontSize: 30}}>Login</Text>
                </View>

                <View>
                    <View style={{padding: 20, position: 'relative'}}>
                        <SmallTextInput
                            placeholder="Email"
                            value={userState.email}
                            onChangeText={(value) => emailChanged(dispatch, value)}
                        />

                        <SmallTextInput
                            secureTextEntry
                            placeholder="Password"
                            onChangeText={(value) => passwordChanged(dispatch, value)}
                        />

                        <View style={{marginBottom: 50, marginTop: 10}}>
                            <Pressable>
                                <Text>Don't have an account? Register</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View
                        animation="fadeIn" duration={2000} delay={2500}
                        style={{position: 'absolute', bottom: -15, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <RoundButton
                            shadow
                            title="Login"
                            fontSize={16}
                            backgroundColor="#FFFFFF"
                            style={{paddingHorizontal: 50}}
                        />
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = {
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '90%',
        borderRadius: 5,
        backgroundColor: '#EEEEEE',
    },
};

export default LoginScreen;
