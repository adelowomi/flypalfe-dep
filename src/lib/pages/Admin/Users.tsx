import { Box, SimpleGrid } from '@chakra-ui/react';
import AdminGraphs from 'lib/components/sections/admin/AdminGraphs';
import UsersList from 'lib/components/sections/admin/UsersList';

function Users() {
  return (
    <Box mb="4rem">
      <SimpleGrid column={2} spacing={8}>
        <AdminGraphs name={'New user Survey'} option={'New user'} />
        <UsersList />
      </SimpleGrid>
    </Box>
  );
}

export default Users;
