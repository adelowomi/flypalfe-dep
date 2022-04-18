import { Box, Flex, Image, VStack, Link } from '@chakra-ui/react';
import AdminMenu from 'lib/layout/Props/AdminMenu';
import NextLink from 'next/link';

function SideNav() {
  return (
    <Box
      w="20%"
      pos="absolute"
      h="full"
      bgColor="brand.100"
      borderRadius="8px 4px 22px rgba(0, 0, 0, 0.2)"
    >
      <Flex w="106px" ml="3rem" my="3rem">
        <Image src="../assets/logow.png" w="full" />
      </Flex>
      <VStack align="flex-start">
        <AdminMenu text={'Dashboard'} url={'/admin/dashboard'} />
        <AdminMenu text={'Users'} url={'/admin/users'} />
        <AdminMenu text={'Complaints'} url={'/admin/complaints'} />
        <AdminMenu text={'Settings'} url={'/admin/settings'} />
        <AdminMenu text={'Log out'} url={'/admin/logout'} />
      </VStack>
    </Box>
  );
}

export default SideNav;
