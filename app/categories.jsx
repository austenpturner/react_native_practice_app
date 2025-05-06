import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import Card from "../components/Card";
import { categories } from "../constants/Categories";
const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories:</Text>
      <View style={{ width: "100%", marginTop: 20 }}>
        {categories.map((category) => {
          return (
            <Card key={category.id}>
              <Text style={styles.category}>{category.name}</Text>
            </Card>
          );
        })}
      </View>
      <Link href="/game">Game</Link>
    </View>
  );
};
export default Categories;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "start",
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
  },
  category: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "semibold",
    textAlign: "center",
  },
});
