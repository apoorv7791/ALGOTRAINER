import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';
import CodeBlock from '@/app/CodeBlock/CodeBlock';

const HashMaps = () => {
    const { theme } = useTheme();
    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.header, { color: theme.colors.text }]}>HashMap</Text>

            {/* Basic HashMap Operations */}
            <View style={styles.section}>
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
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});

export default HashMaps;
