import styled from "styled-components/native";

export const ContainerGroup = styled.View`
  flex: 1;
  background: ${({ theme }) => theme["gray-700"]};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme["gray-100"]};
  font-weight: bold;
  font-size: 50px;
`;
