import styled from "styled-components/native";
import { Sun, CaretLeft, MoonStars } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const Background = styled.View`
  background-color: #202024;
  width: 120%;
  height: 120px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 36,
  color: "#fff",
}))``;

export const SunIcon = styled(Sun).attrs(({ theme }) => ({
  size: 36,
  color: "#fff",
}))``;

export const MoonIcon = styled(MoonStars).attrs(({ theme }) => ({
  size: 36,
  color: "#fff",
}))``;
