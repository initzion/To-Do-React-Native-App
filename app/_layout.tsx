import { Tabs } from "expo-router";
import React from "react";
import "../global.css";
import { StatusBar } from "expo-status-bar";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="dark" />
      <Tabs screenOptions={{
        //headerShown: false,
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#f8f8f8' },
      }}>
        <Tabs.Screen name="alltask" options={{
          tabBarIcon: ({color, size}) => <FontAwesome5 name="list" size={size} color={color} />,
          title: "My Tasks",
          tabBarBadge: 2
        }}/>
        <Tabs.Screen name="createtask" options={{
          tabBarIcon: ({color, size}) => <AntDesign name="plus-square" size={size} color={color} />,
          title: "Create Task"
        }} />
      </Tabs>
    </React.Fragment>
  );
}
