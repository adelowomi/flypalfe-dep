import {
  Text,
  Circle,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Box,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function TopNav() {
  return (
    <Flex align="center" h="6rem" bg="transparent">
      <Box as="div" w="60%">
        <InputGroup w="100">
          <Input
            placeholder="Searching"
            type="search"
            borderRadius="8px"
            border="1px solid rgba(0, 0, 0, 0.04)"
            bgColor="#DFF8F9"
            height="42px"
            _placeholder={{ color: '#059C9F' }}
          />
          <InputRightElement
            h="42px"
            w="42px"
            children={<AiOutlineSearch color="brand.100" />}
          />
        </InputGroup>
      </Box>
      <Flex align="center" w="40%" justify="flex-end">
        <Circle size="50px" overflow="hidden" bg="gray">
          <Image
            src="../assets/whoarewe.png"
            w="full"
            h="full"
            objectFit="cover"
          />
        </Circle>
        <Text fontWeight="600" fontSize="1rem" pl=".8rem">
          Hi, Balogun
        </Text>
      </Flex>
    </Flex>
  );
}
