// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>My first app</Text>
//       <StatusBar style="auto" />

//       <Pressable
//       onPress={() => Alert.alert('You pressed the text!')}
//       style={styles.button}
//     >
//       <Text>You can press me</Text>
//     </Pressable>
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: '#007bff',
//   }
// });

import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";
import client from "./src/graphql/client";
import Constants from 'expo-constants';
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/directory/AuthStorageContext";


const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  console.log(Constants.expoConfig);
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>

      <StatusBar style="auto" />
    </>
  );
};

export default App;
