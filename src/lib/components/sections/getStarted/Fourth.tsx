import {
  Box,
  Button,
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
import React, { useState } from 'react';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import { Widget } from '@uploadcare/react-widget';

function Fourth({
  canSubmit,
  setCanSubmit,
}: {
  canSubmit: any;
  setCanSubmit: any;
}) {
  const onChange = (info: any) => {
    setCanSubmit(true);
    console.log('Upload completed:', info);
  };
  return (
    <Box w={['full', '70%']} mx="auto">
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
              <Widget
                publicKey="fda3a71102659f95625f"
                id="file"
                onChange={onChange}
              />
            </FormControl>
          </HStack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default Fourth;
