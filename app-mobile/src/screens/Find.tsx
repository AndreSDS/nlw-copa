import { Center, Heading, VStack } from "native-base";
import { Button, Header, Input } from "../components";

export const Find = () => {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header showBackButton title="Buscar por código" />

      <VStack mt={8} mx={5} alignItems="center">
        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          mb={8}
          textAlign="center"
        >
          Encontrar o bolão atrvés de {"\n"}seu código único
        </Heading>

        <Input mb={2} placeholder="Qual código do bolão?" />

        <Button title="Buscar bolão" />
      </VStack>
    </VStack>
  );
};
