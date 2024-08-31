import { AntDesign, Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MovieCard from "../MovieCard";

const emojisWithIcons = [
  { title: "now_playing" },
  { title: "popular" },
  { title: "top_rated" },
  { title: "upcoming" },
];

const MoviesHome = () => {
  const [movies, setMovies] = useState([]);
  const [moviesCate, setMoviesCate] = useState("now_playing");
  const [searchText, setSsearchText] = useState("");

  const getMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${moviesCate}?api_key=b97f1c6678b72de3e513505f0c5126fa`
      );
      const data = await res.json();
      setMovies([...data.results]);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [moviesCate]);

  const filteredMovies = movies.filter((item) =>
    item.title.includes(searchText)
  );

  return (
    <View className="flex-1 bg-black p-4">
      <View className="flex-row justify-between items-center mb-4">
        <TextInput
          placeholder="Search"
          placeholderTextColor="gray"
          className="bg-gray-700 text-white rounded-lg p-2 flex-1 mr-2"
          onChangeText={(text) => setSsearchText(text)}
        />
        <View className="bg-white rounded-lg">
          <SelectDropdown
            data={emojisWithIcons}
            onSelect={(selectedItem, index) => {
              setMoviesCate(selectedItem.title);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  {selectedItem && (
                    <Icon
                      name={selectedItem.icon}
                      style={styles.dropdownButtonIconStyle}
                    />
                  )}
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {(selectedItem && selectedItem.title) || "Select"}
                  </Text>
                  <Icon
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    style={styles.dropdownButtonArrowStyle}
                  />
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && { backgroundColor: "#D2D9DF" }),
                  }}
                >
                  <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
        </View>
      </View>
      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MovieCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MoviesHome;

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 150,
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 20,
  },
  dropdownButtonIconStyle: {
    fontSize: 20,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
