import { Center, Heading, VStack, Icon, Text } from "native-base";
import { Octicons } from "@expo/vector-icons";
import { Button, Header, Input } from "../components";
import { useState } from "react";
import { PoolCard } from "../components/PoolCard";
import { Participants, ParticipantProps } from "../components/Participants";

export const Pools = () => {
  const [list, setList] = useState([]);

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus bolões" />

      <VStack
        mt={6}
        mx={5}
        borderBottomWidth={1}
        borderBottomColor="gray.600"
        pb={4}
        mb={4}
        alignItems="center"
      >
        <Button
          leftIcon={
            <Icon as={Octicons} name="search" size="md" color="black" />
          }
          title="Buscar bolão por código"
        />
      </VStack>

      <Center>
        {list.length === 0 ? (
          <Text textAlign="center" color="gray.400" fontSize={14}>
            Você ainda não está participando de {"\n"} nenhum bolão, que tal
            <Text underline color="yellow.500">
              {" "}
              buscar um por código
            </Text>{" "}
            {"\n"} ou{" "}
            <Text underline color="yellow.500">
              criar um novo
            </Text>
            ?
          </Text>
        ) : null}
      </Center>
    </VStack>
  );
};
