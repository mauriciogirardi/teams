import * as S from "./styles";

type HighlightProps = {
  title: string;
  subtitle?: string;
};

export function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    </S.Container>
  );
}
