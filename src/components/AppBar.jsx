import { View, StyleSheet, Pressable, Text } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
  },
  button: {
    backgroundColor:  "#24292e",
    padding: 10,
  }
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={{ color: "#fff" }}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
