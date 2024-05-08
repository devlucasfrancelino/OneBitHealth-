import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import IMC from "./Imc";

export default function Form() {
    
    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [resultIMC, setResultIMC] = useState();
    const [messageIMC, setMessageIMC] = useState('Preencha o peso e altura');
    const [textButton, setTextButton] = useState("Calcular");

    function calculateIMC(){
        const result = (peso.replace(",",".") * 1)/(altura.replace(",",".") * 1 * altura.replace(",",".") * 1)
        const result_imc_string_number = parseFloat(result)    
        return setResultIMC(result_imc_string_number.toFixed(2))
    }

    function validateImc() {
      if (peso != null && peso != null) {
        calculateIMC();
        setPeso(null);
        setAltura(null);
        setMessageIMC('Seu IMC é igual a:');
        setTextButton('Calcular Novamente');
        Keyboard.dismiss()
        return
      } 
        setResultIMC(null)
        setTextButton('Calcular');
        setMessageIMC('Preencha o peso e altura');
        Keyboard.dismiss()
      }
    
    return (
        <View style={styles.container}>
            <View style={styles.Info}>
                <Text style={styles.Text}>Altura</Text>
                <TextInput 
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex: 1.75" 
                    keyboardType="numeric"
                    style={styles.Input}
                />
                <Text style={styles.Text}>Peso</Text>
                <TextInput 
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex: 75" 
                    keyboardType="numeric"
                    style={styles.Input}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.Button} onPress={() => validateImc()}>
                    <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textResult}>
                <IMC messageIMC={messageIMC} resultIMC={resultIMC}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        margin : 25,
    },
    Info : {
        marginLeft: 10,
    },
    Text : {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 20,
    },
    Input : {
        backgroundColor: '#e0e5e5',
        borderRadius : 40,
        marginBottom: 5,
        marginTop: 5,
        fontSize : 16,
        padding: 10,
    },
    Button : {
        borderRadius : 50,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : "red",
        paddingTop : 14,
        paddingBottom : 14,
        marginLeft : 10,
        marginTop : 30,
    },
    textButton : {
        fontSize : 20,
        color : '#ffffff'
    },
    
})