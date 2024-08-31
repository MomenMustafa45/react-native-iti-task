import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import ExtraSkill from "../ExtraSkill";
import ProgressBar from "../ProgressBar";
import InformationRow from "../InformationRow";
import { AntDesign, Entypo, Feather, FontAwesome } from "@expo/vector-icons";

const Home = () => {
  return (
    <>
      <ScrollView className="py-8 px-3 flex-1">
        <View className=" items-center">
          <View className="w-20 h-20 rounded-full overflow-hidden mb-4">
            <Image
              source={require("../../assets/avatar.png")}
              className="w-full h-full"
            />
          </View>

          <Text className="text-white my-2 text-lg font-bold">Ryan Adiard</Text>
          <Text className="text-gray-400 text-sm">Frontend Developer</Text>
          <View className="flex flex-row justify-center items-center gap-x-4 my-4">
            <View className=" w-8 h-8 bg-orange-500 items-center justify-center rounded-full">
              <Feather name="facebook" size={20} color="white" />
            </View>
            <View className=" w-8 h-8 bg-orange-500 items-center justify-center rounded-full">
              <AntDesign name="twitter" size={20} color="white" />
            </View>
            <View className=" w-8 h-8 bg-orange-500 items-center justify-center rounded-full">
              <Entypo name="linkedin" size={20} color="white" />
            </View>
            <View className=" w-8 h-8 bg-orange-500 items-center justify-center rounded-full">
              <AntDesign name="instagram" size={20} color="white" />
            </View>
            <View className=" w-8 h-8 bg-orange-500 items-center justify-center rounded-full">
              <FontAwesome name="whatsapp" size={20} color="black" />
            </View>
          </View>
        </View>
        <View className="w-full h-1 bg-white rounded-full"></View>
        <View>
          <InformationRow textOne="age" textTwo="24" />
          <InformationRow textOne="age" textTwo="24" />
          <InformationRow textOne="age" textTwo="24" />
          <InformationRow textOne="age" textTwo="24" />
        </View>
        <View className="w-full h-1 bg-white rounded-full"></View>
        <View>
          <Text className="text-white my-3 text-lg font-bold">Languages</Text>
          <ProgressBar name="Bangla" percent="100" />
          <ProgressBar name="English" percent="90" />
          <ProgressBar name="Spanish" percent="60" />
          <ProgressBar name="Hindi" percent="80" />
        </View>
        <View className="w-full h-1 bg-white rounded-full my-6"></View>
        <View>
          <Text className="text-white my-3 text-lg font-bold">Skills</Text>
          <ProgressBar name="Html" percent="100" />
          <ProgressBar name="Css" percent="90" />
          <ProgressBar name="JS" percent="60" />
          <ProgressBar name="PHP" percent="80" />
          <ProgressBar name="React" percent="80" />
        </View>
        <View className="w-full h-1 bg-white rounded-full my-6"></View>
        <View>
          <Text className="text-white my-3 text-lg font-bold">
            Extra Skills
          </Text>
          <ExtraSkill skills="Bootstrap, Material UI" />
          <ExtraSkill skills="Styles, SASS, Lens" />
          <ExtraSkill skills="Gulp, Webpack grant" />
          <ExtraSkill skills="Git Knowledge" />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
