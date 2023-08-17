import { Text } from "@chakra-ui/react";

type Props = {
  greeting: string;
};

export default function SayHello({ greeting }: Props) {
  return <Text>{greeting}</Text>;
}
