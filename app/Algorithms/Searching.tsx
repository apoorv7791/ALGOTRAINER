import React, { useEffect, useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Animated,
    FlatList,
} from 'react-native';
import { useTheme } from '@/app/Themes/ThemeContext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useRouter } from 'expo-router';

const AnimatedIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);

interface SearchingAlgo {
    id: string;
    name: string;
    description: string;
    code: string;
}

const searchingAlgorithms: SearchingAlgo[] = [
    {
        id: 'linear',
        name: 'Linear Search',
        description: '🔹 Check each element sequentially. • O(n) time • O(1) space',
        code: `public class LinearSearch {
    public static int linearSearch(int[] arr, int key) {
        for (int i = 0; i < arr.length; i++)
            if (arr[i] == key) return i;
        return -1;
    }
}`,
    },
    {
        id: 'binary',
        name: 'Binary Search',
        description: '🔹 Divide sorted array, O(log n) time • O(1) space',
        code: `public class BinarySearch {
    public static int binarySearch(int[] arr, int key) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] == key) return mid;
            else if (arr[mid] < key) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}`,
    },
];

const Searching = () => {
    const { theme } = useTheme();
    const [isLandscape, setIsLandscape] = useState(false);
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const router = useRouter();

    const animRefs = useRef<Record<string, Animated.Value>>({});
    searchingAlgorithms.forEach(algo => {
        if (!animRefs.current[algo.id]) animRefs.current[algo.id] = new Animated.Value(0);
    });

    useEffect(() => {
        ScreenOrientation.unlockAsync();
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });
        return () => subscription?.remove();
    }, []);

    const toggleExpand = (id: string) => {
        const anim = animRefs.current[id];
        if (expandedId === id) {
            Animated.timing(anim, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => setExpandedId(null));
        } else {
            setExpandedId(id);
            Animated.timing(anim, { toValue: 1, duration: 220, useNativeDriver: true }).start();
        }
    };

    const rotateStyle = (id: string) => {
        const anim = animRefs.current[id];
        const rotate = anim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
        return { transform: [{ rotate }] };
    };

    const expandStyle = (id: string) => ({
        opacity: animRefs.current[id],
        transform: [{ scaleY: animRefs.current[id].interpolate({ inputRange: [0, 1], outputRange: [0.95, 1] }) }],
        overflow: 'hidden' as const,
    });

    const renderItem = ({ item, index }: { item: SearchingAlgo; index: number }) => (
        <View style={[styles.section, { backgroundColor: theme.colors.surface || 'rgba(0,0,0,0.05)' }]}>
            <View style={styles.sectionHeaderRow}>
                <Text style={[styles.subHeader, { color: theme.colors.text, fontSize: isLandscape ? 15 : 16 }]}>
                    {index + 1}️⃣ {item.name}
                </Text>
                <TouchableOpacity onPress={() => toggleExpand(item.id)}>
                    <AnimatedIcon name="chevron-down" size={18} color={theme.colors.text} style={rotateStyle(item.id)} />
                </TouchableOpacity>
            </View>
            <Text style={[styles.description, { color: theme.colors.text, fontSize: isLandscape ? 13 : 14 }]}>
                {item.description}
            </Text>
            {expandedId === item.id && (
                <Animated.View style={expandStyle(item.id)}>
                    <CodeBlock code={item.code} fontSize={isLandscape ? 10 : 12} />
                </Animated.View>
            )}
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <FlatList
                data={searchingAlgorithms}
                keyExtractor={item => item.id}
                ListHeaderComponent={
                    <View style={styles.headerRow}>
                        <MaterialCommunityIcons
                            name="magnify"
                            size={isLandscape ? 22 : 26}
                            color={theme.colors.text}
                            style={styles.headerIcon}
                        />
                        <Text style={[styles.header, { color: theme.colors.text, fontSize: isLandscape ? 20 : 22 }]}>
                            Searching Algorithms
                        </Text>
                    </View>
                }
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: isLandscape ? 10 : 20 }}
                ListFooterComponent={
                    <TouchableOpacity
                        style={[styles.visualizeBtn, { backgroundColor: theme.colors.primary }]}
                        onPress={() => router.push('/AlgoVisualizer/SearchingVisual')}
                    >
                        <Text style={styles.btnText}>Visualize Searching Algorithms</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    section: {
        padding: 14,
        marginHorizontal: 0,
        marginVertical: 8,
        borderRadius: 8,
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    subHeader: { fontWeight: '600', marginBottom: 8 },
    description: { marginTop: 10, lineHeight: 20 },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    headerIcon: { marginRight: 8 },
    header: { fontWeight: 'bold', textAlign: 'center' },
    visualizeBtn: {
        margin: 16,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    btnText: { color: 'white', fontWeight: '700', fontSize: 16 },
});

export default Searching;