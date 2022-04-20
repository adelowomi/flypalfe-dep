import { Box, SimpleGrid } from '@chakra-ui/react';
import AdminGraphs from 'lib/components/sections/admin/AdminGraphs';
import UsersList from 'lib/components/sections/admin/UsersList';
import { useEffect, useState } from 'react';
import { useOperationMethod } from 'react-openapi-client';
import { useToasts } from 'react-toast-notifications';

function Users({ item }: { item: any }) {
  const [users, setUsers] = useState([]);
  const { addToast } = useToasts();
  const [getUsersList, { data, loading, error }] =
    useOperationMethod('Userlist');

  const listUsers = async () => {
    try {
      const result = await (await getUsersList()).data;

      if (result.status) {
        setUsers(result.data.value);
        return;
      }
      addToast(result.message, { appearance: 'error', autoDismiss: true });
      return;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listUsers();
  }, []);
  console.log(users);

  return (
    <Box mb="4rem">
      <SimpleGrid column={2} spacing={8}>
        <AdminGraphs name="New user Survey" option="New user" users={users} />
        <UsersList users={users} />
      </SimpleGrid>
    </Box>
  );
}

export default Users;
