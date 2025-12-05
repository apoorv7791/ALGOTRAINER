import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

interface AuthProps {
    onLogin: () => void;
}

const Authentication: React.FC<AuthProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={style.card}>
            <Text>Authentication</Text>
            <TextInput
                style={style.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={style.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
            />
            <TouchableOpacity style={style.button} onPress={onLogin}>
                <Text style={style.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    card: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    button: { backgroundColor: '#6200ee', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 },
    buttonText: { color: 'white', fontWeight: 'bold' },
});

export default Authentication;
