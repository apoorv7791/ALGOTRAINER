import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useTheme } from '../Themes/Themecontext';

const LinkedListVisual = () => {
    const { theme } = useTheme();


    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]} contentContainerStyle={{ paddingBottom: 88, paddingTop: 40, }}
            showsVerticalScrollIndicator={false}>
            <Text style={[styles.title, { color: theme.colors.text }]}>Linked List Visual</Text>
            <View style={styles.listRow}>
                <View style={[styles.node, { borderColor: theme.colors.primary }]}>
                    <Text style={[styles.value, { color: theme.colors.text }]}>10</Text>
                    <Text style={styles.pointer}>→</Text>
                </View>
                <View style={[styles.node, { borderColor: theme.colors.primary }]}>
                    <Text style={[styles.value, { color: theme.colors.text }]}>20</Text>
                    <Text style={styles.pointer}>→</Text>
                </View>
                <View style={[styles.node, { borderColor: theme.colors.primary }]}>
                    <Text style={[styles.value, { color: theme.colors.text }]}>30</Text>
                    <Text style={styles.pointer}>→</Text>
                </View>
                <View style={[styles.node, { borderColor: theme.colors.primary }]}>
                    <Text style={[styles.value, { color: theme.colors.text }]}>40</Text>
                    <Text style={styles.pointer}>→</Text>
                </View>
                <View style={[styles.node, { borderColor: theme.colors.primary }]}>
                    <Text style={[styles.value, { color: theme.colors.text }]}>50</Text>
                    <Text style={styles.pointer}>→</Text>
                </View>

                <View style={[styles.node, { borderColor: theme.colors.primary }]}>
                    <Text style={styles.pointer}>NULL</Text>
                </View>

                <Text style={[styles.info, { color: theme.colors.text }]}>
                    This is a linked list visualization.{"\n"}
                    You can add inseert, delete, traversal, and animation next!
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 30,
    },
    listRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 14,
    },
    node: {
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 20,
        backgroundColor: '#1E1E1E',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3,
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    pointer: {
        marginLeft: 10,
        fontSize: 16,
        color: '#94A3B8',
    },
    info: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 14,
    },
})

export default LinkedListVisual;
