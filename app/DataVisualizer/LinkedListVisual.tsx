import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useTheme } from '../Themes/Themecontext';

const LinkedListVisual = () => {
    const { theme } = useTheme();

    const list = [20, 30, 40, 50];


    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background, paddingTop: 40 }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>
                Linked List Visualization
            </Text>
            <View>
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 30 }}
                    style={{ maxHeight: 180, marginVertical: 20 }} >
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <View style={[styles.listWrapper,]}>
                            {/* Head */}
                            <View style={[styles.nodeWrapper, styles.firstLastOffset]}>
                                <View style={styles.nodeContainer}>
                                    <View style={[
                                        styles.nodeBox,
                                        { borderColor: theme.colors.primary }
                                    ]}>
                                        <Text style={[styles.nodeValue, { color: theme.colors.text }]}>
                                            10
                                        </Text>
                                    </View>
                                    <Text style={styles.arrow}> ➜ </Text>
                                </View>

                                <Text style={[styles.bottomLabel, { color: theme.colors.primary, marginLeft: -24 }]}>
                                    HEAD ↓
                                </Text>

                            </View>
                            {/* Middle nodes */}
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
                            { /* Tail */}
                            <View style={[styles.nodeWrapper, styles.firstLastOffset]}>
                                <View style={styles.nodeContainer}>
                                    <View style={[styles.nodeBox, { borderColor: theme.colors.primary }]}>
                                        <Text style={[styles.nodeValue, { color: theme.colors.text }]}>NULL</Text>
                                    </View>
                                </View>
                                <Text style={styles.bottomLabel}>↑ TAIL</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
        </View>
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
        top: -20,
        left: 10,
        fontWeight: 'bold',
        color: 'skyblue',
    },

    nodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    /* ⬇️ Smaller Node Box */
    nodeBox: {
        borderWidth: 5,
        borderRadius: 10,
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
    headLabel: {
        marginTop: 6,
        fontSize: 18,
        fontWeight: '900',
        color: 'red',
    },
    tailLabel: {
        marginTop: 6,
        right: 10,
        top: 35,
        fontWeight: "bold",
        color: "orange",
    },
    nodeWrapper: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    chainScrollView: {
        maxHeight: 200,       // height of the scrollable chain area
        marginVertical: 20,
    },
    chainContent: {
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    bottomLabel: {
        marginTop: 6,
        fontWeight: 'bold',
        color: 'orange',
        textAlign: 'center',
    },
    firstLastOffset: {
        marginTop: 20,   // adjust until aligned perfectly

    }

});

export default LinkedListVisual;
