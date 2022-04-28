import { Box } from '@chakra-ui/react';
import ComplaintsTable from 'lib/components/sections/admin/ComplaintsTable';
import { DataAccess } from 'lib/Utils/Api';
import { GetServerSideProps } from 'next';

function index({ complains }: { complains: any }) {
  return (
    <Box my="3rem">
      <ComplaintsTable complains={complains} />
    </Box>
  );
}

export default index;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const bearer = `Bearer ${context.req.cookies.token}`;
  const _dataAccess = new DataAccess(bearer);

  try {
    const complainList = (await _dataAccess.get('/api/Complaints/list')).data;
    return {
      props: {
        complains: complainList,
      },
    };
  } catch (error) {
    return {
      props: {
        complains: [],
      },
    };
  }
};
