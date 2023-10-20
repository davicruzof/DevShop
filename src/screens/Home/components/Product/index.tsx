import React, { useContext } from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ProductType } from "../../mock";

import * as S from "./styles";
import { CartContext, CartItem } from "@/contexts/cartContext";

const Product: React.FC<{ productData: ProductType }> = ({ productData }) => {
  const { products, setProducts } = useContext(CartContext);

  const addToCart = () => {
    const existItem = products.find((item) => item.id === productData.id);

    let listProduct: CartItem[] = [];

    if (existItem) {
      listProduct = products.map((item) => {
        item.quantity = item.id === productData.id ? item.quantity + 1: item.quantity;
        return item;
      });
      setProducts(listProduct);
    } else {
      setProducts((old) => [...old, { ...productData, quantity: 1 }]);
    }
  };

  return (
    <S.Container>
      <S.WrapperImage>
        <S.ImageProduct
          source={{
            uri: productData.image_url,
          }}
        />
      </S.WrapperImage>
      <S.Title>{productData.name}</S.Title>
      <S.WrapperFooter>
        <View>
          <S.Quantity>{productData.quantidade}</S.Quantity>
          <S.Price>${productData.price}</S.Price>
        </View>
        <S.ButtonAddToCart onPress={addToCart}>
          <AntDesign name="plus" size={24} color="black" />
        </S.ButtonAddToCart>
      </S.WrapperFooter>
    </S.Container>
  );
};

export default Product;
