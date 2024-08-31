import { View, Text } from "react-native";
import React from "react";

const ProgressBar = ({ name, percent }) => {
  return (
    <View>
      <View className="flex flex-row justify-between mb-2">
        <Text className="text-white">{name}</Text>
        <Text className="text-white">{percent}%</Text>
      </View>
      <View className="w-full h-2 border border-orange-400 p-1 rounded-full flex flex-start justify-center">
        <View
          className={` h-1 bg-orange-400 rounded-full `}
          style={{ width: `${percent}%` }}
        ></View>
      </View>
    </View>
  );
};

export default ProgressBar;
