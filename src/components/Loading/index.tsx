import { themes } from "@theme/index";
import React from "react";
import { ActivityIndicator } from "react-native";
import * as S from "./styles";

export function Loading() {
  return (
    <S.Container>
      <ActivityIndicator size="large" color={themes.COLORS.LOADING} />
    </S.Container>
  );
}
