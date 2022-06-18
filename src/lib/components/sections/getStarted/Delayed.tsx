import { Box, GridItem, SimpleGrid, VStack, Text } from '@chakra-ui/react';
import {
  GiAirplaneArrival,
  GiAirplaneDeparture,
  GiDeadlyStrike,
} from 'react-icons/gi';
import { BiCalendarEvent } from 'react-icons/bi';
import { PrimaryInput } from 'lib/components/Utilities/PrimaryInput';
import { ComplaintsModel } from 'types/api';
import { RadioButton } from 'lib/components/Utilities/RadioButton';
import RadioInput from 'lib/components/Utilities/RadioInput';
import { PrimaryTextarea } from 'lib/components/Utilities/Textarea';
// import PrimaryDate from 'lib/components/Utilities/PrimaryDate';
import { PrimarySelect } from 'lib/components/Utilities/PrimarySelect';
import { airports } from 'lib/components/Utilities/airport';
import { PrimaryDate } from 'lib/components/Utilities/PrimaryDate';

function Delayed({
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
              pos="relative"
            >
              <PrimarySelect<ComplaintsModel>
                label="Departing From"
                name="departureLocation"
                register={register}
                error={errors.departureLocation}
                control={control}
                icon={GiAirplaneDeparture}
                options={airports}
                placeholder="Abuja Airport"
              />
            </GridItem>
            <GridItem
              colSpan={[2, 1]}
              background={['unset', 'unset']}
              borderRadius="5px"
              p="0"
              pos="relative"
            >
              <PrimarySelect<ComplaintsModel>
                label="Final Destination"
                name="finalDestination"
                register={register}
                error={errors.finalDestination}
                control={control}
                icon={GiAirplaneArrival}
                options={airports}
                placeholder="Akure Airport"
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
        <GridItem colSpan={2}>
          <PrimaryDate<ComplaintsModel>
            label="Departure date"
            register={register}
            error={errors.departureDate}
            name="departureDate"
            icon={BiCalendarEvent}
            control={control}
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
            label=" Sorry for the Delay. When did you arrive at the airport?"
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
              colSpan={[2]}
              background={['unset', 'unset']}
              borderRadius="5px"
              p="0"
              pos="relative"
            >
              <PrimarySelect<ComplaintsModel>
                label="Which of your flight was delayed?"
                name="delayedFlight"
                register={register}
                error={errors.delayedFlight}
                control={control}
                icon={GiDeadlyStrike}
                options={airports}
                placeholder="Abuja Airport"
              />
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
      <Text color="brand.200" mt="2rem" fontSize="18px">
        Enter flight details
      </Text>
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
                label="Airline"
                register={register}
                error={errors.airline}
                defaultValue={''}
                placeholder="e.g Air peace"
                name="airline"
              />
            </GridItem>
            <GridItem
              colSpan={[2, 1]}
              background={['unset', 'unset']}
              borderRadius="5px"
              p="0"
            >
              <PrimaryInput<ComplaintsModel>
                label="Flight number"
                register={register}
                error={errors.flightNumber}
                defaultValue={''}
                name="flightNumber"
                placeholder="JP9856457"
              />
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
      <Text color="brand.200" mt="2rem" fontSize="18px">
        Enter connecting flight details
      </Text>
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
                label="Airline"
                register={register}
                error={errors.connectingFlightAirLine}
                defaultValue={''}
                placeholder="e.g Air peace"
                name="connectingFlightAirLine"
              />
            </GridItem>
            <GridItem
              colSpan={[2, 1]}
              background={['unset', 'unset']}
              borderRadius="5px"
              p="0"
            >
              <PrimaryInput<ComplaintsModel>
                label="Flight number"
                register={register}
                error={errors.connectingFlightNumber}
                defaultValue={''}
                name="connectingFlightNumber"
                placeholder="JP9856457"
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
              colSpan={[2]}
              background={['unset', 'unset']}
              borderRadius="5px"
              p="0"
            >
              <PrimaryTextarea<ComplaintsModel>
                label="Any additional information that would help us process your claim faster"
                register={register}
                error={errors.additionalInformation}
                defaultValue={''}
                placeholder="Additional information"
                name="additionalInformation"
              />
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default Delayed;
