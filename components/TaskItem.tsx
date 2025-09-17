import { View, Text } from "react-native";
import React from "react";

export default function TaskItem({ title, desc, completed }) {
  return (
    <View className="bg-gray-200 p-4 rounded-xl m-2 w-100">
      <Text className="text-base font-bold text-3xl mb-4">{title}</Text>
      <Text className="text-base text-xl">{desc}</Text>
      <Text className="text-base">Status : {completed ? "Completed" : "Incomplete"}</Text>
    </View>
  );
}
