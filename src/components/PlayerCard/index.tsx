import { MaterialIcons } from "@expo/vector-icons";

import { Container, Icon, Name } from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";

type PlayerCardProps = {
  name: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  onRemove: () => void;
};

export function PlayerCard({
  icon = "person",
  name,
  onRemove,
}: PlayerCardProps) {
  return (
    <Container>
      <Icon name={icon} />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="secondary" onPress={onRemove} />
    </Container>
  );
}
