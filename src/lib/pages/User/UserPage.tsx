import { Box, Flex, Image, VStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Verify from './Verify';

function UserPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [verify, setVerify] = useState(false);
  const toggleForms = () => {
    setIsLogin(!isLogin);
  };
  return (
    <Flex
      w="100%"
      minH="100vh"
      bgColor="brand.800"
      bgImage="url(/assets/lines2.png)"
    >
      <Link href={'/'}>
        <Flex w="190px" pos="absolute" left="4rem" top="2rem" cursor="pointer">
          <Image src="/assets/logoblue.png" w="full" />
        </Flex>
      </Link>
      <Box
        w="60%"
        display={['none', 'flex']}
        justifyContent="center"
        alignItems="center"
      >
        <Image src="/assets/admin.png" />
      </Box>
      <Box
        w={['100%', '40%']}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box w={['full', '80%']} mr="auto">
          <VStack justify="center">
            <Box textAlign="center" mt="3rem !important">
              <Text fontWeight="600" fontSize="2rem">
                Welcome!
              </Text>
              <Text>
                {' '}
                {isLogin
                  ? 'Enter details to login'
                  : 'Enter details to Register'}
              </Text>
            </Box>
          </VStack>
          {isLogin ? (
            <Login toggleForms={toggleForms} />
          ) : verify ? (
            <Verify />
          ) : (
            <Register toggleForms={toggleForms} setVerify={setVerify} />
          )}
        </Box>
      </Box>
    </Flex>
  );
}

export default UserPage;
