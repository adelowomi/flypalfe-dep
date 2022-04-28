import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

function contact() {
  return (
    <Flex
      align="center"
      h="auto"
      // bg={['rgba(226, 232, 240, 0.3)', 'unset']}
      py={['1rem', '0']}
    >
      <Flex alignItems="center" w="full">
        <VStack w="full" h="full" display={['none', 'flex']}>
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
        <VStack
          w="full"
          align={['center', 'flex-start']}
          ml={['0', '4rem']}
          mb={['2rem', '0']}
        >
          <Text
            fontSize={{ base: '2rem', md: '2.5rem' }}
            color="brand.100"
            // mb={5}
            textAlign={['center', 'left']}
          >
            Say hi! 👋
          </Text>
          <Text
            fontSize={['18px', '20px']}
            color="black"
            w={['80%', 'full']}
            textAlign={['center', 'left']}
          >
            Send us a note and we’ll get back to you as soon as possible.
          </Text>

          <SimpleGrid
            columns={2}
            rowGap="3"
            columnGap={['2', '4']}
            w={['full', '80%']}
            mt="2rem !important"
          >
            <GridItem
              colSpan={2}
              background={['unset', 'rgba(226, 232, 240, 0.3)']}
              borderRadius="5px"
              p={['.5rem 2rem', '2rem']}
            >
              <FormControl>
                <FormLabel color="brand.100" fontSize="1.1rem">
                  Email
                </FormLabel>
                <Input placeholder="Johndoe@studiomart.com" type="email" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <SimpleGrid
                columns={2}
                rowGap="3"
                columnGap={['2', '4']}
                w="full"
                background={['unset', 'rgba(226, 232, 240, 0.3)']}
              >
                <GridItem
                  colSpan={[2, 1]}
                  background={['unset', 'unset']}
                  borderRadius="5px"
                  p={['.5rem 2rem', '2rem']}
                >
                  <FormControl>
                    <FormLabel color="brand.100" fontSize="1.1rem">
                      First Name
                    </FormLabel>
                    <Input placeholder="John" />
                  </FormControl>
                </GridItem>
                <GridItem
                  colSpan={[2, 1]}
                  background={['unset', 'unset']}
                  borderRadius="5px"
                  p={['.5rem 2rem', '2rem']}
                >
                  <FormControl>
                    <FormLabel color="brand.100" fontSize="1.1rem">
                      Last Name
                    </FormLabel>
                    <Input placeholder="Doe" />
                  </FormControl>
                </GridItem>
              </SimpleGrid>
            </GridItem>
            <GridItem
              colSpan={2}
              background={['unset', 'rgba(226, 232, 240, 0.3)']}
              borderRadius="5px"
              p={['.5rem 2rem', '2rem']}
            >
              <FormControl>
                <FormLabel color="brand.100" fontSize="1.1rem">
                  Message
                </FormLabel>
                <Input placeholder="Type your message here" type="email" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Flex
                w="full"
                justify={['center', 'flex-end']}
                mt={['2rem', '0']}
              >
                <Button variant="solid">Proceed</Button>
              </Flex>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default contact;
