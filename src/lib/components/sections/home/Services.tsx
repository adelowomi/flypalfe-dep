import {
  Box,
  Circle,
  Container,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

function Services() {
  return (
    <Box
      w="full"
      bgColor="brand.200"
      bgImage="url(/assets/lines.png)"
      h="400px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxW="90%">
        <Box w="full">
          <Grid templateColumns="repeat(3, 1fr)" gap="7rem">
            <GridItem w="100%">
              <Flex
                flexDirection="column"
                justifyContent="center"
                align="center"
              >
                <Circle size="80px" bg="brand.700" color="brand.600" mb={4}>
                  <FaClipboardList fontSize="2rem" />
                </Circle>
                <Box>
                  <Text
                    fontSize="1.1rem"
                    fontWeight="600"
                    textAlign="center"
                    color="white"
                  >
                    Enter flight details
                  </Text>
                  <Text
                    fontSize="1rem"
                    fontWeight="400"
                    textAlign="center"
                    color="white"
                  >
                    Submit your flight details. And we check if the airlines’
                    owes you money.
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%">
              <Flex
                flexDirection="column"
                justifyContent="center"
                align="center"
              >
                <Circle size="80px" bg="brand.700" color="brand.600" mb={4}>
                  <FiEdit fontSize="2rem" />
                </Circle>
                <Box>
                  <Text
                    fontSize="1.1rem"
                    fontWeight="600"
                    textAlign="center"
                    color="white"
                  >
                    We work on your behalf
                  </Text>
                  <Text
                    fontSize="1rem"
                    fontWeight="400"
                    textAlign="center"
                    color="white"
                  >
                    Our claim experts do the rest of the work (ask for
                    compensation) on behalf of you.
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%">
              <Flex
                flexDirection="column"
                justifyContent="center"
                align="center"
              >
                <Circle size="80px" bg="brand.700" color="brand.600" mb={4}>
                  <MdAccountBalanceWallet fontSize="2rem" />
                </Circle>
                <Box>
                  <Text
                    fontSize="1.1rem"
                    fontWeight="600"
                    textAlign="center"
                    color="white"
                  >
                    Get paid in your Bank
                  </Text>
                  <Text
                    fontSize="1rem"
                    fontWeight="400"
                    textAlign="center"
                    color="white"
                  >
                    Your compensation will be directly transferred to your bank
                    account.
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
