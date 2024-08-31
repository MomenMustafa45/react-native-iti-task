import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const MovieDetails = ({ route }) => {
  const { title, overview, poster_path } = route.params;
  return (
    <ScrollView className="flex-1 bg-black p-4">
      <View className="bg-gray-800 rounded-lg overflow-hidden">
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
          className="w-full h-64"
        />
        <View className="p-4">
          <Text className="text-white text-2xl font-bold mb-2">{title}</Text>
          <Text className="text-gray-300">{overview}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
