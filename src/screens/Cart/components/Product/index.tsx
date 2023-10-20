import React, { useContext } from "react";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";
import { CartContext, CartItem } from "@/contexts/cartContext";

const Product: React.FC<{ productData: CartItem }> = ({ productData }) => {
  const { products, setProducts } = useContext(CartContext);

  const addPlus = () => {
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
  const subItem = () => {
    let listProduct: CartItem[] = products.map((item) => {
      item.quantity = item.id === productData.id ? item.quantity - 1: item.quantity;
      return item;
    });

    listProduct = listProduct.filter((item) => item.quantity > 0);
    setProducts(listProduct);
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
      <S.WrapperFooter>
        <S.Title>{productData.name}</S.Title>
        <S.Quantity>{productData.quantidade}</S.Quantity>
        <S.WrapperValueQuantity>
          <S.Price>${productData.price}</S.Price>
          <S.ButtonAddToCart onPress={subItem}>
            <AntDesign name="minus" size={24} color="black" />
          </S.ButtonAddToCart>
          <Text>{productData.quantity}</Text>
          <S.ButtonAddToCart onPress={addPlus}>
            <AntDesign name="plus" size={24} color="black" />
          </S.ButtonAddToCart>
        </S.WrapperValueQuantity>
      </S.WrapperFooter>
    </S.Container>
  );
};

export default Product;
