import { MaterialIcons } from "@expo/vector-icons";
import { ButtonIcon } from "@components/form/ButtonIcon";

import { Container, Icon, Name } from "./styles";

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
