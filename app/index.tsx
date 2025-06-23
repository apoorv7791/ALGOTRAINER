import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, SafeAreaView, Image, Animated, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Switch } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AccountBar from "./components/AccountBar";
import TopicsLayout from "./Topics/TopicsLayout";
import Arrays from "./Topics/Arrays";
import LinkedList from "./Topics/LinkedList";
import Stacks from "./Topics/Stacks";
import Queue from "./Topics/Queue";
import Trees from "./Topics/Trees";
import Graphs from "./Topics/Graphs";
import Hashing from "./Topics/Hashing";
function About() {
    const { theme } = useTheme();
    const sections = [
        {
            type: 'logo',
            logo: '🧠 AlgoTrainer',
            tagline: 'Your guide to mastering Data Structures & Algorithms'
        },
        {
            type: 'card',
            title: 'About the App',
            content: 'AlgoTrainer is an app designed to teach Data Structures and Algorithms in an interactive and engaging way.'
        },
        {
            type: 'card',
            title: 'Our Mission',
            content: 'We believe that understanding Data Structures and Algorithms is crucial for becoming a proficient programmer. Our app breaks down complex concepts into digestible, interactive lessons.'
        },
        {
            type: 'card',
            title: 'Learning Approach',
            bulletPoints: [
                'Interactive Tutorials',
                'Real-world Problem Solving',
                'Hands-on Coding Challenges',
                'Progress Tracking'
            ]
        },
        {
            type: 'card',
            title: 'Why Choose AlgoTrainer?',
            textPoints: [
                'Comprehensive coverage of essential algorithms',
                'Suitable for beginners and intermediate learners',
                'Continuously updated content',
                'Intuitive and user-friendly interface'
            ]
        }
    ];

    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing
            (fadeAnim,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }).start();
    }, [fadeAnim]);

    const renderItem = ({ item }: { item: any }) => {
        switch (item.type) {
            case 'logo':
                return (
                    <View style={styles.logoContainer}>
                        <Text style={styles.logo}>{item.logo}</Text>
                        <Text style={styles.tagline}>{item.tagline}</Text>
                    </View>
                );
            case 'card':
                return (
                    <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
                        <Text style={[styles.cardTitle, { color: theme.colors.text }]}>{item.title}</Text>
                        {item.content && <Text style={[styles.text, { color: theme.colors.text }]}>{item.content}</Text>}
                        {item.bulletPoints && item.bulletPoints.map((point: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                            <Text key={index} style={[styles.bulletPoint, { color: theme.colors.text }]}>• {point}</Text>
                        ))}
                        {item.textPoints && item.textPoints.map((point: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                            <Text key={index} style={[styles.text, { color: theme.colors.text }]}>- {point}</Text>
                        ))}
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim, backgroundColor: theme.colors.background }]}>
            <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
                <FlatList
                    data={sections}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    style={[styles.scrollContainer, { backgroundColor: theme.colors.background }]}
                    contentContainerStyle={styles.scrollContentContainer}
                    showsVerticalScrollIndicator={true}
                />
            </SafeAreaView>
        </Animated.View>
    );
}
function HomeScreen() {
    const { theme } = useTheme();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim, backgroundColor: theme.colors.background }]}>
            <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
                <ScrollView style={[styles.scrollContainer, { backgroundColor: theme.colors.background }]}>
                    {/* Header Section */}
                    <View style={styles.headerRow}>
                        <Text style={styles.headerTitle}>
                            <Text role="img" aria-label="brain">🧠</Text> AlgoTrainer
                        </Text>
                        <AccountBar />
                    </View>

                    {/* Welcome Card */}
                    <View style={[styles.welcomeCard, { backgroundColor: theme.colors.card }]}>
                        <Text style={[styles.welcomeTitle, { color: theme.colors.text }]}>Welcome, Learner!</Text>
                        <Text style={[styles.welcomeText, { color: theme.colors.text }]}>
                            Embark on a journey to become a proficient programmer by mastering the fundamentals of Data Structures and Algorithms.
                        </Text>
                    </View>

                    {/* Quick Actions Title Only */}
                    <Text style={[styles.sectionTitle, { color: theme.colors.text, marginTop: 10 }]}>Quick Actions</Text>
                    <View style={styles.quickActionsGrid}>
                        <TouchableOpacity style={[styles.quickActionButton, { backgroundColor: '#4CAF50' }]}>
                            <Ionicons name="school-outline" size={30} color="white" />
                            <Text style={styles.quickActionText}>Start Learning</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.quickActionButton, { backgroundColor: '#2196F3' }]}>
                            <Ionicons name="stats-chart-outline" size={30} color="white" />
                            <Text style={styles.quickActionText}>Track Progress</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.quickActionButton, { backgroundColor: '#FF9800' }]}>
                            <Ionicons name="rocket-outline" size={30} color="white" />
                            <Text style={styles.quickActionText}>Daily Challenge</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.dailyTipCard, { backgroundColor: theme.colors.card }]}>
                        <Text style={[styles.dailyTipTitle, { color: theme.colors.text }]}>💡 Daily Learning Tip</Text>
                        <Text style={[styles.dailyTipText, { color: theme.colors.text }]}>
                            • Practice consistently - solve at least one coding problem daily{'\n'}
                            • Master the basics before tackling complex problems{'\n'}
                            • Build a strong foundation through regular coding exercises{'\n'}
                            • Progress gradually from simple to advanced concepts
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Animated.View>
    );
}

function Topics({ navigation }: { navigation: any }) {
    const { theme } = useTheme();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);
    const topics = [
        { id: '1', name: 'Arrays', description: 'Basic linear data structure' },
        { id: '2', name: 'Linked List', description: 'Dynamic data structure with nodes' },
        { id: '3', name: 'Stacks', description: 'LIFO (Last In, First Out) structure' },
        { id: '4', name: 'Queue', description: 'FIFO (First In, First Out) structure' },
        { id: '5', name: 'Trees', description: 'Hierarchical data structure' },
        { id: '6', name: 'Graphs', description: 'Network of interconnected nodes' },
        { id: '7', name: 'Hashing', description: 'Efficient data retrieval' }
    ];

    const [selectedTopic, setselectedTopic] = React.useState<string | null>(null);

    const ListHeader = () => (
        <Text style={[styles.headerText, { color: theme.colors.text }]}>Topics</Text>
    );

    const ListFooter = () => (
        <View style={styles.heroSection}>
            <Text style={[styles.heroTitle, { color: theme.colors.text }]}>Master Algorithms with Ease</Text>
            <Text style={[styles.heroSubtitle, { color: theme.colors.text }]}>Explore our comprehensive topics and enhance your coding skills.</Text>
        </View>
    );

    return (
        <Animated.View style={[styles.mainContainer, { opacity: fadeAnim, backgroundColor: theme.colors.background }]}>
            <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
                <FlatList
                    data={topics}
                    ListHeaderComponent={ListHeader}
                    ListFooterComponent={ListFooter}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[styles.item, { backgroundColor: selectedTopic === item.id ? theme.colors.primary : theme.colors.card }]}
                            onPress={() => navigation.navigate(item.name)}
                            onPressIn={() => setselectedTopic(item.id)}
                            onPressOut={() => setselectedTopic(null)}
                        >
                            <Text style={[styles.itemText, { color: theme.colors.text }]}>{item.name}</Text>
                            <Text style={[styles.itemDescription, { color: theme.colors.text }]}>{item.description}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={[styles.listContent, { backgroundColor: theme.colors.background }]}
                />
            </SafeAreaView>
        </Animated.View>
    );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
    const { theme, isDark, toggleTheme } = useTheme();

    useEffect(() => {
        StatusBar.setBarStyle(isDark ? 'light-content' : 'dark-content');
        StatusBar.setBackgroundColor(theme.colors.background); // For Android
    }, [isDark, theme.colors.background]);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
                <View style={appStyles.themeToggleContainer}>
                    <Text style={{ color: theme.colors.text }}>
                        {isDark ? 'Light Mode' : 'Dark Mode'}
                    </Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDark ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleTheme}
                        value={isDark}
                    />
                </View>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            let iconName: string = 'help-outline';
                            if (route.name === 'Home') iconName = 'home-outline';
                            else if (route.name === 'About') iconName = 'information-circle-outline';
                            else if (route.name === 'Topics') iconName = 'list-outline';
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: theme.colors.primary,
                        tabBarInactiveTintColor: theme.colors.text,
                        tabBarStyle: {
                            backgroundColor: theme.colors.background,
                            borderTopColor: theme.colors.border,
                        },
                        headerShown: false,
                    })}
                >
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="About" component={About} />
                    <Tab.Screen name="Topics" component={TopicsStack} />
                </Tab.Navigator>
            </View>
        </GestureHandlerRootView>
    );
}

function TopicsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TopicsList" component={Topics} />
            <Stack.Screen name="TopicsLayout" component={TopicsLayout} />
            <Stack.Screen name="Arrays" component={Arrays} />
            <Stack.Screen name="Linked List" component={LinkedList} />
            <Stack.Screen name="Stacks" component={Stacks} />
            <Stack.Screen name="Queue" component={Queue} />
            <Stack.Screen name="Trees" component={Trees} />
            <Stack.Screen name="Graphs" component={Graphs} />
            <Stack.Screen name="Hashing" component={Hashing} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <MainTabs />
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    scrollContentContainer: {
        paddingBottom: 20,
        paddingHorizontal: 15,
    },
    card: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    logoContainer: {
        width: '100%',
        backgroundColor: '#007bff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    tooltip: {
        fontSize: 12,
        color: 'white',
        opacity: 0.8,
    },
    tagline: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
    },
    bulletPoint: {
        fontSize: 16,
        color: "#333",
        marginBottom: 10,
        lineHeight: 24,
        paddingLeft: 10,
    },
    heroSection: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    heroTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    heroSubtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    welcomeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    welcomeText: {
        fontSize: 16,
        color: '#666',
    },
    quickActionsContainer: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    quickActionText: {
        color: 'white',
        marginTop: 8,
        textAlign: 'center',
        fontSize: 12,
    },
    dailyTipTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    dailyTipText: {
        fontSize: 16,
        color: '#666',
    },
    headerText: {
        fontSize: 24,
        color: "#007bff",
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: 'center',
    },
    item: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    itemDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    headerContainer: {
        marginVertical: 20,
    },
    welcomeCard: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
        marginBottom: 20,
    },
    quickActionsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    quickActionButton: {
        flex: 1,
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        marginHorizontal: 5,
        marginBottom: 10,
    },
    dailyTipCard: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
        marginTop: 20,
    },
    container: {
        marginBottom: 20,
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 15,
    },
    logoImage: {
        height: 150,
        width: 350,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    safeArea: {
        flex: 1,
    },
    listContent: {
        padding: 15,
        paddingBottom: 30,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: 'white',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
    },
});

const appStyles = StyleSheet.create({
    themeToggleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
    },
    themeButton: {
        top: 10,
        right: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        zIndex: 1,
    },
});