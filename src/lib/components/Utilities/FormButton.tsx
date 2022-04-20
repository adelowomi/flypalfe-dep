import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

function FormButton({ step, setStep }: { step: number; setStep: any }) {
  const handleProceed = () => {
    setStep((cur: number) => cur + 1);
  };
  return (
    <Box w={step === 2 ? '90%' : '60%'} mx="auto">
      <Flex
        w="full"
        mt="2rem"
        mb="4rem"
        align="center"
        display={step >= 4 ? 'none' : 'flex'}
      >
        <Text
          ml="auto"
          fontSize="1.1rem"
          fontWeight="600"
          color="brand.100"
          cursor="pointer"
          display={step === 0 ? 'none' : 'block'}
          onClick={() => setStep(step - 1)}
        >
          Back
        </Text>
        <Button
          variant="solid"
          bgColor="brand.200"
          ml="auto"
          type={step === 4 ? 'submit' : 'button'}
          mr="2rem"
          display={step === 2 ? 'block' : 'none'}
        >
          Download
        </Button>
        <Button
          variant="solid"
          ml={step === 2 ? '0' : 'auto'}
          type={step === 4 ? 'submit' : 'button'}
          onClick={() => handleProceed()}
        >
          {step === 3 ? 'Submit' : 'Proceed'}
        </Button>
      </Flex>
    </Box>
  );
}

export default FormButton;
