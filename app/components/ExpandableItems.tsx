import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../Themes/Themecontext';
import { Ionicons } from '@expo/vector-icons';

interface ExpandableItemsProps {
    title: string;
    items: string[];
    onSelectItem: (item: string) => void;
}

const ExpandableItems = ({ title, items, onSelectItem }: ExpandableItemsProps) => {
    const [expanded, setExpanded] = useState(false);
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.card }]}>
            <TouchableOpacity
                style={styles.header}
                onPress={() => setExpanded(!expanded)}
            >
                <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
                <Ionicons
                    name={expanded ? 'chevron-up' : 'chevron-down'}
                    size={24}
                    color={theme.colors.text}
                />
            </TouchableOpacity>

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
