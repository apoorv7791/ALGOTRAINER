import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../Themes/Themecontext';

const About = () => {
    const insets = useSafeAreaInsets();
    const { theme } = useTheme();

    const openEmail = () => {
        Linking.openURL('mailto:Singhapoorv7791@gmail.com');
    };

    return (
        <ScrollView
            style={[styles.container, {
                backgroundColor: theme.colors.background,
                paddingTop: insets.top + 20,
                paddingHorizontal: 20
            }]}
            contentContainerStyle={styles.content}
        >
            <Text style={[styles.title, { color: theme.colors.text }]}>About AlgoTrainer</Text>

            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>Our Vision</Text>
                <Text style={[styles.text, { color: theme.colors.text }]}>
                    To create a platform where learning complex computer science concepts becomes intuitive, engaging, and accessible to everyone, regardless of their background.
                </Text>
            </View>

            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>The Reason</Text>
                <Text style={[styles.text, { color: theme.colors.text }]}>
                    I created this app to help people learn algorithms and data structures in a fun and interactive way.
                </Text>
            </View>

            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>Contact Me</Text>
                <Text style={[styles.text, { color: theme.colors.text, marginBottom: 15 }]}>
                    Have questions or feedback? I'd love to hear from you!
                </Text>
                <TouchableOpacity
                    style={styles.contactButton}
                    onPress={openEmail}
                >
                    <MaterialIcons name="email" size={20} color="white" />
                    <Text style={styles.contactButtonText}>Email Us</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    section: {
        marginBottom: 20,
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 15,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        opacity: 0.9,
    },
    contactButton: {
        flexDirection: 'row',
        backgroundColor: '#3498db',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
    contactButtonText: {
        color: 'white',
        marginLeft: 10,
        fontWeight: '600',
    },
});


export default About;
