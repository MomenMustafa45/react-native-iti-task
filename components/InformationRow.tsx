import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";

const InformationRow = ({ textOne, textTwo }) => {
  return (
    <View className="w-full py-4 flex flex-row justify-between px-4">
      <Text className="text-white bg-orange-400 p-2">Age</Text>
      <Text className="text-white">24</Text>
    </View>
  );
};

export default InformationRow;
