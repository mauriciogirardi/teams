import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_PRIMARY};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  justify-content: center;
  flex-direction: row;
  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme }) =>
    css({
      color: theme.COLORS.BLUE,
      fontFamily: theme.FONT_FAMILY.BOLD,
      fontSize: `${theme.FONT_SIZE.SM}px`,
    })}

  margin-left: 20px;
  border-radius: 99999px;
`;
