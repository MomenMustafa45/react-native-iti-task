import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { routes } from "../utils/routes";

const MovieCard = ({ item }) => {
  const navigate = useNavigation();

  return (
    <TouchableWithoutFeedback
      className="bg-gray-800 rounded-lg mb-4 p-2"
      onPress={() => {
        // @ts-ignore
        navigate.navigate(routes.movieDetails, item);
      }}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        className="rounded-lg"
        width={300}
        height={200}
      />
      <View className="flex-row justify-between items-center mt-2 px-4">
        <Text className="text-white font-bold">{item.title}</Text>
        <TouchableOpacity>
          <AntDesign name="hearto" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
