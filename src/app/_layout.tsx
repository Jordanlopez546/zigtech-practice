import {Slot } from "expo-router";
import { useStore } from "../../provider/store";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const { initializeAuth, isInitialized } = useStore();

  useEffect(() => {
    initializeAuth();
  }, []);

  // Show loading spinner while checking auth state
  if (!isInitialized) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#008080" />
      </View>
    );
  }
  
  return <Slot />;
}