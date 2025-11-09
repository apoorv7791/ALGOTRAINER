import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useTheme } from '../Themes/Themecontext';
import CodeBlock from '../CodeBlock/CodeBlock';

const BinarySearch = () => {
  const { theme } = useTheme();
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.heading, { color: theme.colors.text }]}>
        Binary Search Technique.
      </Text>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.description, { color: theme.colors.text }]}>
          * Binary Search is an Algorithm that is used to find an element in a sorted array.{'\n'}
          * It works by repeatedly dividing the search interval in half.{'\n'}
          * It is a divide and conquer algorithm.
        </Text>
        <Text style={[styles.heading, { color: theme.colors.text }]}>
          How It Works
        </Text>
        <Text style={[styles.description, { color: theme.colors.text }]}>
          * Initialzie two pointers.{'\n'}
          * L at the left R at the right of the array.{'\n'}
          * compute the middle element of the array which wil be found using L + (R - L) / 2.{'\n'}
          * If the middle element matches the target then we have found the target.{'\n'}
          * If the middle element is less than the target then move the left pointer to the middle + 1.{'\n'}
          * If the middle element is greater than the target then move the right pointer to the middle - 1.
          * If the target element is not found at either side of the array then return -1
        </Text>
        <Text style={[styles.heading, { color: theme.colors.text }]}>
          Code Example of the technique
        </Text>

        <CodeBlock
          code={`function BinarySearch(arr, target):
    left = 0
    right = length(arr) - 1
  while left <= right:
   mid = left + (right - left) / 2   
        // prevents integer overflow

  if arr[mid] == target:
            return mid                   
             // target found

              // search in right half
        else if arr[mid] < target:
            left = mid + 1               
        else:
            right = mid - 1 // search in left half

    return -1 
     // target not found
`}
        />

        <CodeBlock
          code={`import java.util.*;
class another{
  public static int BinarySearch(int[] nums, int target){
    Arrays.sort(nums);
    int left = 0;
    int right = nums.length - 1;
    while(left < right){
      int mid = left + (right - left) / 2;
      if (nums[mid] == target){
        return mid;
      } else if (nums[mid] < target){
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
  public static void main (String[] args) {
    int[] nums = {11, 2, 8, 10, 16, 5};
    int target = 8;
    System.out.println(BinarySearch(nums, target));
  }
}
`}
        />
        <Text style={[styles.description, { color: theme.colors.text }]}>
          🔹 Binary Search works only on sorted arrays.
          {'\n'}🔹 It repeatedly divides the array into halves.
          {'\n'}🔹 Time Complexity: O(log n) meaning that time is in logarithmic
          {'\n'}🔹 Space Complexity: O(1)
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  }
})

export default BinarySearch;
