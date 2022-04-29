import { Box, GridItem, SimpleGrid, VStack } from '@chakra-ui/react';
import { GiAirplaneArrival, GiAirplaneDeparture } from 'react-icons/gi';
import { BiCalendarEvent } from 'react-icons/bi';
import { PrimaryInput } from 'lib/components/Utilities/PrimaryInput';
import { ComplaintsModel } from 'types/api';
import { RadioButton } from 'lib/components/Utilities/RadioButton';
import RadioInput from 'lib/components/Utilities/RadioInput';
import { useRouter } from 'next/router';

function Cancelled({
  register,
  errors,
  control,
}: {
  register: any;
  errors: any;
  control: any;
}) {
  return (
    <Box mb="4rem" w={['full', '70%']} mx="auto">
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
          <SimpleGrid
            columns={2}
            rowGap={['12', '3']}
            columnGap={4}
            w="full"
            background={['unset', 'unset']}
          >
            <GridItem
              colSpan={[2, 1]}
              background={['unset', 'unset']}
              borderRadius="5px"
              p="0"
            >
              <PrimaryInput<ComplaintsModel>
                label="Departing From"
                register={register}
                error={errors.departureLocation}
                defaultValue={''}
                placeholder="Lagos"
                name="departureLocation"
                icon={<GiAirplaneArrival size="1.8rem" />}
              />
            </GridItem>
            <GridItem
              colSpan={[2, 1]}
              background={['unset', 'unset']}
              borderRadius="5px"
              p="0"
            >
              <PrimaryInput<ComplaintsModel>
                label="Final destination"
                register={register}
                error={errors.finalDestination}
                defaultValue={''}
                name="finalDestination"
                placeholder="Dubai"
                icon={<GiAirplaneDeparture size="1.8rem" />}
              />
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid
        columns={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt={['0 !important', '2rem !important']}
        background={['unset', '#F4F8FB']}
        borderRadius="10px"
        p="2rem"
      >
        <PrimaryInput<ComplaintsModel>
          label=" Departure date"
          register={register}
          error={errors.depatureDate}
          defaultValue={''}
          name="departureDate"
          type="date"
          icon={<BiCalendarEvent size="1.8rem" />}
          w="24%"
        />
      </SimpleGrid>
      <SimpleGrid
        column={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt={['0 !important', '2rem !important']}
        background={['unset', '#F4F8FB']}
        borderRadius="10px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <RadioButton<ComplaintsModel>
            label="Do you have any connecting flights?"
            name="connectingFlights"
            register={register}
            defaultValue=""
            error={errors.connectingflights}
            control={control}
            radios={
              <>
                <RadioInput label={'No, I don’t'} value={'false'} />
                <RadioInput label={'Yes, I do'} value={'true'} />
              </>
            }
          />
        </GridItem>
      </SimpleGrid>
      <SimpleGrid
        column={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt={['0 !important', '2rem !important']}
        background={['unset', '#F4F8FB']}
        borderRadius="10px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <RadioButton<ComplaintsModel>
            label=" Sorry for the cancellation. When did you arrive at the airport?"
            name="arrivalTime"
            register={register}
            defaultValue=""
            error={errors.arrivalTime}
            control={control}
            radios={
              <VStack w="full" align="flex-start" spacing={5}>
                <RadioInput
                  label={'0 - 1 hour early'}
                  value={'0 - 1 hour early'}
                />
                <RadioInput
                  label={'1 - 4 hours early'}
                  value={'1 - 4 hours early'}
                />
                <RadioInput
                  label={'0 - 1 hours late'}
                  value={'0 - 1 hours late'}
                />
                <RadioInput
                  label={'I never arrived'}
                  value={'I never arrived'}
                />
              </VStack>
            }
          />
        </GridItem>
      </SimpleGrid>
      <SimpleGrid
        column={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt={['0 !important', '2rem !important']}
        background={['unset', '#F4F8FB']}
        borderRadius="10px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <RadioButton<ComplaintsModel>
            label=" How far in advance did the airline notify you of the cancellation?"
            name="notificationPeriod"
            register={register}
            defaultValue=""
            error={errors.notificationPeriod}
            control={control}
            radios={
              <>
                <RadioInput
                  label={'Less than 14 days'}
                  value={'Less than 14 days'}
                />
                <RadioInput
                  label={'14 days or more'}
                  value={'14 days or more'}
                />
              </>
            }
          />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default Cancelled;
