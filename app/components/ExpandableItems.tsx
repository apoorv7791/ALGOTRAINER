import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated, LayoutAnimation } from 'react-native';
import { useTheme } from '../Themes/Themecontext';
import { Ionicons } from '@expo/vector-icons';

interface ExpandableItemsProps {
    title: string;
    items: string[];
    onSelectItem: (item: string) => void;
}

const ExpandableItems = ({ title, items, onSelectItem }: ExpandableItemsProps) => {
    const [expanded, setExpanded] = useState(false);
    const animation = useRef(new Animated.Value(0)).current
    const { theme } = useTheme();


    // Animate expand/collapse
    useEffect(() => {
        Animated.timing(animation, {
            toValue: expanded ? 1 : 0,
            duration: 250,
            useNativeDriver: false,
        }).start();
    }, [expanded]);

    const height = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, items.length * 30], // assuming each item has a height of 50 but we can adjust based on content
    })

    const rotate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    })

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.card }]}>
            <TouchableOpacity
                style={styles.header}
                onPress={toggleExpand}>
                <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
                <Animated.View style={{ transform: [{ rotate }] }}>
                    <Ionicons
                        name={expanded ? 'chevron-up' : 'chevron-down'}
                        size={24}
                        color={theme.colors.text}
                    />
                </Animated.View>
            </TouchableOpacity>

            {/* Expandable content */}
            <Animated.View style={{ height: height, overflow: 'hidden' }}>
                {expanded && (
                    <ScrollView
                        style={[styles.itemsContainer, { maxHeight: 200 }]} // Set a maximum height for scrolling
                        showsVerticalScrollIndicator={true}
                        nestedScrollEnabled={true}
                    >
                        {items.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.item}
                                onPress={() => onSelectItem(item)}
                            >
                                <Text style={[styles.itemText, { color: theme.colors.text }]}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginBottom: 10,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    itemsContainer: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.1)',
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
    },
    itemText: {
        fontSize: 16,
    }
});

export default ExpandableItems;
