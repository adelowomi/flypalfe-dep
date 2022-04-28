import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

import NextLink from 'next/link';
import { useRouter } from 'next/router';
import MenuItems from './Props/MenuItems';

function Footer() {
  const router = useRouter();
  return (
    <Box
      w="full"
      bgColor="brand.200"
      display={
        router.pathname.startsWith('/admin') ||
        router.pathname.startsWith('/user')
          ? 'none'
          : 'block'
      }
    >
      <Container maxW="90%" pt="2rem">
        <Flex
          justify="space-between"
          alignItems={['center', 'center']}
          minH="6rem"
          flexDirection={['column', 'row']}
        >
          <Box>
            <NextLink href="/">
              <Image src="/assets/logowhite.png" w="194px" h="45px" />
            </NextLink>
          </Box>
          <Flex
            textAlign={['center', 'right']}
            flexDirection={['column', 'row']}
            my={['2rem', '0']}
            h={['10rem', 'unset']}
            justifyContent={['space-between', 'unset']}
          >
            <MenuItems
              text="Know your rights"
              url="/rights"
              color="white"
              p={['0', '0 0 0 6rem']}
            />
            <MenuItems
              text="Terms and Conditions"
              url=""
              color="white"
              p={['0', '0 0 0 6rem']}
            />
            <MenuItems
              text="Privacy Policy"
              url="/rights"
              color="white"
              p={['0', '0 0 0 6rem']}
            />
            <MenuItems
              text="Cookies"
              url="/rights"
              color="white"
              p={['0', '0 0 0 6rem']}
            />
          </Flex>
        </Flex>
        <Divider />
        <Flex
          justify={['', 'space-between']}
          alignItems="center"
          minH="6rem"
          flexDirection={['column', 'row']}
          mt={['1rem', '0']}
        >
          <Text fontSize=".9rem" color="white">
            Copyright &copy; 2022 FlyPal
          </Text>
          <HStack spacing={5} mt={['1rem', '0']}>
            <FaFacebookF fontSize=".9rem" color="white" />
            <FaTwitter fontSize=".9rem" color="white" />
            <FaInstagram fontSize=".9rem" color="white" />
            <FaLinkedinIn fontSize=".9rem" color="white" />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
