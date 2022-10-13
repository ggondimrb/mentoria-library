import { ReactNode } from "react";
import { Container, Icon } from "./styles";

type InputProps = {
  icon: ReactNode;
  label: string;
};

export function Input(props: InputProps) {
  const { icon, label } = props;
  return (
    <Container>
      <Icon>{icon}</Icon>
      <input placeholder={label} />
    </Container>
  );
}
