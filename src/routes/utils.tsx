import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { routeType } from "./types";

export const routes: routeType = {
  Home: {
    icon: "home",
    type: "AntDesign",
  },
  Cart: {
    icon: "shoppingcart",
    type: "AntDesign",
  },
  Profile: {
    icon: "user",
    type: "AntDesign",
  },
  Menu: {
    icon: "menu",
    type: "Feather",
  },
};

export const TabBarStyle = {
  backgroundColor: "#fff",
  height: 80,
  marginHorizontal: 10,
  marginBottom: 20,
  paddingBottom: 16,
  borderRadius: 30,
  borderTopRightRadius: 30,
  borderTopLeftRadius: 30,
  borderColor: "#e6e6e6",
  borderWidth: 1,
};

export const IconRenderer = (name: any, color: string, iconType: any) => {
  if (iconType === "Feather")
    return <Feather name={name} size={24} color={color} />;
  if (iconType === "AntDesign")
    return <AntDesign name={name} size={24} color={color} />;
};
