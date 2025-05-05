import { StyleSheet, Text, View } from "react-native";
const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories:</Text>
      <View style={{ width: "100%", marginTop: 20 }}>
        <View style={styles.card}>
          <Text style={styles.category}>Movies</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.category}>Animals</Text>
        </View>
      </View>
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
  card: {
    backgroundColor: "tomato",
    boxShadow: "-4px 4px 2px rgba(0,0,0,0.1)",
    marginHorizontal: "auto",
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
    width: "90%",
  },
  category: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "semibold",
    textAlign: "center",
  },
});
