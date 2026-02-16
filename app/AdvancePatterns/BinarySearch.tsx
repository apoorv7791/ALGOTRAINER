import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import { useTheme } from '../Themes/ThemeContext';
import CodeBlock from '../CodeBlock/CodeBlock';

const BinarySearch = () => {
  const { theme } = useTheme();

  const content = [
    {
      type: 'heading',
      text: 'Binary Search Technique',
    },
    {
      type: 'paragraph',
      text: `Binary Search is an algorithm used to find an element in a sorted array.
- It works by repeatedly dividing the search interval in half.
- It is a divide and conquer algorithm.`,
    },
    {
      type: 'subheading',
      text: 'How It Works',
    },
    {
      type: 'paragraph',
      text: `- Initialize two pointers: L at left, R at right of array.
- Compute middle element: mid = L + (R - L) / 2.
- If arr[mid] == target → target found.
- If arr[mid] < target → move left pointer to mid + 1.
- If arr[mid] > target → move right pointer to mid - 1.
- If target not found → return -1.`,
    },
    {
      type: 'subheading',
      text: 'Code Example (JavaScript)',
    },
    {
      type: 'code',
      code: `function BinarySearch(arr, target):
    left = 0
    right = length(arr) - 1
    while left <= right:
        mid = left + (right - left) / 2  // prevents integer overflow
        if arr[mid] == target:
            return mid  // target found
        else if arr[mid] < target:
            left = mid + 1  // search right half
        else:
            right = mid - 1 // search left half
    return -1 // target not found`,
    },
    {
      type: 'subheading',
      text: 'Code Example (Java)',
    },
    {
      type: 'code',
      code: `import java.util.*;
class Another {
    public static int BinarySearch(int[] nums, int target){
        int left = 0, right = nums.length - 1;
        while(left <= right){
            int mid = left + (right - left) / 2;
            if(nums[mid] == target) return mid;
            else if(nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args){
        int[] nums = {11, 2, 8, 10, 16, 5};
        int target = 8;
        System.out.println(BinarySearch(nums, target));
    }
}`,
    },
    {
      type: 'paragraph',
      text: `🔹 Works only on sorted arrays.
🔹 Repeatedly divides array into halves.
🔹 Time Complexity: O(log n)
🔹 Space Complexity: O(1)`,
    },
  ];

  const renderItem = ({ item }: { item: any }) => {
    switch (item.type) {
      case 'heading':
        return <Text style={[styles.heading, { color: theme.colors.text }]}>{item.text}</Text>;
      case 'subheading':
        return <Text style={[styles.subheading, { color: theme.colors.text }]}>{item.text}</Text>;
      case 'paragraph':
        return <Text style={[styles.paragraph, { color: theme.colors.text }]}>{item.text}</Text>;
      case 'code':
        return (
          <ScrollView horizontal style={{ marginVertical: 8 }}>
            <Text
              style={{
                fontFamily: 'monospace',
                fontSize: 14,
                lineHeight: 20,
                color: theme.colors.text,
                backgroundColor: theme.colors.surface || '#f5f5f5',
                padding: 12,
                borderRadius: 8,
              }}
            >
              {item.code}
            </Text>
          </ScrollView>
        );
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <FlatList
        data={content}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subheading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
});

export default BinarySearch;
