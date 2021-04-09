import React from 'react';
import {TextInput} from 'react-native';

const SmallTextInput = (props) => {
    let style = {
        padding: 10,
        borderColor: '#DDD',
        borderBottomWidth: 1,
        marginBottom: 20,
    };

    return <TextInput style={style} {...props} />;
};

export default SmallTextInput;
