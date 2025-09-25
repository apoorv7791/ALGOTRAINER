<<<<<<< HEAD
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
=======
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";
import { Stack } from "expo-router/stack";

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{
        headerStyle: { backgroundColor: '#ffffff' },
        headerTintColor: '#000000',
        headerTitleStyle: { fontWeight: "bold" },
      }}>
        <Stack.Screen
          name="index"
          options={{ headerTitle: "AlgoTrainer", headerShown: true }}
        />
      </Stack>
    </ThemeProvider>
>>>>>>> aa01ebc50e212faf1068147e360233dccffe0042
  );
}