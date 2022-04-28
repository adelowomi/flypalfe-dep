import {
  Flex,
  VStack,
  SimpleGrid,
  GridItem,
  Text,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useOperationMethod } from 'react-openapi-client';
import { useToasts } from 'react-toast-notifications';
import { SecondaryInput } from 'lib/components/Utilities/SecondaryInput';
import { UserresetinitiateEmailParameters } from 'types/api';
import { Parameters } from 'openapi-client-axios';

const schema = yup.object().shape({
  email: yup.string().required('Email is required'),
});

function InitiateEmail({ toggleForms }: { toggleForms: any }) {
  const [initiateEmail, { data, loading, error }] = useOperationMethod(
    'Userresetinitiate{email}'
  );
  const { addToast } = useToasts();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<UserresetinitiateEmailParameters>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const onSubmit = async (data: UserresetinitiateEmailParameters) => {
    const params: Parameters = {
      email: data.email as string,
    };
    try {
      const result = await (await initiateEmail(params)).data;
      console.log(data);
      console.log({ result });
      if (result.status) {
        toggleForms();
        addToast(result.message, { appearance: 'success', autoDismiss: true });
        return;
      }
      addToast(result.message, { appearance: 'error', autoDismiss: true });
      return;
    } catch (error) {
      console.log(error);
      // addToast(error, { appearance: 'error', autoDismiss: true });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <VStack
        background="rgba(223, 248, 249, .2)"
        boxShadow={['0', '-3px 20px 30px rgba(0, 0, 0, 0.07)']}
        borderRadius="5px"
        w="100%"
        mx="auto"
        p="3rem"
        mt="0rem"
      >
        <SimpleGrid columns={2} rowGap="3" columnGap="4" w="100%">
          <GridItem colSpan={2}>
            <SecondaryInput<UserresetinitiateEmailParameters>
              register={register}
              name="email"
              error={errors.email}
              defaultValue=""
              label="Your Email Address"
              type="text"
              placeholder=""
            />
          </GridItem>
        </SimpleGrid>
        <Flex
          justify="flex-end"
          align="center"
          mt="2rem !important"
          w="100%"
          flexDirection={['column', 'row']}
        >
          <Button
            variant="solid"
            type="submit"
            isLoading={loading}
            disabled={!isValid}
            mt={['2rem', '0']}
            w="full"
          >
            Proceed
          </Button>
        </Flex>
      </VStack>
    </form>
  );
}

export default InitiateEmail;
