import { Box, VStack } from '@chakra-ui/react';
import UserComplaints from 'lib/components/sections/admin/UserComplaints';
import UserInfo from 'lib/components/sections/admin/UserInfo';
import UserStats from 'lib/components/sections/admin/UserStats';
import { GetServerSideProps } from 'next';
import { DataAccess } from 'lib/Utils/Api';

function index({ item, complaints }: { item: any; complaints: any }) {
  return (
    <Box mb="4rem" w="full">
      <VStack spacing={8} w="full">
        <UserStats item={item} />
        <UserInfo display={'none'} item={item} />
        <UserComplaints complaints={complaints} />
      </VStack>
    </Box>
  );
}

export default index;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const bearer = `Bearer ${context.req.cookies.token}`;
  const _dataAccess = new DataAccess(bearer);
  const id = context?.params?.id;

  try {
    const data = (await _dataAccess.get(`/api/Admin/user/get/${id}`)).data;
    const complainData = (
      await _dataAccess.get(`/api/Admin/complain/list/user/${id}`)
    ).data;

    return {
      props: {
        item: data,
        complaints: complainData,
      },
    };
  } catch (error) {
    return {
      props: {
        item: {},
        complaints: [],
      },
    };
  }
};
