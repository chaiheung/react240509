import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"pink"}>Button</Button>
        <Button colorScheme={"red"}>Lorem.</Button>
        <Button colorScheme={"orange"}>Laudantium.</Button>
        <Button colorScheme={"yellow"}>Eveniet?</Button>
        <Button colorScheme={"green"}>Unde.</Button>
        <Button colorScheme={"teal"}>Omnis!</Button>
        <Button colorScheme={"cyan"}>Tenetur!</Button>
        <Button colorScheme={"blue"}>Et.</Button>
        <Button colorScheme={"purple"}>Incidunt.</Button>
        <Button colorScheme={"gray"}>Dolore!</Button>
        <hr />
        <Button colorScheme={"blue"} isLoading={true}>
          Lorem.
        </Button>
        <hr />
        <Button colorScheme={"blue"} variant={"solid"}>
          Lorem.
        </Button>
        <Button colorScheme={"blue"} variant={"outline"}>
          Natus.
        </Button>
        <Button colorScheme={"blue"} variant={"ghost"}>
          Voluptatem?
        </Button>
        <Button colorScheme={"blue"} variant={"link"}>
          Accusantium!
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
