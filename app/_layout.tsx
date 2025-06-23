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
  );
}