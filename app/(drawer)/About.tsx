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
        ScreenOrientation.unlockAsync();

        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setIsLandscape(window.width > window.height);
        });

        return () => subscription?.remove();
    }, []);

    const openEmail = () => Linking.openURL('mailto:Singhapoorv7791@gmail.com');

    const features = [
        'Interactive algorithm visualizations',
        'Step-by-step problem solving',
        'Real-time code execution',
        'Progress tracking',
        'Multiple programming languages support',
        'Offline access to content'
    ];

    const teamMembers = [
        { name: 'Apoorv Singh', role: 'Founder & Developer' },
        { name: 'Open Source Contributors', role: 'Community' }
    ];

    return (
        <ScrollView
            ref={scrollViewRef}
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={[
                styles.content,
                { paddingTop: insets.top + 20, paddingBottom: insets.bottom + 20 }
            ]}
            showsVerticalScrollIndicator={true}
        >
            <Text style={[styles.title, { color: theme.colors.text, fontSize: isLandscape ? 22 : 26 }]}>
                About AlgoTrainer
            </Text>

            {/* Sections */}
            {[
                {
                    title: 'Our Vision',
                    content: 'To create a platform where learning complex computer science concepts becomes intuitive, engaging, and accessible to everyone, regardless of their background.'
                },
                {
                    title: 'The Reason',
                    content: 'I created this app to help people learn algorithms and data structures in a fun and interactive way.'
                }
            ].map((section, idx) => (
                <View key={idx} style={[styles.section, { backgroundColor: theme.colors.card }]}>
                    <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>{section.title}</Text>
                    <Text style={[styles.text, { color: theme.colors.text }]}>{section.content}</Text>
                </View>
            ))}

            {/* Features */}
            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>Key Features</Text>
                {features.map((feature, idx) => (
                    <View key={idx} style={styles.featureItem}>
                        <View style={[styles.featureIcon, { backgroundColor: theme.colors.primary + '20' }]}>
                            <MaterialIcons name="check-circle" size={16} color={theme.colors.primary} />
                        </View>
                        <Text style={[styles.text, { color: theme.colors.text }]}>{feature}</Text>
                    </View>
                ))}
            </View>

            {/* Team */}
            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>Our Team</Text>
                {teamMembers.map((member, idx) => (
                    <View key={idx} style={styles.teamMember}>
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

            {/* Contact */}
            <View style={[styles.section, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>Get In Touch</Text>
                <Text style={[styles.text, { color: theme.colors.text, marginBottom: 10 }]}>
                    Have questions, feedback, or suggestions? I'd love to hear from you!
                </Text>
                <TouchableOpacity
                    style={[styles.contactButton, { backgroundColor: theme.colors.primary }]}
                    onPress={openEmail}
                    activeOpacity={0.8}
                >
                    <MaterialIcons name="email" size={20} color="white" />
                    <Text style={styles.contactButtonText}>Email Me</Text>
                </TouchableOpacity>
            </View>

            <Text style={[styles.footerText, { color: theme.colors.text, opacity: 0.6 }]}>
                © {new Date().getFullYear()} AlgoTrainer. All rights reserved.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { paddingBottom: 40, flexGrow: 1, paddingHorizontal: 20 },
    title: { fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    section: {
        marginBottom: 15,
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
    text: { fontSize: 14, lineHeight: 20, opacity: 0.9 },
    featureItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    featureIcon: { width: 22, height: 22, borderRadius: 11, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
    teamMember: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
    avatar: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
    avatarText: { fontSize: 18, fontWeight: 'bold' },
    memberName: { fontSize: 14, fontWeight: '600' },
    memberRole: { fontSize: 12 },
    contactButton: { flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 8, alignItems: 'center', marginTop: 5 },
    contactButtonText: { color: 'white', fontWeight: '600', marginLeft: 8 },
    footerText: { textAlign: 'center', fontSize: 12, marginTop: 20 },
});

export default About;
