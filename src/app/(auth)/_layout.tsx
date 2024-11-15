import { Redirect, Stack } from "expo-router"

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="(note)" />
      <Stack.Screen name="login" options={{ gestureEnabled: false, headerBackVisible: false }} />
    </Stack>
  )
}