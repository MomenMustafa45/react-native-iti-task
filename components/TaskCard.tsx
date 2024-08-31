import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const TaskCard = ({ item, deleteHandler, handleDoneTasks }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View className="flex flex-row items-center justify-between px-6 py-4 rounded-2xl bg-slate-200 my-3">
      <Text className={`text-black ${isChecked ? "line-through" : ""}`}>
        {item.name}
      </Text>

      <View className="flex flex-row gap-x-2">
        <Checkbox
          value={isChecked}
          onValueChange={(value) => {
            setIsChecked(value);
            handleDoneTasks(value);
          }}
          color={isChecked ? "#4630EB" : undefined}
        />
        <Text className="text-black">Done</Text>
      </View>

      <View>
        <Button
          title="Delete"
          onPress={() => {
            deleteHandler(item.id);
          }}
        />
      </View>
    </View>
  );
};

export default TaskCard;
