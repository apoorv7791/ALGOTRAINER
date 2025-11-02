import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/app/Themes/Themecontext';

interface CodeBlockProps {
    code: string;
    language?: string;
    fontSize?: number;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.card }]}>
            {language && (
                <Text style={[styles.language, { color: theme.colors.text }]}>
                    {language}
                </Text>
            )}
            <Text style={[styles.code, { color: theme.colors.text }]}>
                {code}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 8,
        marginVertical: 8,
    },
    language: {
        fontSize: 12,
        marginBottom: 8,
        opacity: 0.7,
    },
    code: {
        fontFamily: 'monospace',
        fontSize: 14,
        lineHeight: 20,
    }
});


export default CodeBlock;