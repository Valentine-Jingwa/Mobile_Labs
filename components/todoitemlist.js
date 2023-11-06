import { StyleSheet, Text, View, Pressable, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { useState, useRef } from 'react';

export default function TodoItemList({ item, clickHandler }) {
    const [isCancelVisible, setIsCancelVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(-100)).current; 

    const toggleCancelVisibility = () => {
        setIsCancelVisible(!isCancelVisible);
        Animated.timing(slideAnim, {
            toValue: isCancelVisible ? -100 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View>
            <Pressable onPress={toggleCancelVisibility}>
                <Text style={styles.text}>{item.text}</Text>
            </Pressable>
            <Animated.View
                style={[
                    styles.cancelButton,
                    { 
                        transform: [{ translateX: slideAnim }] 
                    }
                ]}
            >
                <TouchableOpacity onPress={() => clickHandler(item.key)}>
                    <Text style={styles.cancelText}>X</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'pink',
        marginTop: 12,
        borderColor: 'pink',
        borderWidth: 2,
        borderRadius: 14,
        borderStyle: 'solid',

    },
    cancelButton: {
        position: 'absolute',
        marginTop: 15,
        width: 40,
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red', 
        right: -90, 
        borderRadius: 14,
    },
    cancelText: {
        color: '#fff',
    },
})