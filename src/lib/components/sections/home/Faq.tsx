import {
  Box,
  VStack,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
} from '@chakra-ui/react';
import { MdAdd, MdRemove } from 'react-icons/md';
export const DropAccordion = () => {
  return (
    <AccordionItem
      fontSize="1rem"
      borderLeftWidth="1px"
      borderRightWidth="1px"
      borderBottomWidth="1px"
      borderRadius="5px"
      borderColor="brand.100"
      p={4}
      mb={5}
    >
      {({ isExpanded }) => (
        <>
          <h2 style={{ height: '3.7rem' }}>
            <AccordionButton
              h="full"
              _focus={{
                boxShadow: '0 0 0 0',
                bgColor: 'transparent',
              }}
              _hover={{
                bgColor: 'transparent',
              }}
            >
              {isExpanded ? (
                <MdRemove fontSize="1.5rem" />
              ) : (
                <MdAdd fontSize="1.5rem" />
              )}
              <Box
                textAlign="left"
                flex="1"
                fontWeight="bold"
                color={isExpanded ? 'brand.100' : 'brand.600'}
                pl=".8rem"
              >
                What is the difference between a compensation and a ticket
                refund?
              </Box>
              {/* <AccordionIcon color="brand.100" /> */}
            </AccordionButton>
          </h2>
          <AccordionPanel p="0rem 1.5rem 1rem 3.3rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};
const Faq = () => {
  return (
    <Box
      width="60%"
      px={20}
      my="6rem"
      pb={5}
      pos="relative"
      overflow="hidden"
      mx="auto"
    >
      <VStack mb="4rem">
        <Heading fontSize="2.5rem" color="brand.200" fontWeight="700" mb={4}>
          FAQs
        </Heading>
        <Heading fontSize="1.1rem" color="brand.100" fontWeight="800" mb={4}>
          Quam lacus suspendisse faucibus interdum posuere
        </Heading>
        <Text fontSize="1rem" color="brand.200" textAlign="center" w="90%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </VStack>
      <VStack w="full">
        <Accordion allowToggle w="full">
          <DropAccordion />
          <DropAccordion />
          <DropAccordion />
          <DropAccordion />
        </Accordion>
      </VStack>
    </Box>
  );
};
export default Faq;
