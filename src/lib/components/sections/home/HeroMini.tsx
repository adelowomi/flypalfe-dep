import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Image,
  background,
} from '@chakra-ui/react';
import React from 'react';

function HeroMini() {
  return (
    <Box overflowX="hidden" h="auto">
      <Flex
        width="full"
        height="fit-content"
        my="17.8rem"
        align="center"
        position="relative"
      >
        <VStack
          alignItems="flex-start"
          height="full"
          width="full"
          pos="relative"
        >
          <Box
            w="full"
            height="525px"
            bg="brand.200"
            borderRadius="0 10px 10px 0"
            overflow="hidden"
            zIndex="2"
          >
            <Image src="/assets/whoarewe.png" objectFit="cover" height="full" />
          </Box>
          <Box pos="absolute" top="-157px" right="15px" zIndex="3">
            <Image src="/assets/dots.png" />
          </Box>
          <Box pos="absolute" bottom="-43px" right="-38px" zIndex="3">
            <Box
              width="100px"
              height="100px"
              border="30px solid rgba(5, 156, 159, 0.36)"
              borderRadius="50%"
            />
          </Box>
          <Box pos="absolute" top="-50%" left="-533px" zIndex="3">
            <Box
              width="1000px"
              height="1000px"
              border="135px solid rgba(5, 156, 159, 0.36)"
              borderRadius="50%"
            />
          </Box>
          <Box pos="absolute" top="-50%" left="-533px" zIndex="1">
            <Box
              width="1000px"
              height="1000px"
              border="135px solid #1B345B"
              borderRadius="50%"
            />
          </Box>
        </VStack>
        <VStack
          alignItems="flex-start"
          spacing="10"
          width="full"
          height="full"
          ml="6rem"
          pr="5rem"
        >
          <Heading
            fontSize="2.5rem"
            color="brand.200"
            pos="relative"
            _after={{
              position: 'absolute',
              width: '70%',
              height: '12px',
              backgroundColor: 'brand.500',
              bottom: '-12px',
              left: '0',
              content: '""',
            }}
          >
            Who we are
          </Heading>
          <Text fontSize="1rem" fontWeight="regular" w="95%">
            FlyPal has a mission to put smiles on the faces of all passengers by
            helping to solve all their flying challenges. All flying passengers
            must know their rights and we have positioned ourselves as the
            catalyst to disseminate these rights and help get all compensation
            that they are entitled to. <br />
            <br />
            Between reaching out to airline companies regarding the
            compensations available for passengers. We also educate the
            passengers on the laws governing these compensations.
          </Text>
          <Box
            pos="absolute"
            bottom="-80px"
            right="-110px"
            zIndex="-2"
            bgColor="brand.500"
            w="220px"
            h="220px"
            borderRadius="50%"
          />
        </VStack>
      </Flex>
    </Box>
  );
}

export default HeroMini;
