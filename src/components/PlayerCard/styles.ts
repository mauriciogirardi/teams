import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_SECOND};

  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 6px;
`;

export const Name = styled.Text`
  ${({ theme }) =>
    css({
      fontSize: `${theme.FONT_SIZE.MD}px`,
      fontFamily: theme.FONT_FAMILY.REGULAR,
      color: theme.COLORS.GRAY_TEXT,
    })}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_TEXT,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
