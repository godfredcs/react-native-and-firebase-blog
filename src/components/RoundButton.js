import React from 'react';
import {Pressable, Text} from 'react-native';
import {Styles} from './../globals';

const RoundButton = ({title, onPress, style, backgroundColor="#FFF", color="#000", fontSize=16, shadow=false}) => {
    let shadowStyles = shadow ? Styles.shadow : null;

    let styles = {
        backgroundColor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        ...style,
        ...shadowStyles,
    };

    return (
        <Pressable onPress={onPress} style={styles}>
            <Text style={{color, fontSize, textAlign: 'center'}}>{title}</Text>
        </Pressable>
    );
};

export default RoundButton;
