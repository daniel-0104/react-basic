import { useState } from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  const handleAddTodo = () => {
    submitHandler(text);
    setText("");
    Keyboard.dismiss();
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button title="add todo" color="coral" onPress={handleAddTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
