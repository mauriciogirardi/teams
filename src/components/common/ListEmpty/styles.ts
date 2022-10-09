import { HardDrives } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;

  ${({ theme }) =>
    css({
      fontSize: `${theme.FONT_SIZE.MD}px`,
      fontFamily: theme.FONT_FAMILY.REGULAR,
      color: theme.COLORS.GRAY_SUBTITLE,
    })}
`;

export const Icon = styled(HardDrives).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.GRAY_SUBTITLE,
}))`
  margin-top: 15px;
`;
