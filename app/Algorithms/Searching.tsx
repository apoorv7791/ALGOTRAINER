import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ScreenOrientation from 'expo-screen-orientation';

const Searching = () => {
    const { theme } = useTheme();
    const router = useRouter();
    const [isLandscape, setIsLandscape] = useState(false);
    const [showLinear, setShowLinear] = useState(false);
    const [showBinary, setShowBinary] = useState(false);

    const LinearAnim = useRef(new Animated.Value(0)).current;
    const BinaryAnim = useRef(new Animated.Value(0)).current;

    const AnimatedIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);

    useEffect(() => {
        ScreenOrientation.unlockAsync();
        const s = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });
        return () => s?.remove();
    }, []);

    const toggleAnimated = (visible: boolean, setVisible: (v: boolean) => void, anim: Animated.Value) => {
        if (visible) {
            Animated.timing(anim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => setVisible(false));
        } else {
            setVisible(true);
            Animated.timing(anim, {
                toValue: 1,
                duration: 220,
                useNativeDriver: true,
            }).start();
        }
    };

    const rotateStyle = (anim: Animated.Value) => {
        const rotate = anim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
        return { transform: [{ rotate }] };
    };
    const expandStyle = (anim: Animated.Value) => ({
        opacity: anim,
        transform: [{ scaleY: anim.interpolate({ inputRange: [0, 1], outputRange: [0.95, 1] }) }],
        overflow: 'hidden' as const,
    });

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: isLandscape ? 10 : 16 }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.headerRow}>
                <MaterialCommunityIcons name="magnify" size={isLandscape ? 20 : 26} color={theme.colors.text} />
                <Text style={[styles.header, { color: theme.colors.text, fontSize: isLandscape ? 18 : 20 }]}>Searching Algorithms</Text>
            </View>

            {/* Linear Search */}
            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <View style={styles.sectionHeaderRow}>
                    <Text style={[styles.subHeader, { color: theme.colors.text }]}>1️⃣ Linear Search</Text>
                    <TouchableOpacity style={styles.toggleBtn} onPress={() => toggleAnimated(showLinear, setShowLinear, LinearAnim)}>
                        <AnimatedIcon name={showLinear ? 'chevron-up' : 'chevron-down'} size={18} color={theme.colors.text} style={rotateStyle(LinearAnim)} />
                    </TouchableOpacity>
                </View>

                <Text style={[styles.description, { color: theme.colors.text }]}>🔹 Scan elements sequentially; good for unsorted lists.  •  O(n) time • O(1) space</Text>

                {showLinear && (
                    <Animated.View style={expandStyle(LinearAnim)}>
                        <CodeBlock
                            code={`public class LinearSearch {\n    public static int search(int[] arr, int target) {\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] == target) {\n                return i; // Element found\n            }\n        }\n        return -1; // Element not found\n    }\n}`}
                            language="java"
                            fontSize={isLandscape ? 8 : 10}
                        />
                    </Animated.View>
                )}
            </View>

            {/* Binary Search */}
            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <View style={styles.sectionHeaderRow}>
                    <Text style={[styles.subHeader, { color: theme.colors.text }]}>2️⃣ Binary Search</Text>
                    <TouchableOpacity style={styles.toggleBtn} onPress={() => toggleAnimated(showBinary, setShowBinary, BinaryAnim)}>
                        <AnimatedIcon name={showBinary ? 'chevron-up' : 'chevron-down'} size={18} color={theme.colors.text} style={rotateStyle(BinaryAnim)} />
                    </TouchableOpacity>
                </View>

                <Text style={[styles.description, { color: theme.colors.text }]}>🔹 Efficient on sorted arrays; halves the search space.  •  O(log n) time • O(1) space</Text>

                {showBinary && (
                    <Animated.View style={expandStyle(BinaryAnim)}>
                        <CodeBlock
                            code={`public class BinarySearch {\n    public static int search(int[] arr, int target) {\n        int left = 0, right = arr.length - 1;\n\n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n\n            if (arr[mid] == target)\n                return mid;\n            else if (arr[mid] < target)\n                left = mid + 1;\n            else\n                right = mid - 1;\n        }\n        return -1; // Element not found\n    }\n}`}
                            language="java"
                            fontSize={isLandscape ? 8 : 10}
                        />
                    </Animated.View>
                )}

                <TouchableOpacity
                    style={styles.visualizeBtn}
                    onPress={() => router.push('/AlgoVisualizer/SearchVisual')}
                >
                    <Text style={styles.btnText}>Visualize All Searching Algorithms</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginVertical: 18,
    },
    header: {
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 8,
        textAlign: 'center',
    },
    section: {
        padding: 12,
        marginHorizontal: 14,
        marginVertical: 8,
        borderRadius: 10,
        elevation: 2,
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    toggleBtn: {
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    subHeader: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 6,
    },
    description: {
        marginTop: 8,
        fontSize: 13,
        lineHeight: 19,
    },
    visualizeBtn: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Searching;
