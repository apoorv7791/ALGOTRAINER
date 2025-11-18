import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useTheme } from '../Themes/Themecontext';

const LinkedListVisual = () => {
    const { theme } = useTheme();

    const list = [20, 30, 40, 50];

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={{ paddingBottom: 120, paddingTop: 40 }}
            showsVerticalScrollIndicator={false}
        >
            <Text style={[styles.title, { color: theme.colors.text }]}>
                Linked List Visualization
            </Text>
            <View>
                <View style={[styles.listWrapper,]}>
                    <View style={styles.nodeWrapper}>
                        <View style={styles.nodeContainer}>
                            <View style={[
                                styles.nodeBox,
                                { borderColor: theme.colors.primary }
                            ]}>
                                <Text style={[styles.nodeValue, { color: theme.colors.text }]}>
                                    10
                                </Text>
                            </View>

                            <Text style={styles.arrow}>➜</Text>
                        </View>

                        <Text style={[styles.frontLabel, { color: theme.colors.primary }]}>
                            HEAD ↓
                        </Text>

                    </View>

                    <View style={styles.listRow}>
                        {list.map((item, index) => (
                            <View key={index} style={styles.nodeContainer}>
                                <View style={[
                                    styles.nodeBox,
                                    { borderColor: theme.colors.primary }
                                ]}>
                                    <Text style={[styles.nodeValue, { color: theme.colors.text }]}>
                                        {item}
                                    </Text>
                                </View>

                                <Text style={styles.arrow}>➜</Text>
                            </View>
                        ))}

                    </View>
                    <View style={styles.nodeWrapper}>
                        <View style={styles.nodeContainer}>
                            <View style={[
                                styles.nodeBox,
                                { borderColor: theme.colors.primary }
                            ]}>
                                <Text style={[styles.nodeValue, { color: theme.colors.text }]}>
                                    NULL
                                </Text>
                            </View>
                        </View>

                        <Text style={[styles.tailLabel, { color: '#e11d48' }]}>
                            ↑ TAIL
                        </Text>
                    </View>

                </View>
            </View>



            <View style={[styles.explanationBox, { borderColor: theme.colors.primary }]}>
                <Text style={[styles.explanationTitle, { color: theme.colors.primary }]}>
                    How a Linked List Works:
                </Text>

                <Text style={[styles.explanationText, { color: theme.colors.text }]}>
                    • Each box is a **node** containing a value.
                    {"\n"}• The arrow (➜) represents the **pointer** to the next node.
                    {"\n"}• The list starts at the **HEAD**.
                    {"\n"}• The final node points to **NULL**, meaning the list ends.
                    {"\n\n"}Soon you will see:
                    {"\n"}✔ Insert at front
                    ✔ Insert at end
                    ✔ Delete node
                    ✔ Traversal animations
                    ✔ Pointer shifts in real-time
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 26,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 30,
    },

    listWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    listRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        gap: 10,
    },

    frontLabel: {
        position: 'absolute',
        top: -20,
        left: 7,
        fontWeight: 'bold',
        color: 'skyblue',
    },

    nodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    /* ⬇️ Smaller Node Box */
    nodeBox: {
        borderWidth: 2,
        borderRadius: 8,
        paddingVertical: 6,   // reduced
        paddingHorizontal: 12, // reduced
        backgroundColor: '#1E1E1E',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3,
        minWidth: 55,
        justifyContent: 'center',
    },

    nodeValue: {
        fontSize: 14, // reduced
        fontWeight: '600',
    },

    arrow: {
        marginHorizontal: 6,
        color: '#94A3B8',
        fontSize: 18, // slightly smaller
    },

    nullBox: {
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: '#0f172a',
    },

    nullText: {
        fontSize: 14,
        fontWeight: '700',
    },

    explanationBox: {
        marginTop: 40,
        borderWidth: 2,
        borderRadius: 12,
        padding: 16,
        backgroundColor: '#111827',
    },

    explanationTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 8,
    },

    explanationText: {
        fontSize: 14,
        lineHeight: 20,
    },

    pointer: {
        marginLeft: 4,
        fontSize: 12,
        color: '#94A3B8',
    },

    tailLabel: {
        position: "absolute",
        right: 10,
        top: 35,
        fontWeight: "bold",
        color: "orange",
    },
    nodeWrapper: {
        position: "relative",
        marginHorizontal: 10,
    },
});

export default LinkedListVisual;
