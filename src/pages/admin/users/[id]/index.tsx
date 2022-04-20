import { Box, VStack } from '@chakra-ui/react';
import UserComplaints from 'lib/components/sections/admin/UserComplaints';
import UserInfo from 'lib/components/sections/admin/UserInfo';
import UserStats from 'lib/components/sections/admin/UserStats';
import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';


function index({ item }: { item: any }) {
  return (
    <Box mb="4rem" w="full">
      <VStack spacing={8} w="full">
        <UserStats />
        <UserInfo display={'none'} item={item} />
        <UserComplaints />
      </VStack>
    </Box>
  );
}

export default index;
