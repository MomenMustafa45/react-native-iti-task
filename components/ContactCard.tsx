import { View, Text, Image } from "react-native";
import React from "react";

const ContactCard = ({ name }) => {
  return (
    <View className="flex flex-row items-center gap-x-3 px-4 my-3">
      <Image
        className="w-12 h-12 rounded-full"
        source={require("../assets/avatar-contact.png")}
      />
      <Text className="font-bold text-lg">{name}</Text>
    </View>
  );
};

export default ContactCard;
