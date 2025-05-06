import { StyleSheet, View } from "react-native";

const Card = ({ ...props }) => {
  return <View style={styles.card} {...props} />;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "tomato",
    boxShadow: "-4px 4px 2px rgba(0,0,0,0.1)",
    marginHorizontal: "auto",
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
    width: "90%",
  },
});
