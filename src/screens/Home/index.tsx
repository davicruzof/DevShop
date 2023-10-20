import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import Header from "./components/Header";
import Categories from "./components/Categories";
import { TouchableOpacity } from "react-native";
import { Theme } from "@/theme/theme";

const Home: React.FC = () => {
  const [active, setActive] = useState("Beer");

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header />
      <Categories active={active} setActive={setActive} />

      <View
        style={{
          borderWidth: 1,
          borderColor: "#CACACA",
          width: 250,
          padding: 20,
          borderRadius: 50,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            source={require("../../assets/images/beer.png")}
            resizeMode="contain"
            style={{ height: 150, width: 250 }}
          />
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 4  }}>
          Caneca de Chop Artesanal Belga
        </Text>
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontWeight: "500", fontSize: 14, color: "#b2b2b2", marginBottom: 8 }}>
              350ml
            </Text>
            <Text style={{ fontWeight: "600", fontSize: 20 }}>$14,19</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Theme.colors.disabled,
              height: 50,
              width: 50,
              borderRadius: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 24 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
