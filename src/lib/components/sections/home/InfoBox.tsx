import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';

function InfoBox() {
  return (
    <Box w="full" mt="4rem">
      <Box
        w="full"
        bgColor="brand.200"
        bgImage="url(/assets/lines.png)"
        h="80px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        pos="relative"
      >
        <Container maxW="90%" pos="absolute" bottom="0">
          <Flex
            bgColor="white"
            h="9rem"
            boxShadow="-3px 20px 30px rgba(0, 0, 0, 0.07)"
            borderRadius="5px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={20}
            py="1rem"
          >
            <Box width="full" display="flex" h="full" alignItems="center">
              <Text
                w="15%"
                color="brand.200"
                fontSize="1.3rem"
                fontWeight="800"
              >
                DO YOU KNOW THAT:
              </Text>
              <Box
                pos="relative"
                w="75%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="full"
                ml="2rem"
              >
                <Box pos="absolute" top="0" left="0">
                  <Image src="assets/quote.png" />
                </Box>
                <Text textAlign="center">
                  Since 2019, 1 billion flights has been cancelled "10k flights
                  were delayed"
                </Text>
                <Box
                  pos="absolute"
                  bottom="0"
                  right="0"
                  transform="scale(-1, 1)"
                >
                  <Image src="assets/quote.png" />
                </Box>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default InfoBox;
