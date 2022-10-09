import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { FilterStyleProps } from ".";

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css({
      border: `1px solid ${theme.COLORS.GREEN_SECOND}`,
    })}

  border-radius: 4px;
  margin-right: 12px;
  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) =>
    css({
      fontFamily: theme.FONT_FAMILY.BOLD,
      fontSize: `${theme.FONT_SIZE.MD}px`,
      color: theme.COLORS.WHITE,
    })}

  text-transform: uppercase
`;
