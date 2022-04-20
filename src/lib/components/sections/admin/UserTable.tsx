import {
  Box,
  Flex,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { TableData, TableHead, TableStatus } from 'lib/layout/Props/Tables';
import { MdFilterList } from 'react-icons/md';
import Pagination from './Pagination';

function UserTable() {
  return (
    <Box
      w="full"
      minH="500px"
      bgColor="white"
      boxShadow="0px 20px 30px rgba(0, 0, 0, 0.07)"
      borderRadius="5"
      p=" 1rem 0"
    >
      <Flex
        justify="space-between"
        align="center"
        w="full"
        h="3rem"
        px="2.5rem"
      >
        <Text fontSize="1.1rem">Complaints</Text>
        <Icon as={MdFilterList} fontSize="1.1rem" />
      </Flex>
      <TableContainer h="500px" overflow="hidden">
        <Table variant="simple">
          <Thead>
            <Tr w="full" bgColor="#EFEFEF" h="3rem">
              <TableHead title="Name" />
              <TableHead title="Airline" />
              <TableHead title="Departure" />
              <TableHead title="Date" />
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <TableData name="Jesse Chigozie" />
              <TableData name="Air Peace" />
              <TableData name="Lagos" />
              <TableData name="Feb, 23rd 2022" />
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination />
    </Box>
  );
}

export default UserTable;
