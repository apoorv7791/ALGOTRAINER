import { StyleSheet, View, Text } from 'react-native';

export default function Profile() {
    return (
        <View style={style.container}>
            <Text> Profile</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    }
});
