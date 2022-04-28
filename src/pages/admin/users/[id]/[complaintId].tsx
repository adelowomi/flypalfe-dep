import { Box, VStack } from '@chakra-ui/react';
import ComplaintsDetails from 'lib/components/sections/admin/ComplaintsDetails';
import UserInfo from 'lib/components/sections/admin/UserInfo';
import UserMandate from 'lib/components/sections/admin/UserMandate';
import UserStats from 'lib/components/sections/admin/UserStats';
import { DataAccess } from 'lib/Utils/Api';
import { GetServerSideProps } from 'next';
import React from 'react';

function userDetails({
  item,
  complainsById,
}: {
  item: any;
  complainsById: any;
}) {
  return (
    <Box mb="4rem" w="full">
      <VStack spacing={8} w="full">
        {/* <UserStats item={item} /> */}
        <UserInfo display="block" item={item} />
        <ComplaintsDetails item={complainsById} />
        <UserMandate />
      </VStack>
    </Box>
  );
}

export default userDetails;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const bearer = `Bearer ${context.req.cookies.token}`;
  const _dataAccess = new DataAccess(bearer);
  const complaintsId = context?.params?.id;

  try {
    const complains = (
      await _dataAccess.get(`/api/Complaints/authorize/${complaintsId}`)
    ).data;

    return {
      props: {
        item: complains.user,
        complainsById: complains,
      },
    };
  } catch (error) {
    return {
      props: {
        item: {},
        complainsById: [],
      },
    };
  }
};
