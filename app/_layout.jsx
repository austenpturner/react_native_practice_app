import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
const CategoryLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#ddd" },
        headerTintColor: "#333",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="categories" options={{ title: "Categories" }} />
    </Stack>
  );
};
export default CategoryLayout;
const styles = StyleSheet.create({});
