import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: "tomato" }]}>Word Flip</Text>
      <Text
        style={{
          fontSize: 18,
          marginTop: 20,
          marginBottom: 30,
          width: "90%",
          textAlign: "center",
        }}
      >
        Hold your phone to your forehead and guess as many words as you can!
      </Text>
      <View style={styles.button}>
        <Link
          href="/categories"
          style={{
            color: "#fff",
            fontSize: 18,
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          Let's Play
        </Link>
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -100,
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
  },
  button: {
    backgroundColor: "tomato",
    padding: 20,
    borderRadius: 5,
    boxShadow: "-4px 4px 2px rgba(0,0,0,0.1)",
  },
});
