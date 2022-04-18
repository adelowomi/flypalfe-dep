import { VStack, Text, Box, Flex } from '@chakra-ui/react';
import SideNavLinks from 'lib/layout/Props/SideNavLinks';
import React from 'react';

type Steps = {
  step: number;
};
function SideNav({ step }: Steps) {
  return (
    <Box
      w="30%"
      bgColor="brand.100"
      height="auto"
      bgImage="assets/getstart.png"
      bgPos="bottom"
      bgRepeat="no-repeat"
      pos="absolute"
      h="100%"
    >
      <Flex w="full" mt="6rem" justify="center">
        <VStack spacing={14} alignItems="flex-start">
          <SideNavLinks
            color={step >= 0 ? 'brand.500' : 'white'}
            content={step >= 1 ? '"🙂"' : '""'}
            circle={step >= 0 ? '5px solid #FCC13F' : '5px solid white'}
            line={step >= 0 ? '3px solid #FCC13F' : '3px solid white'}
            name="Personal information"
          />
          <SideNavLinks
            color={step >= 1 ? 'brand.500' : 'white'}
            content={step >= 2 ? '"🙂"' : '""'}
            circle={step >= 1 ? '5px solid #FCC13F' : '5px solid white'}
            line={step >= 1 ? '3px solid #FCC13F' : '3px solid white'}
            name="Flight details"
          />
          <SideNavLinks
            color={step >= 2 ? 'brand.500' : 'white'}
            content={step >= 4 ? '"🙂"' : '""'}
            circle={step >= 2 ? '5px solid #FCC13F' : '5px solid white'}
            line={step >= 2 ? '3px solid #FCC13F' : '3px solid white'}
            name="Document"
          />
          <SideNavLinks
            color={step >= 4 ? 'brand.500' : 'white'}
            content={step >= 4 ? '"🙂"' : '""'}
            circle={step >= 4 ? '5px solid #FCC13F' : '5px solid white'}
            line={step >= 4 ? '0' : '0'}
            name="Finsh"
          />
        </VStack>
      </Flex>
    </Box>
  );
}

export default SideNav;
