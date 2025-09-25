import { Drawer } from 'expo-router/drawer';
import { useTheme } from '../Themes/Themecontext';
import { DrawerContentScrollView, useDrawerStatus } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { DrawerActions, useNavigation } from '@react-navigation/native';

function CustomDrawerContent(props: any) {
    const { theme } = useTheme();
    const router = useRouter();
    const navigation = useNavigation();
    const isDrawerOpen = useDrawerStatus() === 'open';

    const menuItems = [
        { label: 'Home', icon: 'home', route: '' },
        { label: 'Settings', icon: 'settings', route: 'Settings' },
    ];

    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={{ flex: 1, backgroundColor: theme.colors.background }}
        >
            <View style={[styles.drawerHeader, { borderBottomColor: theme.colors.border }]}>
                <Text style={[styles.drawerHeaderText, { color: theme.colors.primary }]}>
                    AlgoTrainer
                </Text>
            </View>

            <View style={styles.drawerSection}>
                {menuItems.map((item) => (
                    <View key={item.route} style={styles.drawerItem}>
                        <MaterialIcons
                            name={item.icon as any}
                            size={24}
                            color={theme.colors.text}
                            style={styles.icon}
                        />
                        <Text
                            style={[styles.drawerItemText, { color: theme.colors.text }]}
                            onPress={() => {
                                const route = item.route === '' ? '/(drawer)' : `/(drawer)/${item.route}` as const;
                                router.push(route as any);
                                props.navigation.closeDrawer();
                            }}
                        >
                            {item.label}
                        </Text>
                    </View>
                ))}
            </View>
        </DrawerContentScrollView>
    );
}

export default function DrawerLayout() {
    const { theme } = useTheme();
    const navigation = useNavigation();
    const isDrawerOpen = useDrawerStatus() === 'open';

    return (
        <Drawer
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: theme.colors.background,
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTintColor: theme.colors.text,
                headerLeft: () => (
                    <MaterialIcons
                        name={isDrawerOpen ? 'close' : 'menu'}
                        size={24}
                        color={theme.colors.text}
                        style={{ marginLeft: 15 }}
                        onPress={() => {
                            if (isDrawerOpen) {
                                navigation.dispatch(DrawerActions.closeDrawer());
                            } else {
                                navigation.dispatch(DrawerActions.openDrawer());
                            }
                        }}
                    />
                ),
                drawerStyle: {
                    backgroundColor: theme.colors.background,
                    width: '70%',
                },
                drawerActiveTintColor: theme.colors.primary,
                drawerInactiveTintColor: theme.colors.text,
            }}
        >
            <Drawer.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerTitle: 'AlgoTrainer',
                }}
            />
            <Drawer.Screen
                name="Settings"
                options={{
                    title: 'Settings',
                }}
            />
        </Drawer>
    );
}

const styles = StyleSheet.create({
    drawerHeader: {
        padding: 20,
        borderBottomWidth: 1,
    },
    drawerHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    drawerSection: {
        marginTop: 15,
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    icon: {
        marginRight: 15,
    },
    drawerItemText: {
        fontSize: 16,
    },
});