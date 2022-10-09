import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
`;
