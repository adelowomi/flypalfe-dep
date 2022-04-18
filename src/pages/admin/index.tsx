import {
  Box,
  Flex,
  Image,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  Link,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';

function index() {
  return (
    <Flex
      w="100%"
      h="100vh"
      bgColor="brand.800"
      bgImage="url(/assets/lines2.png)"
    >
      <Box w="60%" display="flex" justifyContent="center" alignItems="center">
        <Image src="assets/admin.png" />
      </Box>
      <Box w="40%" display="flex" justifyContent="center" alignItems="center">
        <Box w="80%" mr="auto">
          <VStack justify="center">
            <Flex w="190px">
              <Image src="assets/logoblue.png" w="full" />
            </Flex>
            <Box fontSize="1rem" textAlign="center" mt="3rem !important">
              <Text fontWeight="600">Welcome!</Text>
              <Text> Enter details to login</Text>
            </Box>
          </VStack>
          <VStack
            background="rgba(223, 248, 249, .2)"
            boxShadow="-3px 20px 30px rgba(0, 0, 0, 0.07)"
            borderRadius="5px"
            w="100%"
            mx="auto"
            p="3rem"
            mt="2rem"
          >
            <SimpleGrid column={2} rowGap="3" columnGap="4" w="100%">
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel color="brand.100" fontSize="1.1rem">
                    Username
                  </FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="chijozie@gmail.com"
                      type="email"
                      variant="filled"
                    />
                  </InputGroup>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel color="brand.100" fontSize="1.1rem">
                    Username
                  </FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="..........."
                      type="password"
                      variant="filled"
                    />
                  </InputGroup>
                </FormControl>
              </GridItem>
            </SimpleGrid>
            <Flex
              justify="space-between"
              align="center"
              mt="2rem !important"
              w="100%"
            >
              <NextLink href="" passHref>
                <Link>Forgot Password</Link>
              </NextLink>
              <Button variant="solid" type="submit">
                Login
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}

export default index;
