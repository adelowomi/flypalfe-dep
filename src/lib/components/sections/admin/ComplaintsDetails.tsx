import {
  Box,
  Button,
  Circle,
  color,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
const moment = require('moment');

function ComplaintsDetails({ item }: { item: any }) {
  return (
    <Box
      bg="white"
      borderRadius="8px"
      boxShadow="0px 9px 30px -6px rgba(0, 0, 0, 0.07)"
      w="100%"
      p="1.5rem 2rem"
    >
      <Text fontWeight="700" fontSize="1rem" mb="1.5rem">
        Flight details
      </Text>
      <Flex
        align="flex-start"
        color="brand.200"
        flexDirection={['column', 'row']}
      >
        <Box w={['full', '60%']} as="div">
          <HStack
            align="flex-start"
            spacing="3rem"
            flexDirection={['column', 'row']}
          >
            <VStack as="div" align="flex-start" spacing={[1, 4]}>
              <Text fontWeight="500" fontSize="1rem">
                Departing from?
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                {item.departureLocation}
              </Text>
              <Text fontWeight="500" fontSize="1rem">
                Final destination
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                {item.finalDestination}
              </Text>
            </VStack>
            <VStack
              as="div"
              align="flex-start"
              spacing={[1, 4]}
              my={['1rem !important', '0 !important']}
              marginInlineStart={['0 !important', '3rem !important']}
            >
              <Text fontWeight="500" fontSize="1rem">
                Do you have any connecting flights?
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                {item.connectingFlights == true ? 'Yes' : 'No'}
              </Text>
              <Text fontWeight="500" fontSize="1rem">
                Departure date
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                {moment(item.departureDate).format('MMM Do YYYY')}
              </Text>
            </VStack>
          </HStack>
        </Box>
        <Box w={['full', '40%']} as="div">
          <VStack as="div" align="flex-start" spacing={[1, 4]}>
            <Text fontWeight="500" fontSize="1rem">
              Sorry for the cancellation. When did you arrive at the airport?
            </Text>
            <Text fontWeight="400" fontSize=".9rem" color="brand.200">
              {item.arrivalTime}
            </Text>
            <Text fontWeight="500" fontSize="1rem">
              How far in advance did the airline notify you of the cancellation?
            </Text>
            <Text fontWeight="400" fontSize=".9rem" color="brand.200">
              {item.notificationPeriod}
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default ComplaintsDetails;
