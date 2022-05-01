import { Box, Flex, GridItem, HStack, SimpleGrid } from '@chakra-ui/react';
import AdminGraphs from 'lib/components/sections/admin/AdminGraphs';
import AdminStats from 'lib/components/sections/admin/AdminStats';
import ComplaintsTable from 'lib/components/sections/admin/ComplaintsTable';
import UserTable from 'lib/components/sections/admin/UserTable';
import { DashboardMetricsView, UserView } from 'types/api';
import { MonthlyUserView } from 'types/api/monthly-user-view';

function Dashboard({
  users,
  adminMetrics,
  complains,
  charts,
}: {
  users: UserView;
  adminMetrics: DashboardMetricsView;
  complains: any;
  charts: MonthlyUserView[];
}) {
  return (
    <Box mb="4rem">
      <SimpleGrid columns={2} spacing={8}>
        <GridItem colSpan={2}>
          <AdminStats metrics={adminMetrics} />
        </GridItem>
        <GridItem colSpan={2}>
          <AdminGraphs
            name="New user Survey"
            option="New user"
            charts={charts}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <HStack columnGap={5} flexDirection={['column', 'row']}>
            <AdminGraphs
              name="Resolved complaint"
              option="Current month"
              charts={charts}
            />
            <AdminGraphs
              name="Pending complaint"
              option="Current month"
              charts={charts}
            />
          </HStack>
        </GridItem>
        <GridItem colSpan={2}>
          <ComplaintsTable complains={complains} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default Dashboard;
