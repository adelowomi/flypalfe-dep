import { Box, Flex, Heading, VStack, Text, Image } from '@chakra-ui/react';
import 'animate.css';

function AboutTempltr() {
  return (
    <Box height="auto" m="2rem 0 4.2rem">
      <Box h="auto" py="2rem" bgColor="white">
        <Flex
          width="90%"
          mx="auto"
          height="fit-content"
          align="center"
          position="relative"
        >
          <VStack
            alignItems="flex-start"
            spacing="10"
            width="full"
            height="full"
            ml="1rem"
            pr="5rem"
          >
            <Heading fontSize="2.5rem" color="brand.200" pos="relative">
              Your satisfaction is our priority
            </Heading>
            <Text fontSize="1rem" fontWeight="regular" w="95%">
              FlyPal has a mission to put smiles on the faces of all passengers
              by helping to solve all their flying challenges. All flying
              passengers must know their rights and we have positioned ourselves
              as the catalyst to disseminate these rights and help get all
              compensation that they are entitled to. You can find some of our
              services below.
            </Text>
          </VStack>
          <VStack
            alignItems="flex-start"
            height="full"
            width="full"
            pos="relative"
          >
            <Flex align="center" zIndex="2">
              <Box>
                <Box
                  bgColor="#c4c4c4"
                  w="247px"
                  h="265px"
                  borderRadius="10px"
                  overflow="hidden"
                  mb="2rem"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                >
                  <Image
                    src="assets/whoarewe.png"
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                </Box>
                <Box
                  bgColor="#c4c4c4"
                  w="247px"
                  h="213px"
                  borderRadius="10px"
                  overflow="hidden"
                  className="animate__animated animate__fadeInUp animate__delay-2s"
                >
                  <Image
                    src="assets/whoarewe.png"
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                </Box>
              </Box>
              <Box ml="2rem">
                <Box
                  bgColor="#c4c4c4"
                  w="227px"
                  h="353px"
                  borderRadius="10px"
                  overflow="hidden"
                  mt="3rem"
                  className="animate__animated animate__fadeInRight animate__delay-2s"
                >
                  <Image
                    src="assets/whoarewe.png"
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                </Box>
              </Box>
            </Flex>
            <Box pos="absolute" top="20%" left="-60px" zIndex="3">
              <Image src="/assets/dots.png" />
            </Box>
            <Box pos="absolute" bottom="-19%" right="15%" zIndex="1">
              <Box
                width="370px"
                height="370px"
                border="100px solid rgba(5, 156, 159, 0.36)"
                borderRadius="50%"
              />
            </Box>
            <Box pos="absolute" top="-5%" right="32%" zIndex="3">
              <Box
                width="100px"
                height="100px"
                border="30px solid rgba(252, 193, 63, 0.61)"
                borderRadius="50%"
              />
            </Box>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default AboutTempltr;
