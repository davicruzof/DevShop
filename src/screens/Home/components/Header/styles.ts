import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  max-height: 300px;
`;

export const Background = styled.ImageBackground.attrs({
  resizeMode: "cover",
})`
  max-height: 300px;
  height: 300px;
  width: 100%;
  position: relative;
  padding-top: 80px;
`;

export const Content = styled.View`
  padding: 0 20px;
`;

export const Welcome = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 42px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 48px;
`;

export const InputSearch = styled.TextInput.attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    placeholderTextColor: theme.colors.dark,
  })
)`
  background-color: #fff;
  border-radius: 50px;
  padding: 20px;
  margin-top: 32px;
  color: #000;
`;

export const ButtonSearch = styled.TouchableOpacity`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.secondary};
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  position: absolute;
  margin-top: 40px;
  right: 10px;
`;
