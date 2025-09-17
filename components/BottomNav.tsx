import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";
import React from "react";

type TabRoute = "/(tabs)/index" | "/(tabs)/create";

interface Tab {
  name: string;
  href: TabRoute;
  icon: keyof typeof Ionicons.glyphMap;
}

const tabs: Tab[] = [
  { name: "Tasks", href: "/(tabs)/index", icon: "list" },
  { name: "Create", href: "/(tabs)/create", icon: "add-circle" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <View className="flex-row justify-around items-center py-3 bg-neutral-900 border-t border-neutral-800">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link key={tab.name} href={tab.href as any} asChild>
            <TouchableOpacity className="items-center">
              <Ionicons
                name={tab.icon}
                size={24}
                color={isActive ? "#6366f1" : "white"}
              />
              <Text
                className={`mt-1 text-xs ${
                  isActive ? "text-indigo-500 font-semibold" : "text-white"
                }`}
              >
                {tab.name}
              </Text>
            </TouchableOpacity>
          </Link>
        );
      })}
    </View>
  );
}
