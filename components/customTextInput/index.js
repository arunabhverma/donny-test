import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import PressableOpacity from "../PressableOpacity";

const CustomTextInput = React.forwardRef((props, ref) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TextInput
          ref={ref}
          value={props.value}
          onFocus={props.onFocus}
          onChangeText={props.onChangeText}
          style={styles.inputStyle}
          placeholder="Message"
          placeholderTextColor={"rgba(0,0,0,0.2)"}
          {...props}
        />
      </View>
      <View style={styles.sendButtonWrapper}>
        <PressableOpacity style={styles.sendButtonStyle} onPress={props.onSend}>
          <Feather name="send" size={20} color="white" />
        </PressableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 7,
    gap: 5,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 100,
    paddingVertical: 3,
    paddingLeft: 3,
    paddingRight: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 3,
    padding: 0,
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 20,
  },
  sendButtonWrapper: {
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: "dodgerblue",
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  sendButtonStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default CustomTextInput;
