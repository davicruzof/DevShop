import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border: 1px solid #cacaca;
  width: 250px;
  padding: 20px;
  max-height: 310px;
  border-radius: 30px;
  margin-right: 16px;
`;

export const WrapperImage = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ImageProduct = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 250px;
  height: 150px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 4px;
`;

export const WrapperFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Quantity = styled.Text`
  font-weight: 500;
  font-size: 14px;
  color: #b2b2b2;
  margin-bottom: 8px;
`;

export const Price = styled.Text`
  font-weight: 600;
  font-size: 20px;
`;

export const ButtonAddToCart = styled.TouchableOpacity`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.disabled};
  height: 50px;
  width: 50px;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
`;
