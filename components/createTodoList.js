import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function CreateTodoList({ submitHandler }) {

    const [text, setText] = useState('');

    const chnageHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput style={styles.input} placeholder='Enter Task' onChangeText={(val) => chnageHandler(val)} />
            <Button title="Add Task" color='skyblue' onPress={() => submitHandler(text)} />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        backgroundColor: 'white',
        borderRadius: 14,
    }

});