import { ThemeProvider } from './Themes/Themecontext';
import { PaperProvider } from 'react-native-paper';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <PaperProvider>
          <Stack>
            <Stack.Screen
              name="(drawer)"
              options={{
                headerShown: false,
                animation: 'slide_from_right',
              }}
            />
          </Stack>
        </PaperProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}