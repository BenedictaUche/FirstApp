import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#24292e",
    gap: 5
  },

  button: {
    padding: 10,
  },

  scroll: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent:  "center",
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable style={styles.button}>
          <Link to="/">
            <Text style={{ color: "#fff" }}>Repositories</Text>
          </Link>
        </Pressable>
        <Pressable style={styles.button}>
          <Link to="/signIn">
            <Text style={{ color: "#fff" }}>Sign in</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
