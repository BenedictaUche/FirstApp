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

import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';

const App = () => {
  return (

    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
