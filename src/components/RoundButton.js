import React from 'react';
import {Pressable, Text} from 'react-native';
import {Styles} from './../globals';

const RoundButton = ({title, onPress, style, backgroundColor="#FFF", color="#000", fontSize=16, shadow=false, IconFamily, iconName, iconSize=18}) => {
    let shadowStyles = shadow ? Styles.shadow : null;

    let styles = {
        backgroundColor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        ...style,
        ...shadowStyles,
    };

    return (
        <Pressable onPress={onPress} style={styles}>
            <IconFamily name={iconName} size={iconSize} color={color} />
            <Text style={{color, fontSize, textAlign: 'center', marginLeft: 10}}>{title}</Text>
        </Pressable>
    );
};

export default RoundButton;
