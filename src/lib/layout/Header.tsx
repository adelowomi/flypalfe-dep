import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import MenuItems from './Props/MenuItems';

function Header() {
  const router = useRouter();

  return (
    <Box
      w="full"
      bgColor="white"
      display={router.pathname.startsWith('/admin') ? 'none' : 'block'}
    >
      <Container maxW="90%">
        <Flex justify="space-between" alignItems="center" h="6rem">
          <Box cursor="pointer" w="126px">
            <NextLink href="/">
              <Image src="/assets/logoblue.png" w="full" h="auto" />
            </NextLink>
          </Box>
          <Box>
            <MenuItems
              text="Know your rights"
              url="/rights"
              color="brand.200"
              p="0 2rem .2rem 0"
            />
            <MenuItems
              text="About"
              url="/about"
              color="brand.200"
              p="0 2rem .2rem 0"
            />
            <MenuItems
              text="FAQs"
              url="/faqs"
              color="brand.200"
              p="0 2rem .2rem 0"
            />
          </Box>
          <Box>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image src="/assets/nig.png" h="auto" w="auto" />
                <Text pl=".3rem">NGN</Text>
              </Flex>
              <NextLink href="/contact">
                <Button
                  variant="outline"
                  cursor="pointer"
                  ml="5rem"
                  display={router.pathname === '/contact' ? 'none' : 'initial'}
                >
                  Contact us
                </Button>
              </NextLink>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
