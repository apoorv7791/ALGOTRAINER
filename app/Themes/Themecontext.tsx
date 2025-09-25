import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme, AppTheme } from './Theme';

type ThemeContextType = {
    theme: AppTheme;
    isDark: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const colorScheme = useColorScheme();
    const [isDark, setIsDark] = useState(colorScheme === 'dark');
    const [theme, setTheme] = useState<AppTheme>(isDark ? darkTheme : lightTheme);

    useEffect(() => {
        setTheme(isDark ? darkTheme : lightTheme);
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
        // Here you can save the user's preference to AsyncStorage
        // AsyncStorage.setItem('themePreference', !isDark ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};