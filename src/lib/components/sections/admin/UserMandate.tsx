import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaFileUpload } from 'react-icons/fa';

function UserMandate() {
  return (
    <Box
      bg="white"
      borderRadius="8px"
      boxShadow="0px 9px 30px -6px rgba(0, 0, 0, 0.07)"
      w="100%"
      p="1.5rem 2rem"
    >
      <Text fontWeight="700" fontSize="1rem" mb="1.5rem">
        Document
      </Text>
      <Flex align="flex-start" color="brand.200" mb=".5rem">
        <Box w="60%" as="div">
          <Flex align="center">
            <Icon as={FaFileUpload} color="brand.100" />
            <Text
              fontWeight="400"
              fontSize=".9rem"
              color="brand.200"
              ml=".5rem"
            >
              mandate-form.pdf
            </Text>
          </Flex>
        </Box>
        <Box w="40%" as="div">
          <Flex justify="space-between" align="start">
            <Text fontWeight="400" fontSize=".9rem" color="brand.200">
              Feb, 23rd 2022
            </Text>
            <Icon as={BsThreeDotsVertical} cursor="pointer" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default UserMandate;
