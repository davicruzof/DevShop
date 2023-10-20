import React, { useContext } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Product from "./components/Product";
import { ProductsList } from "../Home/mock";
import { CartContext } from "@/contexts/cartContext";

// import { Container } from './styles';

const Cart: React.FC = () => {
  const { products } = useContext(CartContext);

  const total = products
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <SafeAreaView>
      <View style={{ padding: 20, width: "100%" }}>
        <View>
          <Text>Cart</Text>
        </View>
        <ScrollView>
          {products.map((item) => (
            <Product key={item.id} productData={item} />
          ))}
        </ScrollView>
        <View>
          <Text>Total: {total.toFixed(2)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
