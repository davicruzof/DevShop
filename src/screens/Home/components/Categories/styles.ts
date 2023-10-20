import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-top: 32px;
`;

export const WrapperButtonsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 0 20px;
`;

export const TextSection = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.dark};
`;

export const TextButtonAll = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
`;

export const ListWrapper = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%px;
  margin-left: 20px;
`;
