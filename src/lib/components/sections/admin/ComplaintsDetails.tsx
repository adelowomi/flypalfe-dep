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
import shadeColor from 'lib/components/Utilities/Functions/ColorShade';
import { FaUser } from 'react-icons/fa';

function ComplaintsDetails() {
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
      <Flex align="flex-start" color="brand.200">
        <Box w="60%" as="div">
          <HStack align="flex-start" spacing="3rem">
            <VStack as="div" align="flex-start" spacing={4}>
              <Text fontWeight="500" fontSize="1rem">
                Departing from?
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                Port Harcourt
              </Text>
              <Text fontWeight="500" fontSize="1rem">
                Final destination
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                Lagos
              </Text>
            </VStack>
            <VStack as="div" align="flex-start" spacing={4}>
              <Text fontWeight="500" fontSize="1rem">
                Do you have any connecting flights?
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                No
              </Text>
              <Text fontWeight="500" fontSize="1rem">
                Departure date
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                Feb, 23rd 2022
              </Text>
            </VStack>
          </HStack>
        </Box>
        <Box w="40%" as="div">
          <VStack as="div" align="flex-start" spacing={4}>
            <Text fontWeight="500" fontSize="1rem">
              Sorry for the cancellation. When did you arrive at the airport?
            </Text>
            <Text fontWeight="400" fontSize=".9rem" color="brand.200">
              0 - 1 hour early
            </Text>
            <Text fontWeight="500" fontSize="1rem">
              How far in advance did the airline notify you of the cancellation?
            </Text>
            <Text fontWeight="400" fontSize=".9rem" color="brand.200">
              0 - 1 hour early
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default ComplaintsDetails;
