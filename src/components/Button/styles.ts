import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = "primary" | "secondary";
type ButtonStyledProps = {
  type: ButtonTypeStyleProps;
};

type TextStyledProps = {
  icon?: boolean;
};

export const Container = styled(TouchableOpacity)<ButtonStyledProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.GREEN_PRIMARY : theme.COLORS.RED_PRIMARY};
`;

export const Text = styled.Text<TextStyledProps>`
  color: #fff;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-left: ${({ icon }) => (icon ? "10px" : 0)};
`;
