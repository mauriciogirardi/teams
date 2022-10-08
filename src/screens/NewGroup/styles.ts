import { UsersThree } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_SECOND,
}))`
  align-self: center;
`;
