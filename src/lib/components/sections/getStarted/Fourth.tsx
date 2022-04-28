import {
  Box,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import { BsFillCloudUploadFill } from 'react-icons/bs';

function Fourth() {
  return (
    <Box w={['full', '60%']} mx="auto">
      <SimpleGrid
        columns={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt="2rem !important"
        background={['unset', '#F4F8FB']}
        borderRadius="10px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <HStack justify="space-between" spacing={6}>
            <FormControl>
              <FormLabel color="brand.100" fontSize="1.1rem">
                Upload your signed and scanned mandate form
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="brand.100"
                  children={<BsFillCloudUploadFill size="1.8rem" />}
                />
                <Input p="1rem 4rem" type="file" />
                <InputRightElement
                  pointerEvents="none"
                  color="brand.100"
                  position="absolute"
                  bgColor="white"
                  width={['36%', '27%']}
                  height="75%"
                  top="10px"
                  left="56px"
                />
              </InputGroup>
            </FormControl>
          </HStack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default Fourth;
