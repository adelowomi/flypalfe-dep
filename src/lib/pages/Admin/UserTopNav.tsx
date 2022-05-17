import { Text, Circle, Flex, Image } from '@chakra-ui/react';
import { UserContext } from 'lib/Utils/MainContext';
import { useContext, useEffect, useRef, useState } from 'react';

export default function UserTopNav() {
  const { admin, user } = useContext(UserContext);

  return (
    <Flex align="center" h="6rem" bg="transparent" justify="space-between">
      <Text fontWeight="600">Welcome</Text>
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
