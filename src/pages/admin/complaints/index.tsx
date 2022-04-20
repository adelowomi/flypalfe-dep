import { Box } from '@chakra-ui/react';
import ComplaintsTable from 'lib/components/sections/admin/ComplaintsTable';

function index() {
  return (
    <Box my="3rem">
      <ComplaintsTable />
    </Box>
  );
}

export default index;
