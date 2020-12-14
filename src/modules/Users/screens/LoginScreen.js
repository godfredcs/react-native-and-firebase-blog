import React from 'react';
import {Pressable, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {View, Text} from 'react-native-animatable';
import {useFonts} from 'expo-font';
import {SmallTextInput, RoundButton} from './../../../components';
import {UserContext} from './../store/UserContext';
import {emailChanged, passwordChanged, authenticateUser} from './../store/actions';
import {Colors, Styles} from './../../../globals';
import {Entypo} from '@expo/vector-icons';

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
                    <Text style={{fontFamily: 'DancingScript', textAlign: 'center', fontSize: 30, color: Colors.BG_COLORS[Colors.BG_COLORS / 2]}}>
                        Login
                    </Text>
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
                        animation="fadeIn" duration={2000} delay={1500}
                        style={{position: 'absolute', bottom: -15, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        {
                            userState.authenticating_user
                                ? <View style={[Styles.shadow, styles.spinner]}>
                                    <ActivityIndicator color={Colors.accent} />
                                    <Text style={{marginLeft: 10}}>Authenticating...</Text>
                                </View>
                                : <RoundButton
                                    shadow
                                    title="Login"
                                    fontSize={16}
                                    color="#FFFFFF"
                                    iconName="login"
                                    IconFamily={Entypo}
                                    style={{ paddingHorizontal: 50 }}
                                    backgroundColor={Colors.accent}
                                    onPress={() => authenticateUser(dispatch, { email: userState.email, password: userState.password })}
                                />
                        }
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
    spinner: {
        borderRadius: 30,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 50,
        justifyContent: 'center',
        backgroundColor: '#EEEEEE',
    },
};

export default LoginScreen;
