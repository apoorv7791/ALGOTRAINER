import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

type ConceptSection = {
  title: string;
  content?: string;
  items?: string[];
  code?: string;
};

type TopicTemplateProps = {
  title: string;
  sections: ConceptSection[];
};

const TopicTemplate: React.FC<TopicTemplateProps> = ({ title, sections }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      
      {sections.map((section, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          
          {section.content && (
            <Text style={styles.content}>{section.content}</Text>
          )}
          
          {section.items && (
            <View style={styles.list}>
              {section.items.map((item, i) => (
                <Text key={i} style={styles.listItem}>• {item}</Text>
              ))}
            </View>
          )}
          
          {section.code && (
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                {section.code}
              </Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2c3e50',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    color: '#34495e',
  },
  list: {
    marginLeft: 8,
    marginBottom: 12,
  },
  listItem: {
    fontSize: 15,
    lineHeight: 22,
    color: '#34495e',
    marginBottom: 4,
  },
  codeBlock: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  codeText: {
    fontFamily: 'Courier',
    color: '#2c3e50',
  },
});

export default TopicTemplate;
