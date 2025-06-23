import { View, Text, StyleSheet } from "react-native";

export default function TrackProgress() {
    return (
        <View style={styles.container}>
            <Text>Track Progress</Text>
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

