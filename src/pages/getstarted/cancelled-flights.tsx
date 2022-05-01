import { Box, Flex, VStack, Text } from '@chakra-ui/react';
import Fifth from 'lib/components/sections/getStarted/Fifth';
import First from 'lib/components/sections/getStarted/First';
import Fourth from 'lib/components/sections/getStarted/Fourth';
import SideNav from 'lib/components/sections/getStarted/SideNav';
import Third from 'lib/components/sections/getStarted/Third';
import FormButton from 'lib/components/Utilities/FormButton';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ComplaintsModel } from 'types/api';
import { useOperationMethod } from 'react-openapi-client';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useToasts } from 'react-toast-notifications';
import Cancelled from 'lib/components/sections/getStarted/Cancelled';

const schema = yup.object().shape({
  departureLocation: yup.string().required('Departure Location is required'),
  finalDestination: yup.string().required('Final Destination is required'),
  departureDate: yup.string().required('Departure Date is required'),
  connectingFlights: yup.string().required('Connecting Flight is required'),
  arrivalTime: yup.string().required('Arrival Time is required'),
  notificationPeriod: yup.string().required('Notification Period is required'),
});
function GetStarted() {
  const [registerComplain, { data, loading, error }] =
    useOperationMethod('Complaintscreate');
  const router = useRouter();
  const [step, setStep] = useState(1);
  const { addToast } = useToasts();
  const id = 1;

  useEffect(() => {
    const isUser = localStorage.getItem('user') as unknown as string;
    if (isUser == null || undefined) {
      router.push('/user');
      return;
    }
  });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isValid },
  } = useForm<ComplaintsModel>({
    resolver: yupResolver(schema),
    defaultValues: {
      complaintsCategoryId: id as unknown as number,
    },
    mode: 'all',
  });

  const onSubmit = async (data: ComplaintsModel) => {
    data.connectingFlights = data.connectingFlights as boolean;
    console.log(data.connectingFlights);

    try {
      const result = await registerComplain(undefined, data);
      const value = result.data;
      if (value.status) {
        addToast('Successful', {
          appearance: 'success',
          autoDismiss: true,
        });
        return;
      }
      addToast(value.message, { appearance: 'error', autoDismiss: true });
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>
          Get Started |{' '}
          {router.asPath.replace(/getstarted|-/gi, ' ').replace('/ /', '')}
        </title>
      </Head>
      <Flex align="flex-start" minH={['35rem', '70rem']} pos="relative">
        <SideNav step={step} isValid={isValid} />
        <Box w={['100%', '70%']} ml="auto">
          <VStack
            mt={step === 0 ? '2rem' : step === 2 ? '3.5rem' : '2rem'}
            mx={['0', '3rem']}
          >
            <Text
              fontSize={['1.1rem', '2rem']}
              color={step === 0 ? 'brand.200' : 'brand.100'}
              textAlign="center"
              w={['85%', '90%']}
            >
              {step === 0
                ? `Hi! Let's help you get compensation for your ${router.asPath
                    .replace(/getstarted|-/gi, ' ')
                    .replace('/ /', '')
                    .slice(0, -1)}`
                : step === 2
                ? 'Mandate form'
                : ''}
            </Text>

            <Box w="100%" mx="auto">
              <form
                onSubmit={handleSubmit(onSubmit, (errors) =>
                  console.log(errors)
                )}
              >
                {step === 0 && <First register={register} errors={errors} />}
                {step === 1 && (
                  <Cancelled
                    register={register}
                    errors={errors}
                    control={control}
                  />
                )}
                {step === 2 && <Third />}
                {step === 3 && <Fourth />}
                {step === 4 && <Fifth />}
                <FormButton
                  step={step}
                  setStep={setStep}
                  isValid={isValid}
                  loading={loading}
                />
              </form>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}

export default GetStarted;
