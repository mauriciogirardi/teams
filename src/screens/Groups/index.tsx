import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import * as S from "./styles";

export const Groups = () => {
  return (
    <S.ContainerGroup>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
    </S.ContainerGroup>
  );
};
