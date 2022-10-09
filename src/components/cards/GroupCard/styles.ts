import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_PRIMARY};
  border-radius: 6px;
  padding: 24px;
  margin-bottom: 12px;

  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) =>
    css({
      fontsize: `${theme.FONT_SIZE.MD}px`,
      fontFamily: theme.FONT_FAMILY.REGULAR,
      color: theme.COLORS.GRAY_TITLE,
    })}
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_SECOND,
  size: 32,
  weight: "fill",
}))`
  margin-right: 20px;
`;
