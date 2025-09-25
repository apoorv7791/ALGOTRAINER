import { View, Text, StyleSheet } from "react-native";

export default function StartLearing() {
    return (
        <View style={styles.container}>
            <Text>Start Learning</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

