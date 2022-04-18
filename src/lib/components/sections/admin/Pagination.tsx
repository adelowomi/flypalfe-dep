import { Flex, Icon, Square, Text } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Pagination() {
  return (
    <Flex align="center" justify="flex-end" p="0 2rem">
      <Text fontSize="14px" fontFamily="Poppins" color="black" mr="1rem">
        42 items
      </Text>
      <Flex align="center">
        <Square
          size="30px"
          borderRadius="2px"
          boxShadow="0px 1px 4px rgba(0, 0, 0, 0.14)"
          bgColor="#E2E8F0;"
          cursor="pointer"
        >
          <Icon as={FiChevronLeft} color="#323232" fontSize="1.2rem" />
        </Square>
        <Text fontSize="14px" fontFamily="Poppins" px="1.5rem" color="black">
          1 of 3
        </Text>
        <Square
          size="30px"
          borderRadius="2px"
          boxShadow="0px 1px 4px rgba(0, 0, 0, 0.14)"
          bgColor="#E2E8F0;"
          cursor="pointer"
        >
          <Icon as={FiChevronRight} color="#323232" fontSize="1.2rem" />
        </Square>
      </Flex>
    </Flex>
  );
}

export default Pagination;
