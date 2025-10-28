import React from 'react';
import { StyleSheet, TouchableOpacity, View, Animated, Text } from 'react-native';
// @ts-ignore: missing type declarations for react-native-vector-icons/Feather
const Icon: any = require('react-native-vector-icons/Feather').default;

interface ExpandableItemsProps {
    title: string
    items: string[]
    onSelectItem: (item: string) => void
}


const ExpandableItems: React.FC<ExpandableItemsProps> = ({ title, items, onSelectItem }) => {
    const [expanded, setExpanded] = React.useState(false);
    const animation = React.useRef(new Animated.Value(0)).current;

    const toggleExpand = () => {
        const toValue = expanded ? 0 : 1;
        Animated.timing(animation, {
            toValue,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setExpanded(!expanded);
    }

    const height = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, items.length * 40], // Assuming each item has a height of 40
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleExpand} style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Icon name={expanded ? "chevron-up" : "chevron-down"} size={18} />
            </TouchableOpacity>

            <Animated.View style={{ height, overflow: 'hidden' }}>
                {items.map((item) => (
                    <TouchableOpacity key={item} style={styles.subItem} onPress={() => onSelectItem(item)}>
                        <Text style={styles.subText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        backgroundColor: '#d4c8f7ff',
        borderRadius: 12,
        paddingHorizontal: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 14,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    subItem: {
        paddingVertical: 10,
        paddingLeft: 16,
    },
    subText: {
        fontSize: 16,
        color: '#333',
    },
})

export default ExpandableItems;
