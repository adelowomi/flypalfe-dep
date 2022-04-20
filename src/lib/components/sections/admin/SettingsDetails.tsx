import { Box, Flex, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { RiEditBoxLine } from 'react-icons/ri';
import EditAdmin from './Modals/EditAdmin';

function SettingsDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Box
      bg="white"
      borderRadius="8px"
      boxShadow="0px 9px 30px -6px rgba(0, 0, 0, 0.07)"
      w="100%"
      p="1.5rem 2rem"
    >
      <Flex align="flex-start" w="full">
        <Box w="80%">
          <Text fontWeight="700" fontSize="1rem" mb="1.5rem">
            Document
          </Text>
          <Flex align="flex-start" color="brand.200" mb=".5rem" w="100%">
            <HStack spacing="9rem" w="100%">
              <VStack as="div" align="flex-start" spacing={4}>
                <Text fontWeight="500" fontSize="1rem">
                  Username
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  Balogun
                </Text>
              </VStack>
              <VStack as="div" align="flex-start" spacing={4}>
                <Text fontWeight="500" fontSize="1rem">
                  Phone Number
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  08123456789
                </Text>
              </VStack>
              <VStack as="div" align="flex-start" spacing={4}>
                <Text fontWeight="500" fontSize="1rem">
                  Email Address
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  Balogun@gmail.com
                </Text>
              </VStack>
            </HStack>
          </Flex>
        </Box>
        <Box w="20%">
          <Flex justify="flex-end" align="start">
            <Icon
              as={RiEditBoxLine}
              color="brand.100"
              fontSize="1.5rem"
              cursor="pointer"
              onClick={() => openModal()}
            />
          </Flex>
        </Box>
      </Flex>
      <EditAdmin isOpen={isOpen} onClose={closeModal} />
    </Box>
  );
}

export default SettingsDetails;
