import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../Themes/Themecontext'
import { Switch } from 'react-native-paper';

const Settings = () => {
    const { theme } = useTheme();
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
    const SettingItem = ({ title, onPress, hasSwitch, value, onValueChange }: { title: string; onPress?: () => void; hasSwitch?: boolean; value?: boolean; onValueChange?: (value: boolean) => void }) => (
        <TouchableOpacity
            style={[styles.settingItem, { borderBottomColor: theme.colors.border }]}
            onPress={onPress}
        >
            <Text style={[styles.settingText, { color: theme.colors.text }]}>{title}</Text>
            {hasSwitch && (
                <Switch
                    value={value}
                    onValueChange={onValueChange}
                    trackColor={{ false: '#767577', true: theme.colors.primary }}
                />
            )}
        </TouchableOpacity>
    )
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>
                Settings
            </Text>
            <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Notfifications
                    <SettingItem
                        title="Push Notifications"
                        hasSwitch={true}
                        value={notificationsEnabled}
                        onValueChange={setNotificationsEnabled}
                    />
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Account</Text>
                <SettingItem
                    title="Edit Profile"
                    onPress={() => {/* Handle navigation */ }}
                />
                <SettingItem
                    title="Change Password"
                    onPress={() => {/* Handle navigation */ }}
                />
                <SettingItem
                    title="Privacy Settings"
                    onPress={() => {/* Handle navigation */ }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
    },
    settingText: {
        fontSize: 16,
    },
});


export default Settings;
