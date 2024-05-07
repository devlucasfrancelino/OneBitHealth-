import React from "react";
import { View, StyleSheet } from 'react-native';
import Form from "../Form";

export default function Main() {
    return (
        <View style={styles.container}>
            <Form/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F5FCFF',
        borderRadius: 40,
    }    
})