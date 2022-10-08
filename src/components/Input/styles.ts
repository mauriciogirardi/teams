import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  padding: 16px;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
`;
