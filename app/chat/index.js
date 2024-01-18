import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  VirtualizedList,
  Dimensions,
} from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useReanimatedKeyboardAnimation } from "react-native-keyboard-controller";
import { StatusBar } from "expo-status-bar";
import CustomTextInput from "../../components/customTextInput";
import ChatDATA from "../../mock/chatData";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AnimatedVirtualizedList =
  Animated.createAnimatedComponent(VirtualizedList);

const ChatScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const listRef = useRef(null);
  const inputRef = useRef(null);

  const { height } = useReanimatedKeyboardAnimation();

  const [state, setState] = useState({
    text: "",
    data: ChatDATA,
    emojiView: false,
    keyboardHeight: 0,
  });

  const getItem = (_data, index) => _data[index];

  const getItemCount = (_data) => _data?.length;

  const sendMsg = () => {
    if (state.text.trim().length > 0) {
      setState((prev) => ({
        ...prev,
        data: [{ msg: prev.text.trim(), uId: 1 }, ...prev.data],
        text: "",
      }));

      listRef.current.scrollToOffset({ offset: 0, animated: false });
    }
  };

  const animatedWrapper = useAnimatedStyle(() => {
    let keyboardHeight = height.value + bottom;
    return {
      height: -keyboardHeight,
    };
  }, []);

  const renderItem = ({ item }) => {
    let isUser = item.uId === 1;
    return (
      <View style={[styles.msgWrapper, isUser && styles.userMsgWrapper]}>
        <View
          style={[
            styles.msgBubble,
            isUser ? styles.userBubble : styles.otherBubble,
          ]}
        >
          <Text style={styles.msgStyle}>{item.msg}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={[{ flex: 1 }]}>
      <StatusBar style="dark" />
      <AnimatedVirtualizedList
        ref={listRef}
        inverted
        data={[
          ...state.data,
          ...state.data,
          ...state.data,
          ...state.data,
          ...state.data,
          ...state.data,
          ...state.data,
          ...state.data,
          ...state.data,
          ...state.data,
          ...state.data,
          ...state.data,
        ]}
        extraData={state.data}
        removeClippedSubviews={Platform.OS === "android"}
        initialNumToRender={10}
        getItemCount={getItemCount}
        getItem={getItem}
        maxToRenderPerBatch={5}
        windowSize={16}
        contentContainerStyle={[styles.flatListStyle]}
        style={[
          { flex: 1 },
          Platform.OS === "android" ? { transform: [{ scale: -1 }] } : {},
        ]}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
      />
      <CustomTextInput
        ref={inputRef}
        onFocus={() => {}}
        value={state.text}
        onChangeText={(e) => setState((prev) => ({ ...prev, text: e }))}
        isEmoji={state.emojiView}
        onSend={sendMsg}
        onEmoji={() => {}}
        onKeyboard={() => {}}
      />
      <Animated.View style={animatedWrapper} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  msgWrapper: {
    alignItems: "flex-start",
  },
  userMsgWrapper: {
    alignItems: "flex-end",
  },
  msgBubble: {
    maxWidth: Dimensions.get("window").width * 0.8,
    borderRadius: 15,
    paddingVertical: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  otherBubble: {
    backgroundColor: "white",
    borderTopLeftRadius: 0,
  },
  userBubble: {
    backgroundColor: "rgb(230,230,255)",
    borderTopRightRadius: 0,
  },
  flatListStyle: {
    flexGrow: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 5,
    gap: 10,
  },
  msgStyle: {
    fontSize: 17,
  },
});

export default ChatScreen;
