// app/(Drawer)/_layout.tsx
import { Drawer } from 'expo-router/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '../Themes/ThemeContext';
import React from 'react';

export default function DrawerLayout() {
    const { theme, isDark, toggleTheme } = useTheme();

    return (
        <Drawer
            screenOptions={({ navigation }) => ({
                headerTitle: 'AlgoTrainer',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: theme.colors.primary || '#6200ee',
                },

                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={{ marginLeft: 22 }}
                    >
                        <MaterialIcons name="menu" size={24} color="white" />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity
                        onPress={toggleTheme}
                        style={{ marginRight: 22 }}
                    >
                        <MaterialIcons
                            name={isDark ? 'wb-sunny' : 'nights-stay'}
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                ),
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
                headerTitleContainerStyle: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: -10,
                },


                drawerActiveTintColor: theme.colors.primary,
                drawerInactiveTintColor: theme.colors.text,
                drawerActiveBackgroundColor: theme.colors.primary + '20',
                drawerInactiveBackgroundColor: 'transparent',
                drawerStyle: {
                    backgroundColor: theme.colors.background,
                },
                drawerLabelStyle: {
                    marginLeft: 10,
                    color: theme.colors.text,
                },
                drawerItemStyle: {
                    marginHorizontal: 0,
                    paddingHorizontal: 16,
                },
            })}
        >
            <Drawer.Screen
                name="index" // This will render app/(Drawer)/index.tsx
                options={{
                    title: 'Home',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Learning-modules" // app/(Drawer)/learning-modules.tsx
                options={{
                    title: 'Learning Modules',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="menu-book" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Settings" // app/(Drawer)/settings.tsx
                options={{
                    title: 'Settings',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="settings" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="About" // app/(Drawer)/about.tsx
                options={{
                    title: 'About',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="info" size={size} color={color} />
                    ),
                }}
            />
        </Drawer>
    );
}