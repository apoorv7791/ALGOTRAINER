import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme, AppTheme } from './Theme';

type ThemeContextType = { // interface for activating theme
    [x: string]: any;
    theme: AppTheme;
    isDark: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const colorScheme = useColorScheme();

    const [isDark, setIsDark] = useState<boolean>(
        colorScheme ? colorScheme === 'dark' : false
    );

    const theme = React.useMemo(
        () => (isDark ? darkTheme : lightTheme),
        [isDark]
    );

    const toggleTheme = () => setIsDark(prev => !prev);

    return (
        <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        console.warn('useTheme used outside ThemeProvider');
        return {
            theme: lightTheme,
            isDark: false,
            toggleTheme: () => { },
        };
    }
    return context;
};

export default ThemeProvider;
