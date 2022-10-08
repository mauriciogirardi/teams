import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_SUBTITLE,
}))`
  flex: 1;
  padding: 16px;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  ${({ theme }) =>
    css({
      color: theme.COLORS.WHITE,
      fontSize: `${theme.FONT_SIZE.MD}px`,
      fontFamily: theme.FONT_FAMILY.REGULAR,
      backgroundColor: theme.COLORS.BACKGROUND_SECONDARY,
    })}
`;
