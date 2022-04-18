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
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { GiAirplaneArrival, GiAirplaneDeparture } from 'react-icons/gi';
import { BiCalendarEvent } from 'react-icons/bi';
import { useState } from 'react';

function Second() {
  const [value, setValue] = useState('1');
  const [values, setValues] = useState('1');
  const [valued, setValued] = useState('1');
  return (
    <Box mb="4rem" w="70%" mx="auto">
      <SimpleGrid
        column={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt="2rem !important"
        background="#F4F8FB"
        borderRadius="10px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <HStack justify="space-between" spacing={6}>
            <FormControl>
              <FormLabel color="brand.100" fontSize="1.1rem">
                Departing From
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="brand.100"
                  children={<GiAirplaneArrival size="1.8rem" />}
                />
                <Input placeholder="Kwara" type="text" />
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel color="brand.100" fontSize="1.1rem">
                Final destination
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="brand.100"
                  children={<GiAirplaneDeparture size="1.8rem" />}
                />
                <Input placeholder="Abuja" type="text" />
              </InputGroup>
            </FormControl>
          </HStack>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid
        column={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt="2rem !important"
        background="#F4F8FB"
        borderRadius="10px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <HStack justify="space-between" spacing={6}>
            <FormControl>
              <FormLabel color="brand.100" fontSize="1.1rem">
                Departure date
              </FormLabel>
              <InputGroup pos="relative">
                <InputLeftElement
                  pointerEvents="none"
                  color="brand.100"
                  children={<BiCalendarEvent size="1.8rem" />}
                />
                <Input placeholder="23/02/2022" type="date" />
                <InputRightElement
                  pointerEvents="none"
                  color="brand.100"
                  position="absolute"
                  bgColor="white"
                  width="20%"
                  height="70%"
                  top="10px"
                  right="10px"
                />
              </InputGroup>
            </FormControl>
          </HStack>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid
        column={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt="2rem !important"
        background="#F4F8FB"
        borderRadius="10px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <FormLabel color="brand.100" fontSize="1.1rem">
            Do you have any connecting flights?
          </FormLabel>
          <HStack justify="space-between" spacing={6}>
            <RadioGroup onChange={setValues} value={values} w="full">
              <Stack direction="row" w="full" align="flex-start">
                <Box
                  height="4rem"
                  w="100%"
                  padding="0 2rem"
                  border="1px solid #007F82"
                  background="#FFFFFF"
                  borderRadius="5px"
                  boxShadow="0px 0px 9px rgba(0, 127, 130, 0.37)"
                  borderColor="brand.100"
                  display="flex"
                  color={values == '1' ? 'brand.200' : '#999999'}
                  alignItems="center"
                  _focus={{ borderColor: 'brand.200' }}
                >
                  <Radio value="1" className="radio">
                    No, I don’t
                  </Radio>
                </Box>
                <Box
                  height="4rem"
                  w="100%"
                  padding="0 2rem"
                  border="1px solid #007F82"
                  background="#FFFFFF"
                  borderRadius="5px"
                  boxShadow="0px 0px 9px rgba(0, 127, 130, 0.37)"
                  borderColor="brand.100"
                  display="flex"
                  color={values == '2' ? 'brand.200' : '#999999'}
                  alignItems="center"
                  _focus={{ borderColor: 'brand.200' }}
                >
                  <Radio value="2" className="radio">
                    Yes, I do
                  </Radio>
                </Box>
              </Stack>
            </RadioGroup>
          </HStack>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid
        column={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt="2rem !important"
        background="#F4F8FB"
        borderRadius="10px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <FormLabel color="brand.100" fontSize="1.1rem">
            Sorry for the cancellation. When did you arrive at the airport?
          </FormLabel>
          <HStack justify="space-between" spacing={6}>
            <RadioGroup onChange={setValue} value={value} w="full">
              <VStack w="full" align="flex-start" spacing={5}>
                <Box
                  height="4rem"
                  w="100%"
                  padding="0 2rem"
                  border="1px solid #007F82"
                  background="#FFFFFF"
                  borderRadius="5px"
                  boxShadow="0px 0px 9px rgba(0, 127, 130, 0.37)"
                  borderColor="brand.100"
                  display="flex"
                  color={value == '1' ? 'brand.200' : '#999999'}
                  alignItems="center"
                  _focus={{ borderColor: 'brand.200' }}
                >
                  <Radio value="1" className="radio">
                    0 - 1 hour early
                  </Radio>
                </Box>
                <Box
                  height="4rem"
                  w="100%"
                  padding="0 2rem"
                  border="1px solid #007F82"
                  background="#FFFFFF"
                  borderRadius="5px"
                  boxShadow="0px 0px 9px rgba(0, 127, 130, 0.37)"
                  borderColor="brand.100"
                  display="flex"
                  color={value == '2' ? 'brand.200' : '#999999'}
                  alignItems="center"
                  _focus={{ borderColor: 'brand.200' }}
                >
                  <Radio value="2" className="radio">
                    1 - 4 hours early
                  </Radio>
                </Box>
                <Box
                  height="4rem"
                  w="100%"
                  padding="0 2rem"
                  border="1px solid #007F82"
                  background="#FFFFFF"
                  borderRadius="5px"
                  boxShadow="0px 0px 9px rgba(0, 127, 130, 0.37)"
                  borderColor="brand.100"
                  display="flex"
                  color={value == '3' ? 'brand.200' : '#999999'}
                  alignItems="center"
                  _focus={{ borderColor: 'brand.200' }}
                >
                  <Radio value="3" className="radio">
                    0 - 1 hours late
                  </Radio>
                </Box>
                <Box
                  height="4rem"
                  w="100%"
                  padding="0 2rem"
                  border="1px solid #007F82"
                  background="#FFFFFF"
                  borderRadius="5px"
                  boxShadow="0px 0px 9px rgba(0, 127, 130, 0.37)"
                  borderColor="brand.100"
                  display="flex"
                  color={value == '4' ? 'brand.200' : '#999999'}
                  alignItems="center"
                  _focus={{ borderColor: 'brand.200' }}
                >
                  <Radio value="4" className="radio">
                    I never arrived
                  </Radio>
                </Box>
              </VStack>
            </RadioGroup>
          </HStack>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid
        column={2}
        rowGap="3"
        columnGap="4"
        w="100%"
        mt="2rem !important"
        background="#F4F8FB"
        borderRadius="10px"
        p="2rem"
      >
        <GridItem colSpan={2}>
          <FormLabel color="brand.100" fontSize="1.1rem">
            How far in advance did the airline notify you of the cancellation?
          </FormLabel>
          <HStack justify="space-between" spacing={6}>
            <RadioGroup onChange={setValued} value={valued} w="full">
              <Stack direction="row" w="full" align="flex-start">
                <Box
                  height="4rem"
                  w="100%"
                  padding="0 2rem"
                  border="1px solid #007F82"
                  background="#FFFFFF"
                  borderRadius="5px"
                  boxShadow="0px 0px 9px rgba(0, 127, 130, 0.37)"
                  borderColor="brand.100"
                  display="flex"
                  color={valued == '1' ? 'brand.200' : '#999999'}
                  alignItems="center"
                  _focus={{ borderColor: 'brand.200' }}
                >
                  <Radio value="1" className="radio">
                    Less than 14 days
                  </Radio>
                </Box>
                <Box
                  height="4rem"
                  w="100%"
                  padding="0 2rem"
                  border="1px solid #007F82"
                  background="#FFFFFF"
                  borderRadius="5px"
                  boxShadow="0px 0px 9px rgba(0, 127, 130, 0.37)"
                  borderColor="brand.100"
                  display="flex"
                  color={valued == '2' ? 'brand.200' : '#999999'}
                  alignItems="center"
                  _focus={{ borderColor: 'brand.200' }}
                >
                  <Radio value="2" className="radio">
                    14 days or more
                  </Radio>
                </Box>
              </Stack>
            </RadioGroup>
          </HStack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default Second;
