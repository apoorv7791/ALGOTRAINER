import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Updates from 'expo-updates';

export default function ErrorScreen({ error }: { error?: Error }) {
    useEffect(() => {
        // Ensure the splash screen is hidden so user can see the error UI
        (async () => {
            try {
                await SplashScreen.hideAsync();
            } catch (e) {
                // ignore
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Something went wrong</Text>
            <Text style={styles.message}>{error?.message ?? 'Unexpected error'}</Text>
            <Pressable
                style={styles.button}
                onPress={async () => {
                    try {
                        if (Updates.reloadAsync) await Updates.reloadAsync();
                        else global.location.reload();
                    } catch (e) {
                        // fallback: do nothing
                    }
                }}
            >
                <Text style={styles.buttonText}>Reload</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 12,
        color: '#111',
    },
    message: {
        fontSize: 14,
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
});
