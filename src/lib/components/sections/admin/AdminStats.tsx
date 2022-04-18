import { Grid, Icon } from '@chakra-ui/react';
import AdminCard from 'lib/layout/Props/AdminCard';
import { FaUser } from 'react-icons/fa';
import { MdPendingActions, MdAutoFixHigh } from 'react-icons/md';

const ElevatorDecline = (props: any) => (
  <Icon viewBox="0 0 22 18" {...props}>
    <path
      d="M21.5 17.5H0.5V6.125L8.025 10.5L12.4233 7.93333L21.5 13.1717V17.5ZM0.5 3.43V0.875L8.025 5.25L12.4233 2.68333L21.5 7.92167V10.5L12.4233 5.25L8.025 7.78167L0.5 3.43Z"
      fill="currentColor"
    />
  </Icon>
);
function AdminStats() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      <AdminCard
        icon={FaUser}
        color="#0D73FF"
        title="Unique user"
        sub="2,000"
      />
      <AdminCard
        icon={MdAutoFixHigh}
        color="#007F82"
        title="Resolve complain"
        sub="1,100"
      />
      <AdminCard
        icon={MdPendingActions}
        color="#FFA42F"
        title="Pending complain"
        sub="350"
      />
      <AdminCard
        icon={ElevatorDecline}
        color="#FF0303"
        title="Decline complain"
        sub="500"
      />
    </Grid>
  );
}

export default AdminStats;
