import { View, Text, StyleSheet } from 'react-native';


function settings() {
    return (
        <View style={style.container}>
            <Text> settings</Text>
        </View>
    )
}



const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default settings;