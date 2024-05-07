import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function IMC(props) {
    return (
        <View style={styles.textResult}>
            <Text style={styles.ImcText}>{props.messageIMC}</Text>
            <Text style={styles.Imc}>{props.resultIMC}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textResult : {
        alignContent : 'center',
        marginTop : 80,
    },
    ImcText : {
        color : 'red',
        alignSelf : 'center',
        fontSize : 20,
        fontWeight : 'bold',
    },
    Imc : {
        color : 'red',
        alignSelf : 'center',
        fontSize : 56,
        fontWeight : 'bold',
    }
})