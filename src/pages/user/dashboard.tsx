import axios from 'axios';
import UserDashboard from 'lib/pages/User/UserDashboard';
import { DataAccess } from 'lib/Utils/Api';
import { GetServerSideProps } from 'next';
import React from 'react';

function dashboard({ complains, item }: { complains: any; item: any }) {
  return <UserDashboard complains={complains} item={item} />;
}

export default dashboard;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const bearer = `Bearer ${context.req.cookies.token}`;
  const _dataAccess = new DataAccess(bearer);
  const { url } = context.query;

  try {
    const complainList = (
      await _dataAccess.get(`/api/Complaints/list/user?${url}`)
    ).data;
    const userDetails = (await _dataAccess.get('/api/User/getbyid')).data;
    console.log(userDetails);

    return {
      props: {
        complains: complainList,
        item: userDetails,
      },
    };
  } catch (error) {
    return {
      props: {
        complains: [],
        item: {},
      },
    };
  }
};
