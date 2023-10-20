import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import CategoryItem from "./components/CategoryItem";

import * as S from "./styles";

const Categories: React.FC<{
  active: string;
  setActive: (val: string) => void;
}> = ({ active, setActive }) => {
  return (
    <S.Container>
      <S.WrapperButtonsHeader>
        <S.TextSection>Top categories</S.TextSection>
        <TouchableOpacity>
          <S.TextButtonAll>See all</S.TextButtonAll>
        </TouchableOpacity>
      </S.WrapperButtonsHeader>
      <S.ListWrapper>
        <CategoryItem item="Beer" active={active} setActive={setActive} />
        <CategoryItem item="Drinks" active={active} setActive={setActive} />
        <CategoryItem item="Coffee" active={active} setActive={setActive} />
        <CategoryItem item="Juices" active={active} setActive={setActive} />
        <CategoryItem item="Specials" active={active} setActive={setActive} />
        <CategoryItem item="Bottles" active={active} setActive={setActive} />
      </S.ListWrapper>
    </S.Container>
  );
};

export default Categories;
