import { Container, Icon, Message } from "./styles";

type ListEmptyProps = {
  message: string;
  showIcon?: boolean;
};

export function ListEmpty({ message, showIcon = true }: ListEmptyProps) {
  return (
    <Container>
      <Message>{message}</Message>
      {showIcon && <Icon />}
    </Container>
  );
}
