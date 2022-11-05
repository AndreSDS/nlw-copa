import { Center, Heading, Icon, Text, VStack } from "native-base";
import { Button, Header, Input } from "../components";
import Logo from "../assets/logo.svg";

export const New = () => {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Criar novo bolão" />

      <VStack mt={8} mx={5} alignItems="center">
        <Logo />

        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          my={8}
          textAlign="center"
        >
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </Heading>

        <Input mb={2} placeholder="Qual nome do seu bolão?" />

        <Button title="Criar meu Bolão" />

        <Text color="gray.200" fontSize="sm" textAlign="center" mt={4} px={10}>
          Após criar seu bolão, você receberá {"\n"}um código único que poderá
          usar para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  );
};
