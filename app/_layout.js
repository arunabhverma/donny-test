import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router/stack";
import { Platform } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardProvider>
        <SafeAreaProvider>
          <Stack
            screenOptions={{
              animation:
                Platform.OS === "android" ? "fade_from_bottom" : "default",
            }}
          />
        </SafeAreaProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}
