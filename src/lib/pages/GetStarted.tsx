import { Box, Flex, VStack, Text } from '@chakra-ui/react';
import Fifth from 'lib/components/sections/getStarted/Fifth';
import First from 'lib/components/sections/getStarted/First';
import Fourth from 'lib/components/sections/getStarted/Fourth';
import Second from 'lib/components/sections/getStarted/Second';
import SideNav from 'lib/components/sections/getStarted/SideNav';
import Third from 'lib/components/sections/getStarted/Third';
import FormButton from 'lib/components/Utilities/FormButton';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function GetStarted() {
  const [step, setStep] = useState(0);
  type LoginModel = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginModel>();

  const onSubmit = (data: LoginModel) => {
    console.log({ data });
  };
  return (
    <Flex align="flex-start" minH="70rem" pos="relative">
      <SideNav step={step} />
      <Box w="70%" ml="auto">
        <VStack
          ml="4rem"
          mt={step === 0 ? '2rem' : step === 2 ? '3.5rem' : '2rem'}
          mx="3rem"
        >
          <Text
            fontSize="2rem"
            color={step === 0 ? 'brand.200' : 'brand.100'}
            textAlign="center"
            w="90%"
          >
            {step === 0
              ? 'Hi! Let’s help you get compensation for your cancelled flight'
              : step === 2
              ? 'Mandate form'
              : ''}
          </Text>

          <Box w="100%" mx="auto">
            <form
              onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}
            >
              <>
                {step === 0 && <First register={register} errors={errors} />}
                {step === 1 && <Second />}
                {step === 2 && <Third />}
                {step === 3 && <Fourth />}
                {step === 4 && <Fifth />}
              </>
              <FormButton step={step} setStep={setStep} />
            </form>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}

export default GetStarted;
