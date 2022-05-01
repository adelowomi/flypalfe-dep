import { Box, GridItem, SimpleGrid } from '@chakra-ui/react';
import AdminGraphs from 'lib/components/sections/admin/AdminGraphs';
import UsersList from 'lib/components/sections/admin/UsersList';
import { UserView } from 'types/api';
import { MonthlyUserView } from 'types/api/monthly-user-view';

function Users({
  users,
  charts,
}: {
  users: UserView[];
  charts: MonthlyUserView[];
}) {
  return (
    <Box mb="4rem">
      <SimpleGrid columns={2} spacing={8}>
        <GridItem colSpan={2}>
          <AdminGraphs
            name="New user Survey"
            option="New user"
            charts={charts}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <UsersList users={users} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default Users;
