import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../Themes/ThemeContext';
import * as ScreenOrientation from 'expo-screen-orientation';

const About = () => {
    const insets = useSafeAreaInsets();
    const { theme } = useTheme();
    const scrollViewRef = React.useRef<ScrollView>(null);
    const [isLandscape, setIsLandscape] = React.useState(false);

    React.useEffect(() => {
        // Allow both orientations
        ScreenOrientation.unlockAsync();

        // Listen for orientation changes
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });

        return () => subscription?.remove();
    }, []);

    const openEmail = () => {
        Linking.openURL('mailto:Singhapoorv7791@gmail.com');
    };

    // Sample features data
    const features = [
        'Interactive algorithm visualizations',
        'Step-by-step problem solving',
        'Real-time code execution',
        'Progress tracking',
        'Multiple programming languages support',
        'Offline access to content'
    ];

    // Sample team members data
    const teamMembers = [
        { name: 'Apoorv Singh', role: 'Founder & Developer' },
        { name: 'Open Source Contributors', role: 'Community' }
    ];

    return (
        <ScrollView
            ref={scrollViewRef}
            style={[styles.container, {
                backgroundColor: theme.colors.background,
            }]}
            contentContainerStyle={[
                styles.content,
                {
                    paddingTop: insets.top + 20,
                    paddingBottom: insets.bottom + 20,
                    paddingHorizontal: 20
                }
            ]}
            showsVerticalScrollIndicator={true}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="interactive"
        >
            <Text style={[styles.title, { color: theme.colors.text, fontSize: isLandscape ? 22 : 26 }]}>About AlgoTrainer</Text>

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
                <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>Key Features</Text>
                <View style={styles.featuresList}>
                    {features.map((feature, index) => (
                        <View key={index} style={styles.featureItem}>
                            <View style={[styles.featureIcon, { backgroundColor: theme.colors.primary + '20' }]}>
                                <MaterialIcons name="check-circle" size={16} color={theme.colors.primary} />
                            </View>
                            <Text style={[styles.text, { color: theme.colors.text }]}>{feature}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>Our Team</Text>
                <View style={styles.teamContainer}>
                    {teamMembers.map((member, index) => (
                        <View key={index} style={styles.teamMember}>
                            <View style={[styles.avatar, { backgroundColor: theme.colors.primary + '20' }]}>
                                <Text style={[styles.avatarText, { color: theme.colors.primary }]}>
                                    {member.name.charAt(0)}
                                </Text>
                            </View>
                            <View>
                                <Text style={[styles.memberName, { color: theme.colors.text }]}>{member.name}</Text>
                                <Text style={[styles.memberRole, { color: theme.colors.text, opacity: 0.7 }]}>{member.role}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>

            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>Get In Touch</Text>
                <Text style={[styles.text, { color: theme.colors.text, marginBottom: 15 }]}>
                    Have questions, feedback, or suggestions? i'd love to hear from you!
                </Text>
                <TouchableOpacity
                    style={[styles.contactButton, { backgroundColor: theme.colors.primary }]}
                    onPress={openEmail}
                    activeOpacity={0.8}
                >
                    <MaterialIcons name="email" size={20} color="white" style={styles.buttonIcon} />
                    <Text style={styles.contactButtonText}>Email Me</Text>
                </TouchableOpacity>
            </View>

            <Text style={[styles.footerText, { color: theme.colors.text, opacity: 0.6 }]}>
                © {new Date().getFullYear()} AlgoTrainer. All rights reserved.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingBottom: 40,
        flexGrow: 1,
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
    Dimensions: {
        marginBottom: 15,
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
        marginTop: 10,
    },
    contactButtonText: {
        color: 'white',
        marginLeft: 8,
        fontWeight: '600',
        fontSize: 16,
    },
    buttonIcon: {
        marginRight: 8,
    },
    featuresList: {
        marginTop: 10,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    featureIcon: {
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    teamContainer: {
        marginTop: 10,
    },
    teamMember: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    avatarText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    memberName: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 2,
    },
    memberRole: {
        fontSize: 14,
    },
    footerText: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 14,
    },
});

export default About;
