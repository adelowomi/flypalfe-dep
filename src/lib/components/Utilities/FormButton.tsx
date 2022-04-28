import { Box, Button, Flex, Text, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { saveAs } from 'file-saver';

function FormButton({
  step,
  setStep,
  isValid,
}: {
  step: number;
  setStep: any;
  isValid: boolean;
}) {
  const handleProceed = () => {
    setStep((cur: number) => cur + 1);
  };
  const saveFile = () => {
    saveAs('../assets/dummy.pdf', 'mandate.pdf');
    setStep(3);
  };
  return (
    <Box
      w={[step === 2 ? '90%' : '100%', step === 2 ? '90%' : '60%']}
      mx="auto"
    >
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
          ml={'auto'}
          mr={['auto', '0']}
          type={step === 4 ? 'submit' : 'button'}
          disabled={step == 0 ? isValid : !isValid}
          onClick={step === 2 ? saveFile : handleProceed}
        >
          {step === 3 ? 'Submit' : step === 2 ? 'Download' : 'Proceed'}
        </Button>
      </Flex>
    </Box>
  );
}

export default FormButton;
