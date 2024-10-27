import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import RepositoryList from "./RepositoryList";
import Text from "./Text";
import AppBar from "./AppBar";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />}  />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <Text fontWeight="bold" fontSize="subheading">Rate Repository go lite Application</Text> */}
    </View>
  );
};

export default Main;

// const styles = StyleSheet.create({
//   text: {
//     color: 'grey',
//     fontSize: 14,
//   },
//   blueText: {
//     color: 'blue',
//   },
//   bigText: {
//     fontSize: 24,
//     fontWeight: '700',
//   },
// });

// const FancyText = ({ isBlue, isBig, children }) => {
//   const textStyles = [
//     styles.text,
//     isBlue && styles.blueText,
//     isBig && styles.bigText,
//   ];

//   return <Text style={textStyles}>{children}</Text>;
// };

// const Main = () => {
//   return (
//     <>
//       <FancyText>Simple text</FancyText>
//       <FancyText isBlue>Blue text</FancyText>
//       <FancyText isBig>Big text</FancyText>
//       <FancyText isBig isBlue>
//         Big blue text
//       </FancyText>
//     </>
//   );
// };

// export default Main
