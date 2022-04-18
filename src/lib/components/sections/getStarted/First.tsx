import {
  Box,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
} from '@chakra-ui/react';
import { PrimaryInput } from 'lib/components/Utilities/PrimaryInput';
import { UseFormRegister } from 'react-hook-form';

type LoginModel = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

function First({
  register,
  errors,
}: {
  register: UseFormRegister<LoginModel>;
  errors: any;
}) {
  return (
    <Box w="60%" mx="auto">
      <SimpleGrid
        column={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt="2rem !important"
        background="rgba(226, 232, 240, 0.3)"
        borderRadius="5px"
        p="2rem"
      >
        <PrimaryInput<LoginModel>
          register={register}
          name={'email'}
          error={errors.email}
          defaultValue={''}
          label="Email"
          placeholder="chigozie@gmail.com"
        ></PrimaryInput>

        <PrimaryInput<LoginModel>
          register={register}
          name={'firstName'}
          error={errors.firstName}
          defaultValue={''}
          label="First Name"
          placeholder="Chigozie"
        ></PrimaryInput>
        <PrimaryInput<LoginModel>
          register={register}
          name={'lastName'}
          error={errors.lastName}
          defaultValue={''}
          label="Last Name"
          placeholder="Jessie"
        ></PrimaryInput>
      </SimpleGrid>
    </Box>
  );
}

export default First;
