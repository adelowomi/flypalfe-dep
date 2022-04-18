import { Box, Flex, GridItem, HStack, SimpleGrid } from '@chakra-ui/react';
import AdminGraphs from 'lib/components/sections/admin/AdminGraphs';
import AdminStats from 'lib/components/sections/admin/AdminStats';
import UserTable from 'lib/components/sections/admin/UserTable';

function Dashboard() {
  return (
    <Box mb="4rem">
      <SimpleGrid column={2} spacing={8}>
        <GridItem colSpan={2}>
          <AdminStats />
        </GridItem>
        <GridItem colSpan={2}>
          <AdminGraphs name={'New user Survey'} option={'New user'} />
        </GridItem>
        <GridItem colSpan={2}>
          <HStack columnGap={5}>
            <AdminGraphs name={'Resolved complaint'} option={'Current month'} />
            <AdminGraphs name={'Pending complaint'} option={'Current month'} />
          </HStack>
        </GridItem>
        <GridItem colSpan={2}>
          <UserTable />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default Dashboard;
