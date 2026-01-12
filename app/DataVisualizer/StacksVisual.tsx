// app/(drawer)/DataVisualizer/StacksVisual.tsx
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';

export default function StacksVisual() {
    const { theme } = useTheme();
    const [stack, setStack] = useState<number[]>([]);
    const [animValue] = useState(new Animated.Value(0));
    const [message, setMessage] = useState(''); // if my stack is full then this state should display a message to the user
    const [isPushing, setIsPushing] = useState(false);
    const [isPoping, setISPoping] = useState(false);
    const [pendingValue, setPendingValue] = useState<number | null>(null);



    const MAX_STACK_SIZE = 6; // stack size

    const push = (value: number) => {
        if (stack.length >= MAX_STACK_SIZE) {
            setMessage('Stack is full!');
            return;
        }
        setIsPushing(true);
        setPendingValue(value);
        animateIn();

        // After animation finishes, actually add to stack
        setTimeout(() => {
            setStack(prev => [...prev, value]);
            setIsPushing(false);
            setPendingValue(null);
            setMessage('');
        }, 400);

    };


    const pop = () => {
        if (!stack.length) return; // if stack is empty then return
        setISPoping(true);
        animateOut();

        setTimeout(() => {
            setStack(prev => prev.slice(0, prev.length - 1));
            setISPoping(false);
            setPendingValue(null);
            setMessage('');
        }, 300);
    };

    const clearStack = () => {
        setStack([]);
        setMessage('');
    }

    const animateIn = () => {
        animValue.setValue(0);
        Animated.timing(animValue, {
            toValue: 1,
            duration: 400,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
        }).start();
    };

    const animateOut = () => {
        animValue.setValue(1);
        Animated.timing(animValue, {
            toValue: 0,
            duration: 300,
            easing: Easing.in(Easing.quad),
            useNativeDriver: true,
        }).start();
    };

    const latestPlateScale = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.8, 1],
    });

    const latestPlateOpacity = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>Stack Visualizer</Text>

            <View style={styles.stackArea}>
                <View style={styles.ground} />

                {stack.map((value, index) => (
                    <View
                        key={index}
                        style={[
                            styles.plate,
                            {
                                bottom: index * 70,
                                backgroundColor: '#34D399',
                                borderColor: theme.colors.primary,
                            },
                        ]}
                    >
                        <Text style={styles.plateText}>{value}</Text>
                        {index === stack.length - 1 && <Text style={styles.topLabel}>TOP</Text>}
                    </View>
                ))}

                {/* Animated plate flying in during push */}
                {isPushing && pendingValue !== null && (
                    <Animated.View
                        style={[
                            styles.plate,
                            {
                                bottom: stack.length * 70, // appears at the new top position
                                backgroundColor: '#34D399',
                                borderColor: '#10B981',
                                transform: [{ scale: latestPlateScale }],
                                opacity: latestPlateOpacity,
                                position: 'absolute',
                            },
                        ]}
                    >
                        <Text style={styles.plateText}>{pendingValue}</Text>
                    </Animated.View>
                )}
                {/* Animated plate flying in during push */}
                {isPoping && stack.length > 0 && (
                    <Animated.View
                        style={[
                            styles.plate,
                            {
                                bottom: (stack.length - 1) * 70, // appears at the new top position
                                backgroundColor: '#34D399',
                                borderColor: '#10B981',
                                transform: [{ scale: latestPlateScale }],
                                opacity: latestPlateOpacity,
                                position: 'absolute',
                            },
                        ]}
                    >
                        <Text style={styles.plateText}>{stack[stack.length - 1]}</Text>
                    </Animated.View>
                )}

            </View>

            <View style={styles.controls}>
                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: '#34D399' }]}
                    onPress={() => push(Math.floor(Math.random() * 90) + 10)}
                >
                    <Text style={styles.btnText}>PUSH</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: '#EF4444' }]}
                    onPress={pop}
                >
                    <Text style={styles.btnText}>POP</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: '#9333EA' }]}
                    onPress={clearStack}
                >
                    <Text style={styles.btnText}>CLEAR</Text>
                </TouchableOpacity>
            </View>

            <Text style={[styles.info, { color: theme.colors.secondary }]}>
                {stack.length === 0
                    ? 'Stack is empty'
                    : `Size: ${stack.length} | Top → ${stack[stack.length - 1]}`}
            </Text>
            {message !== '' && (
                <Text style={[styles.info, { color: '#F87171' }]}>
                    {message}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 50 },
    title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
    stackArea: { flex: 1, height: '100%', justifyContent: 'flex-end', alignItems: 'center', position: 'relative' },
    ground: { height: 4, width: 200, backgroundColor: '#64748B', borderRadius: 2 },
    plate: {
        position: 'absolute',
        width: 120,
        height: 40,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
    },
    plateText: { color: 'white', fontSize: 24, fontWeight: 'bold' },
    topLabel: {
        position: 'absolute',
        right: -50,
        top: 18,
        fontSize: 14,
        fontWeight: '600',
        color: '#34D399',
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },

    btn: {
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 12,
    },

    btnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },

    info: {
        textAlign: 'center',
        fontSize: 16,
        paddingBottom: 30,
    },

});
