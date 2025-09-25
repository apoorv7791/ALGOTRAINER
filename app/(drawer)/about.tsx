import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AboutScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top + 20 }]}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>About AlgoTrainer</Text>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Our Vision</Text>
                    <Text style={styles.text}>
                        To create a platform where learning complex computer science concepts becomes intuitive, engaging, and accessible to everyone, regardless of their background.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>The Team</Text>
                    <Text style={styles.text}>
                        AlgoTrainer is built by a team of passionate developers and educators who believe in the power of visual learning and hands-on practice.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Contact Us</Text>
                    <Text style={styles.text}>
                        Have questions or feedback? We'd love to hear from you!
                        {'\n\n'}Email: contact - Singhapoorv7791@gmail.com
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    content: {
        paddingBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#1a1a1a',
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#2c3e50',
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: '#34495e',
    },
});

export default AboutScreen;
