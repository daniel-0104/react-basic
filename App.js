import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "./components/header";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "watch drama", key: "1" },
    { text: "drink coffee", key: "2" },
    { text: "learn coding", key: "3" },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
