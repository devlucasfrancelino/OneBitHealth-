import React from "react";
import { View, Text } from 'react-native';
import { StyleSheet } from "react-native";

export default function Title() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora de IMC</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        color: "red",
        fontSize: 24,
        fontWeight: 'bold',
    },
    container : {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        marginTop: 70,
        marginBottom: 20,
    }
})