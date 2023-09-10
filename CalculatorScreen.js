import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Button } from 'react-native';
import styles from './AppStyles';


export default function CalculatorScreen({ navigation }) {

    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState(null);
    const [data, setData] = useState([]);


    const addNumbers = () => {
        const sum = parseFloat(number1) + parseFloat(number2);
        setData([{ key: number1 + " + " + number2 + " = " + sum }, ...data]);
        setResult(sum);
    };

    const subtractNumbers = () => {
        const difference = parseFloat(number1) - parseFloat(number2);
        setData([{ key: number1 + " - " + number2 + " = " + difference }, ...data]);
        setResult(difference);
    };

    return (

        <View style={styles.container}>
            <Text style={styles.resultText}>Result: {result}</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={number1}
                onChangeText={setNumber1}
            />
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={number2}
                onChangeText={setNumber2}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={addNumbers}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={subtractNumbers}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <View style={styles.historyButtonView}>
                    <Button
                        title="History"
                        onPress={() => navigation.navigate('History', { data: data })}
                    />
                </View>
            </View>

        </View>

    );
}
