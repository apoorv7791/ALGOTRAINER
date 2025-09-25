import { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function AccountBar() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.iconButton}
            >
                <Ionicons name="person-circle-outline" size={32} color="#333" />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => {
                            setModalVisible(true);
                            // Navigate to profile
                        }}
                    >
                        <Text style={styles.menuText}>Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => {
                            setModalVisible(true);
                            // Navigate to settings
                        }}
                    >
                        <Text style={styles.menuText}>Settings</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => {
                            setModalVisible(false);
                            // Handle logout
                        }}
                    >
                        <Text style={styles.menuText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // top: 60,
        // right: 20,
        height: 56,
        justifyContent: 'center',
        zIndex: 100
    },
    iconButton: {
        padding: 8
    },
    modalView: {
        marginTop: 80,
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    menuItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    menuText: {
        fontSize: 16,
        color: '#333'
    }
});