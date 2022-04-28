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
import { UserContext } from 'lib/Utils/MainContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function TopNav() {
  const router = useRouter();
  const { user } = useContext(UserContext);
  return (
    <Flex
      align="center"
      h="6rem"
      bg="transparent"
      display={router.pathname === '/admin/settings' ? 'none' : 'flex'}
    >
      <Box as="div" w={['40%', '60%']}>
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
      <Flex
        align="center"
        w={['58%', '40%']}
        justify={['flex-start', 'flex-end']}
        flexDirection={['row-reverse', 'row']}
      >
        <Circle size="50px" overflow="hidden" bg="gray">
          <Image
            src="/assets/whoarewe.png"
            w="full"
            h="full"
            objectFit="cover"
          />
        </Circle>
        <Text
          fontWeight="600"
          fontSize="1rem"
          pl={['0', '.8rem']}
          pr={['.8rem', '0rem']}
        >
          {`Hi, ${user.firstName}`}
        </Text>
      </Flex>
    </Flex>
  );
}
