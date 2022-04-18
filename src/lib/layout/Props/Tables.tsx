import { Box, Td, Th } from '@chakra-ui/react';

export function TableHead({ title }: { title: string }) {
  return (
    <Th
      pl="2.5rem"
      fontSize="14px"
      fontWeight="700"
      color="#25282B"
      fontFamily="Poppins"
    >
      {title}
    </Th>
  );
}

export function TableData({ name }: { name: string }) {
  return (
    <Td
      fontSize="14px"
      fontWeight="400"
      color="#25282B"
      fontFamily="Poppins"
      pl="2.5rem"
    >
      {name}
    </Td>
  );
}
export function TableStatus({ name }: { name: string }) {
  return (
    <Td pl="2.5rem">
      <Box
        bgColor={
          name === 'resolved'
            ? 'rgba(0, 127, 130, 0.12)'
            : name === 'pending'
            ? 'rgba(252, 193, 63, 0.13)'
            : '(255, 3, 3, 0.13)'
        }
        color={
          name === 'resolved'
            ? 'brand.100'
            : name === 'pending'
            ? 'brand.500'
            : '#FF0303'
        }
        borderRadius="11px"
        fontSize="14px"
        textTransform="capitalize"
        padding=".3rem 1rem"
        textAlign="center"
        fontFamily="Poppins"
      >
        {name}
      </Box>
    </Td>
  );
}
