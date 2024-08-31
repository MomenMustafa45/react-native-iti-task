import { View, Text } from "react-native";
import React from "react";

const ContactLetter = ({ letter }) => {
  return (
    <View className="w-full px-3 py-4 bg-slate-400">
      <Text>{letter}</Text>
    </View>
  );
};

export default ContactLetter;
