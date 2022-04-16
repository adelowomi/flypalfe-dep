import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

function contact() {
  return (
    <>
      <Flex align="center" h="auto">
        <Flex alignItems="center" w="full">
          <VStack w="full" h="full">
            <Box
              width="full"
              h="800px"
              bg="linear-gradient(0.22deg, #1B345B 7.56%, rgba(27, 52, 91, 0) 158.89%), url(/assets/contact.png)"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p="5rem 0"
            >
              <Text
                fontSize="2.5rem"
                color="white"
                textAlign="center"
                textDecor="underline"
              >
                Let’s connect
              </Text>
              <Text fontSize="2rem" color="white" textAlign="center">
                Give us a call: +234 123 4567
              </Text>
            </Box>
          </VStack>
          <VStack w="full" align="flex-start" ml="4rem">
            <Text
              fontSize="2.5rem"
              color="brand.100"
              // mb={5}
              textAlign="left"
            >
              Say hi! 👋
            </Text>
            <Text fontSize="20px" color="black" w="60%">
              Send us a note and we’ll get back to you as soon as possible.
            </Text>

            <SimpleGrid
              column={2}
              rowGap="3"
              columnGap="4"
              w="80%"
              mt="2rem !important"
            >
              <GridItem
                colSpan={2}
                background="rgba(226, 232, 240, 0.3)"
                borderRadius="5px"
                p="2rem"
              >
                <FormControl>
                  <FormLabel color="brand.100" fontSize="1.1rem">
                    Email
                  </FormLabel>
                  <Input placeholder="Johndoe@studiomart.com" type="email" />
                </FormControl>
              </GridItem>
              <GridItem
                colSpan={2}
                background="rgba(226, 232, 240, 0.3)"
                borderRadius="5px"
                p="2rem"
              >
                <HStack justify="space-between" spacing={6}>
                  <FormControl>
                    <FormLabel color="brand.100" fontSize="1.1rem">
                      First Name
                    </FormLabel>
                    <Input placeholder="John" />
                  </FormControl>

                  <FormControl>
                    <FormLabel color="brand.100" fontSize="1.1rem">
                      Last Name
                    </FormLabel>
                    <Input placeholder="Doe" />
                  </FormControl>
                </HStack>
              </GridItem>
              <GridItem
                colSpan={2}
                background="rgba(226, 232, 240, 0.3)"
                borderRadius="5px"
                p="2rem"
              >
                <FormControl>
                  <FormLabel color="brand.100" fontSize="1.1rem">
                    Message
                  </FormLabel>
                  <Input placeholder="Type your message here" type="email" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Flex w="full">
                  <Button variant="solid" ml="auto">
                    Proceed
                  </Button>
                </Flex>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}

export default contact;
