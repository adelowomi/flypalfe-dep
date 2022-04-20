import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import Cards from 'lib/layout/Props/Cards';
import { MdFlight, MdCardTravel, MdWifiProtectedSetup } from 'react-icons/md';
import { GiWorld } from 'react-icons/gi';

function Help() {
  return (
    <Box
      w="full"
      bgColor="brand.800"
      bgImage="url(/assets/lines2.png)"
      h="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py="5rem"
    >
      <Container maxW="90%">
        <Box w="full">
          <VStack w="60%" mx="auto">
            <Text fontSize=".8rem" textAlign="center" color="brand.100">
              WHY CHOOSE FLYPAL?
            </Text>
            <Heading
              fontSize="2.5rem"
              color="brand.200"
              fontWeight="700"
              mb={4}
            >
              How can we help?
            </Heading>
            <Text fontSize="1rem" color="brand.200" textAlign="center" w="90%">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </VStack>
          <Grid templateColumns="repeat(5, 1fr)" gap="3rem" mt="3rem">
            <Cards
              icon={MdFlight}
              title="cancelled flights"
              note="Flight cancelled with little notice? You could be entitled to up to ₦50,520 compensation on top of your refund."
            />
            <Cards
              icon={MdFlight}
              title="flight delayed"
              note="Flight cancelled with little notice? You could be entitled to up to ₦50,520 compensation on top of your refund."
            />
            <Cards
              icon={GiWorld}
              title="denied boarding"
              note="Flight cancelled with little notice? You could be entitled to up to ₦50,520 compensation on top of your refund."
            />
            <Cards
              icon={MdCardTravel}
              title="baggage claim"
              note="Flight cancelled with little notice? You could be entitled to up to ₦50,520 compensation on top of your refund."
            />
            <Cards
              icon={MdWifiProtectedSetup}
              title="refund"
              note="Flight cancelled with little notice? You could be entitled to up to ₦50,520 compensation on top of your refund."
            />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Help;
