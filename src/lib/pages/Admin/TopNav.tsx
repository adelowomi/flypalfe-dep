import {
  Text,
  Circle,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import { UserContext } from 'lib/Utils/MainContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Parameters } from 'openapi-client-axios';
import { useContext, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useOperationMethod } from 'react-openapi-client';
import { UserView } from 'types/api';

export default function TopNav() {
  const router = useRouter();
  const { admin, user } = useContext(UserContext);

  const [searchUser, { data, loading, error }] =
    useOperationMethod('Usersearch{search}');

  const [searchResult, setSearchResult] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const userSearch = async (search: string) => {
    const params: Parameters = {
      search,
    };
    try {
      const result = (await searchUser(params)).data;
      setSearchResult(result.data);
      openModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex
      align="center"
      h="6rem"
      bg="transparent"
      display={router.pathname === '/admin/settings' ? 'none' : 'flex'}
    >
      <Box as="div" w={['40%', '60%']} pos="relative">
        <InputGroup w="100" role="group">
          <Input
            placeholder="Searching"
            type="search"
            borderRadius="8px"
            border="1px solid rgba(0, 0, 0, 0.04)"
            bgColor="#DFF8F9"
            height="42px"
            _placeholder={{ color: '#059C9F' }}
            onChange={(e) => userSearch(e.target.value)}
          />
          <InputRightElement
            h="42px"
            w="42px"
            children={<AiOutlineSearch color="brand.100" />}
          />
          <Modal
            motionPreset="slideInBottom"
            onClose={() => setIsOpen(!isOpen)}
            isOpen={isOpen}
          >
            <ModalOverlay />
            <ModalContent
              py="1.5rem"
              borderRadius="0"
              px="2rem"
              maxW={['91%', '45%']}
              mt="4.75rem"
              left={['0', '-75px']}
              onClick={() => setIsOpen(!isOpen)}
            >
              <ModalBody>
                {searchResult
                  ? searchResult.map((x: UserView) => {
                      return (
                        <Link href={'/admin/users/' + x.id} key={x.id} passHref>
                          <Flex
                            align="center"
                            justify="space-between"
                            mb="1rem"
                          >
                            <Box cursor="pointer">
                              <Text fontWeight="500" color="brand.200">
                                {x.fullName}
                              </Text>
                              <Text fontSize=".6rem">{x.email}</Text>
                            </Box>
                            <Text fontSize=".6rem">{`/users/${x.id}`}</Text>
                          </Flex>
                        </Link>
                      );
                    })
                  : null}
              </ModalBody>
            </ModalContent>
          </Modal>
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
          {`Hi, ${admin ? admin.firstName : user ? user.firstName : ''}`}
        </Text>
      </Flex>
    </Flex>
  );
}
