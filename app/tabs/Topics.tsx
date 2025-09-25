// this screen will have a list of topics
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Topic = {
    id: string;
    name: string;
    screen: keyof Omit<TopicsStackParamList, 'TopicsDetail'>;
    description: string;
};

type TopicsStackParamList = {
    TopicsDetail: { topicName: string };
    // Topic detail screens
    Arrays: undefined;
    LinkedList: undefined;
    Stacks: undefined;
    Queue: undefined;
    Trees: undefined;
    Graphs: undefined;
    Hashing: undefined;
};

export default function Topics() {
    const navigation = useNavigation<NativeStackNavigationProp<TopicsStackParamList>>();
    const topics: Topic[] = [
        { id: '1', name: 'Arrays', screen: 'Arrays', description: 'Basic linear data structure' },
        { id: '2', name: 'Linked List', screen: 'LinkedList', description: 'Dynamic data structure with nodes' },
        { id: '3', name: 'Stacks', screen: 'Stacks', description: 'LIFO (Last In, First Out) structure' },
        { id: '4', name: 'Queues', screen: 'Queue', description: 'FIFO (First In, First Out) structure' },
        { id: '5', name: 'Trees', screen: 'Trees', description: 'Hierarchical data structure' },
        { id: '6', name: 'Graphs', screen: 'Graphs', description: 'Network of interconnected nodes' },
        { id: '7', name: 'Hashing', screen: 'Hashing', description: 'Efficient data retrieval' }
    ];
    return (
        <View>{
            topics.map((topic) => (
                <TouchableOpacity
                    key={topic.name}
                    onPress={() => {
                        navigation.navigate(topic.screen);
                    }}
                    style={styles.item}
                >
                    <Text style={{ fontWeight: 'bold' }}>{topic.name}</Text>
                    <Text>{topic.description}</Text>
                </TouchableOpacity>
            ))}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    list: {
        width: "80%",
    },
    item: {
        fontSize: 18,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
})