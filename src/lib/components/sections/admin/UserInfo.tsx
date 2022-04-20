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

function UserInfo({ display, item }: { display: string; item?: any }) {
  return (
    <Box
      bg="white"
      borderRadius="8px"
      boxShadow="0px 9px 30px -6px rgba(0, 0, 0, 0.07)"
      w="100%"
      p="1.5rem 2rem"
    >
      <Flex align="flex-start">
        <Box w="60%" as="div">
          <HStack spacing="3rem">
            <Circle
              size="120px"
              overflow="hidden"
              bg={shadeColor('#007F82', 0.1)}
              alignItems="flex-end"
            >
              <Icon as={FaUser} color="brand.100" fontSize="90px" />
            </Circle>
            <HStack align="flex-start" spacing="3rem">
              <VStack as="div" align="flex-start" spacing={1}>
                <Text fontWeight="700" fontSize="1rem">
                  Personal information
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.name}
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {item.address}
                </Text>
              </VStack>
              <VStack as="div" align="flex-start" spacing={1} display={display}>
                <Text fontWeight="700" fontSize="1rem">
                  Complaints
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  Cancelled flight
                </Text>
              </VStack>
            </HStack>
          </HStack>
        </Box>
        <Box w="40%" as="div" display={display}>
          <HStack spacing="1.8rem" mt="1.5rem" w="80%" mx="auto">
            <Button variant="outline" borderColor="brand.100">
              Resolve
            </Button>
            <Button
              variant="outline"
              borderColor="red"
              color="red"
              _hover={{ color: 'white', bgColor: 'red' }}
            >
              Resolve
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default UserInfo;
