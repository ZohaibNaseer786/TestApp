import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style/ButtonStyle';

const Button = (props) => {


    return (
        <TouchableOpacity
            style={[styles.buttonStyle, props.buttonstyle]}
            activeOpacity={0.7}
            onPress={props.onPress}>
            <Text style={[styles.buttonTextStyle, props.style]}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )

}

export default Button
