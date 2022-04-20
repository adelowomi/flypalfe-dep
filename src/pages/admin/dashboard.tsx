import axios from 'axios';
import Dashboard from 'lib/pages/Admin/Dashboard';
import { GetServerSideProps } from 'next';
import { UserView } from 'types/api';

function dashboard({users}:{users:UserView}) {
  return <Dashboard users={users}/>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log({ context });

  const res = await (await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/api/user/list`
  )).data;
  console.log({ res });

  return {
    props: {
      users: res.data.value,
    },
  };
};

export default dashboard;
