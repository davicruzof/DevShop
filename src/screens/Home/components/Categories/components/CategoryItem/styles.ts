import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.TouchableOpacity<{ isActive: boolean }>`
  background-color: ${({
    isActive,
    theme,
  }: {
    isActive: boolean;
    theme: DefaultTheme;
  }) => (isActive ? theme.colors.primary : "#fff")};
  padding: 16px;
  margin-right: 20px;
  height: 50px;
  border-radius: 30px;
  width: 100px;
  justify-content: center;
  align-items: center;
  border: ${({ isActive }: { isActive: boolean }) => (isActive ? 0 : 1)}px solid
    ${({ isActive, theme }: { isActive: boolean; theme: DefaultTheme }) =>
      isActive ? theme.colors.primary : "#dadada"};
`;

export const ItemText = styled.Text<{ isActive: boolean }>`
  color: ${({ isActive, theme }: { isActive: boolean; theme: DefaultTheme }) =>
    isActive ? "#fff" : theme.colors.dark};
  font-size: 14px;
  font-weight: ${({ isActive }: { isActive: boolean }) =>
    isActive ? "bold" : "300"};
`;
