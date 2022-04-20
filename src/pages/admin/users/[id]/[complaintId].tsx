import { Box, VStack } from '@chakra-ui/react';
import ComplaintsDetails from 'lib/components/sections/admin/ComplaintsDetails';
import UserInfo from 'lib/components/sections/admin/UserInfo';
import UserMandate from 'lib/components/sections/admin/UserMandate';
import UserStats from 'lib/components/sections/admin/UserStats';
import React from 'react';

function userDetails({ item }: { item: any }) {
  return (
    <Box mb="4rem" w="full">
      <VStack spacing={8} w="full">
        <UserStats />
        <UserInfo display="block" item={item} />
        <ComplaintsDetails />
        <UserMandate />
      </VStack>
    </Box>
  );
}

export default userDetails;
