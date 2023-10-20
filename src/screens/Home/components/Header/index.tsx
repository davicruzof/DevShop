import React from "react";
import { View } from "react-native";
import Background from "../../../../assets/images/icon.png";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Background source={Background}>
        <S.Content>
          <View>
            <S.Welcome>Hello,</S.Welcome>
            <S.UserName>Frederico</S.UserName>
          </View>
          <View>
            <S.InputSearch placeholder="Search for something tasting" />
            <S.ButtonSearch>
              <AntDesign name="search1" size={24} color="white" />
            </S.ButtonSearch>
          </View>
        </S.Content>
      </S.Background>
    </S.Container>
  );
};

export default Header;
