import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';
import { useRouter } from 'expo-router';

const HashMaps = () => {
    const { theme } = useTheme();
    const router = useRouter();
    return (
        <ScrollView style={{ backgroundColor: theme.colors.background }}
            contentContainerStyle={styles.container} >
            <Text style={[styles.header, { color: theme.colors.text }]}>HashMaps</Text>

            {/* Basic HashMap Operations */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Definition of HashMaps</Text>
                <Text style={[styles.bulletPoint, { color: theme.colors.text }]}>
                    • A HashMap is a data structure that implements an associative array abstract data type, a structure that can map keys to values.{"\n"}
                    • It uses a hash function to compute an index (hash code) into an array of buckets or slots, from which the desired value can be found.{"\n"}
                    • HashMaps provide average-case constant time complexity O(1) for search, insert, and delete operations.{"\n"}
                </Text>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Basic HashMap Operations</Text>
                <CodeBlock
                    code={`// Creating a HashMap
HashMap<String, Integer> map = new HashMap<>();

// Adding key-value pairs
map.put("apple", 1);
map.put("banana", 2);
map.put("orange", 3);

// Accessing values
int value = map.get("apple");  // Returns 1
Integer defaultValue = map.getOrDefault("grape", 0);  // Returns 0

// Checking if key exists
boolean hasKey = map.containsKey("banana");    // true
boolean hasValue = map.containsValue(2);       // true

// Removing entries
map.remove("orange");          // Removes the entry
map.clear();                   // Removes all entries`}
                    language="java"
                />
            </View>

            {/* HashMap Methods */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Common HashMap Methods</Text>
                <CodeBlock
                    code={`HashMap<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob", 87);
scores.put("Charlie", 92);

// Iterating over entries
for (Map.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Iterating over keys
for (String name : scores.keySet()) {
    System.out.println(name);
}

// Iterating over values
for (Integer score : scores.values()) {
    System.out.println(score);
}

// Size and empty checks
int size = scores.size();
boolean isEmpty = scores.isEmpty();

// Updating values
scores.replace("Bob", 90);           // Updates existing value
scores.putIfAbsent("David", 88);     // Adds only if key doesn't exist`}
                    language="java"
                />
            </View>

            {/* HashMap Implementation Notes */}
            <View style={styles.section}>
                <Text style={[styles.subHeader, { color: theme.colors.text }]}>Implementation Notes</Text>
                <CodeBlock
                    code={`/* HashMap Internal Structure
 * - Uses array of LinkedLists (buckets)
 * - Hash function determines bucket index
 * - Load factor (default 0.75) triggers resize
 * - O(1) average case for put/get operations
 */

// Custom object as key example
class Student {
    String id;
    String name;
    
    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Student)) return false;
        Student other = (Student) obj;
        return Objects.equals(id, other.id);
    }
}`}
                    language="java"
                />
                {/* Explanation of the implementation */}

                <View style={styles.container}>
                    <Text style={[styles.subHeader, { color: theme.colors.text }]}>How it works</Text>
                    <Text style={[styles.bulletPoint, { color: theme.colors.text }]}>
                        • A HashMap uses a hash function to compute an index for storing key-value pairs in an internal array.{"\n"}
                        • Each index points to a bucket, which is typically implemented as a linked list or tree to handle collisions.{"\n"}
                        • When a key-value pair is added, the hash code of the key determines the bucket where it will be stored.{"\n"}
                        • If multiple keys hash to the same index, they are stored in the same bucket, and the structure (linked list/tree) manages these collisions.{"\n"}
                        • The load factor determines when the HashMap should resize its internal array to maintain efficient operations.{"\n"}
                    </Text>
                </View>
                {/* Example of how it works */}
                <TouchableOpacity
                    onPress={() => router.push('/DataVisualizer/HashMapVisual')}
                    style={styles.visualizeBtn}
                >
                    <Text style={styles.btnText}>Open Visualizer</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
    },
    section: {
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    subHeader: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
    bulletPoint: {
        fontSize: 16,
        marginBottom: 10,
    },
    visualizeBtn: {
        backgroundColor: '#34D399',
        margin: 16,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
});

export default HashMaps;
