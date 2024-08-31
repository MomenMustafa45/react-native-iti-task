import {
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import TaskCard from "../TaskCard";

let todoList = [
  { id: 1, name: "task one" },
  { id: 2, name: "task two" },
  { id: 3, name: "task three" },
];

const TodoScreen = () => {
  const [taskText, setTaskText] = useState("");
  const [todosArr, setTodosArr] = useState(todoList);
  const [doneTasks, setDoneTasks] = useState(0);

  const handleDelete = (id: number) => {
    const newArr = todosArr.filter((task) => task.id !== id);
    setTodosArr([...newArr]);
  };

  const handleDoneTasks = (checked: boolean) => {
    if (checked) {
      setDoneTasks((prev) => prev + 1);
    } else {
      setDoneTasks((prev) => prev - 1);
    }
  };

  return (
    <View className="flex-1 bg-black">
      <View className="flex flex-row justify-center items-center py-9 bg-purple-500">
        <Text className="text-white text-lg font-bold">My Todo List</Text>
      </View>
      {/*  */}
      <View className="flex flex-row gap-x-4 my-8">
        <TextInput
          value={taskText}
          onChangeText={setTaskText} // use onChangeText instead of onChange for TextInput
          className="text-white border-b-2 border-purple-500 flex-1"
        />
        <TouchableOpacity
          onPress={() => {
            if (taskText.length > 3) {
              todosArr.push({ id: todoList.length + 1, name: taskText });
              setTaskText("");
            }
          }}
          className="flex flex-row bg-purple-500 items-center justify-center text-center px-4 py-2 rounded-xl"
        >
          <Text className="text-white">Add</Text>
        </TouchableOpacity>
      </View>
      {/*  */}
      <View className="flex justify-center items-center">
        <Text className="text-white font-bold text-lg my-4">
          {doneTasks} done of {todosArr.length} tasks
        </Text>
      </View>
      {/*  */}
      <ScrollView className="px-8">
        {todosArr.map((task) => (
          <TaskCard
            item={task}
            key={task.id}
            deleteHandler={handleDelete}
            handleDoneTasks={handleDoneTasks}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TodoScreen;
