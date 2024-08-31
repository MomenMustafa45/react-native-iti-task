import { View, Text, ScrollView, SectionList } from "react-native";
import React from "react";
import ContactCard from "../ContactCard";
import ContactLetter from "../ContactLetter";

const DATA = [
  {
    title: "A",
    data: ["User 1", "User 2", "User 3"],
  },
  {
    title: "B",
    data: ["User 1", "User 2"],
  },
  {
    title: "C",
    data: ["User 1"],
  },
  {
    title: "D",
    data: ["User 1", "User 2"],
  },
];

const Contacts = () => {
  return (
    <>
      <View className="py-8 flex-1">
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <ContactCard name={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <ContactLetter letter={title} />
          )}
        />
      </View>
    </>
  );
};

export default Contacts;
