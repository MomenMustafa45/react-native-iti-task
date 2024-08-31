import { View, Text } from "react-native";
import React from "react";
import Octicons from "@expo/vector-icons/Octicons";

const ExtraSkill = ({ skills }) => {
  return (
    <View className="flex flex-row gap-x-4 my-4 items-center">
      <View>
        <Octicons name="dot-fill" size={20} color="orange" />
      </View>
      <Text className="text-white">{skills}</Text>
    </View>
  );
};

export default ExtraSkill;
