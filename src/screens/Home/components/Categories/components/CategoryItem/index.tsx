import React from "react";

import * as S from "./styles";

const CategoryItem: React.FC<{
  item: string;
  active: string;
  setActive: (val: string) => void;
}> = ({ item, active, setActive }) => {
  const isActive = active === item;
  return (
    <S.Container isActive={isActive} onPress={() => setActive(item)}>
      <S.ItemText isActive={isActive}>
        {item}
      </S.ItemText>
    </S.Container>
  );
};

export default CategoryItem;
