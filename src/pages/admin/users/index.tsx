import Users from 'lib/pages/Admin/Users';
import { DataAccess } from 'lib/Utils/Api';
import { GetServerSideProps } from 'next';
import React from 'react';

function users({ users }: { users: any }) {
  return <Users users={users} />;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const bearer = `Bearer ${context.req.cookies.token}`;
  const _dataAccess = new DataAccess(bearer);

  try {
    const userlist = (await _dataAccess.get('/api/user/list')).data;
    const complainList = (await _dataAccess.get('/api/Complaints/list/user'))
      .data;
    console.log({ userlist });

    return {
      props: {
        users: userlist,
        complains: complainList,
      },
    };
  } catch (error) {
    return {
      props: {
        users: [],
        complains: [],
      },
    };
  }
};

export default users;
