import { Box, Flex, GridItem, HStack, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
import AdminGraphs from 'lib/components/sections/admin/AdminGraphs';
import AdminStats from 'lib/components/sections/admin/AdminStats';
import UserTable from 'lib/components/sections/admin/UserTable';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { useOperationMethod } from 'react-openapi-client';
import { useToasts } from 'react-toast-notifications';
import { UserView } from 'types/api';

function Dashboard({users}:{users:UserView}) {
  console.log({users});
  
  // const [users, setUsers] = useState([]);
  const { addToast } = useToasts();
  // const [getUsersList, { data, loading, error }] =
  //   useOperationMethod('Userlist');

  // const listUsers = async () => {
  //   try {
  //     const result = await (await getUsersList()).data;

  //     console.log({ result });

  //     if (result.status) {
  //       setUsers(result.data.value);
  //       return;
  //     }
  //     addToast(result.message, { appearance: 'error', autoDismiss: true });
  //     return;
  //   } catch (error) {
  //     console.log(error);
  //     addToast('An error occured. Check your internet connection or try again in few minutes', { appearance: 'error', autoDismiss: true });
  //   }
  // };
  // useEffect(() => {
  //   listUsers();
  // }, []);
  // console.log(users);

  return (
    <Box mb="4rem">
      <SimpleGrid column={2} spacing={8}>
        <GridItem colSpan={2}>
          <AdminStats />
        </GridItem>
        <GridItem colSpan={2}>
          <AdminGraphs name="New user Survey" option="New user" users={users} />
        </GridItem>
        <GridItem colSpan={2}>
          <HStack columnGap={5}>
            {/* <AdminGraphs name="Resolved complaint" option="Current month" />
            <AdminGraphs name="Pending complaint" option="Current month" /> */}
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
