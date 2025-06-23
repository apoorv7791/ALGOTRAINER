import { Stack } from 'expo-router/stack';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const topics = [
  { id: 'arrays', name: 'Arrays', route: '/tabs/topics/arrays' },
  { id: 'linked-list', name: 'Linked List', route: '/tabs/topics/linked-list' },
  { id: 'stacks', name: 'Stacks', route: '/tabs/topics/stacks' },
  { id: 'queues', name: 'Queues', route: '/tabs/topics/queues' },
  { id: 'trees', name: 'Trees', route: '/tabs/topics/trees' },
  { id: 'graphs', name: 'Graphs', route: '/tabs/topics/graphs' },
  { id: 'hashing', name: 'Hashing', route: '/tabs/topics/hashing' },
].map(topic => ({
  ...topic,
  route: `/tabs/topics/${topic.id}`
}));

export default function TopicsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ headerTitle: "AlgoTrainer", headerShown: true }}
      />
      <FlatList
        data={topics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.topicItem}
            onPress={() => router.push(item.route as any)}
          >
            <Text style={styles.topicText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    padding: 16,
  },
  topicItem: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
  },
  topicText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
