// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// export default function App(){
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   }
// });

// 1.useState
// import { useState } from "react";
// import { Button, StyleSheet, Text, View } from "react-native";
// export default function App() {
//   const [name, setName] = useState("daniel");
//   const [person, setPerson] = useState({ name: "LuoYunXi", age: 37 });
//   const clickHandler = () => {
//     setName("LiuYuNing");
//     setPerson({ name: "DingYuxi", age: 30 });
//   };
//   return (
//     <View style={styles.container}>
//       <Text>My name is {name}.</Text>
//       <Text>
//         He is {person.name} and he is {person.age} years old.
//       </Text>
//       <View style={styles.buttonContainer}>
//         <Button title="update state" onPress={clickHandler} />
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
// });

// 2.text input
// import { StyleSheet, Text, TextInput, View } from "react-native";
// import React, { useState } from "react";

// export default function App() {
//   const [name, setName] = useState("daniel");
//   const [age, setAge] = useState("22");
//   return (
//     <View style={styles.container}>
//       <Text>Enter Name</Text>
//       <TextInput
//         multiline
//         placeholder="eg. daniel"
//         style={styles.input}
//         onChangeText={(val) => setName(val)}
//       />

//       <Text>Enter Age</Text>
//       <TextInput
//         keyboardType="numeric"
//         placeholder="eg. 22"
//         style={styles.input}
//         onChangeText={(val) => setAge(val)}
//       />

//       <Text>
//         Result : Name - {name} , Age - {age}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#777",
//     padding: 8,
//     marginBottom: 20,
//     marginTop: 10,
//     width: 200,
//     borderRadius: 5,
//   },
// });

import { LogBox } from "react-native";

LogBox.ignoreAllLogs(false); // force-enable all warnings
console.reportErrorsAsExceptions = true; // make warnings show as errors

// 3. Lists & Scrollview
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [person, setPerson] = useState([
    { name: "luoyunxi", id: "1" },
    { name: "dingyuxi", id: "2" },
    { name: "BaiLu", id: "3" },
    { name: "Zhouye", id: "4" },
    { name: "SongZuer", id: "5" },
    { name: "LiuYuNing", id: "6" },
    { name: "LinYi", id: "7" },
  ]);
  return (
    <View style={styles.container}>
      {/* <ScrollView>
        {person.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={person}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 10,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10
  },
});
