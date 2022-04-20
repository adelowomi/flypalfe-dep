import { Box, Flex, Image, VStack, Text } from '@chakra-ui/react';
import LogoutModal from 'lib/components/sections/admin/Modals/LogoutModal';
import AdminMenu from 'lib/layout/Props/AdminMenu';
import NextLink from 'next/link';
import { useState } from 'react';

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Box
      w="20%"
      pos="fixed"
      h="full"
      bgColor="brand.100"
      borderRadius="8px 4px 22px rgba(0, 0, 0, 0.2)"
    >
      <Flex w="106px" ml="3rem" my="3rem">
        <Image src="../../../assets/logow.png" w="full" />
      </Flex>
      <VStack align="flex-start">
        <AdminMenu text="Dashboard" url="/admin/dashboard" />
        <AdminMenu text="Users" url="/admin/users" />
        <AdminMenu text="Complaints" url="/admin/complaints" />
        <AdminMenu text="Settings" url="/admin/settings" />
        <Text
          borderColor="brand.100"
          color="white"
          p="1rem 0 1rem 3rem"
          w="100%"
          fontSize="1rem"
          onClick={() => openModal()}
          cursor="pointer"
          _hover={{ textDecoration: 'underline' }}
        >
          Log out
        </Text>
      </VStack>
      <LogoutModal isOpen={isOpen} onClose={closeModal} />
    </Box>
  );
}

export default SideNav;
