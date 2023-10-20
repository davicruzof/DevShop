import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Product from "./components/Product";
import { ProductsList } from "./mock";

const Home: React.FC = () => {
  const [active, setActive] = useState("Beer");

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header />
      <Categories active={active} setActive={setActive} />

      <View
        style={{
          marginLeft: 20,
          marginTop: 32,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {ProductsList.map(
            (item) => item.category === active && <Product key={item.id} productData={item} />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
