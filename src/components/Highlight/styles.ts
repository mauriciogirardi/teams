import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) =>
    css({
      fontSize: `${theme.FONT_SIZE.XL}px`,
      fontFamily: theme.FONT_FAMILY.BOLD,
      color: theme.COLORS.WHITE,
    })}
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) =>
    css({
      fontsize: `${theme.FONT_SIZE.MD}px`,
      fontFamily: theme.FONT_FAMILY.REGULAR,
      color: theme.COLORS.GRAY_SUBTITLE,
    })}
`;
