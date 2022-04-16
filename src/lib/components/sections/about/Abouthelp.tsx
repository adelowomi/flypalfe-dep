import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import Cards from 'lib/layout/Props/Cards';
import { MdFlight, MdCardTravel, MdWifiProtectedSetup } from 'react-icons/md';
import { GiWorld } from 'react-icons/gi';

function Abouthelp() {
  return (
    <Box
      w="full"
      bgColor="white"
      //   bgImage="url(/assets/lines2.png)"
      h="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py="5rem"
    >
      <Container maxW="90%">
        <Box w="full">
          <VStack w="60%" mx="auto">
            <Heading
              fontSize="2.5rem"
              color="brand.200"
              fontWeight="700"
              mb={4}
            >
              Our services
            </Heading>
          </VStack>
          <Grid templateColumns="repeat(5, 1fr)" gap="3rem" mt="3rem">
            <Cards
              icon={MdFlight}
              title="Cancelled flights"
              note="Flight cancelled with little notice? You could be entitled to up to ₦50,520 compensation on top of your refund."
            />
            <Cards
              icon={MdFlight}
              title="Flight Delayed"
              note="Flight cancelled with little notice? You could be entitled to up to ₦50,520 compensation on top of your refund."
            />
            <Cards
              icon={GiWorld}
              title="Denied Boarding"
              note="Flight cancelled with little notice? You could be entitled to up to ₦50,520 compensation on top of your refund."
            />
            <Cards
              icon={MdCardTravel}
              title="Baggage claim"
              note="Flight cancelled with little notice? You could be entitled to up to ₦50,520 compensation on top of your refund."
            />
            <Cards
              icon={MdWifiProtectedSetup}
              title="Refund"
              note="Flight cancelled with little notice? You could be entitled to up to ₦50,520 compensation on top of your refund."
            />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Abouthelp;
