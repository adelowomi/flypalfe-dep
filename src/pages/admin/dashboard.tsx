import axios from 'axios';
import Dashboard from 'lib/pages/Admin/Dashboard';
import { GetServerSideProps } from 'next';
import cookie from 'js-cookie';
import { DashboardMetricsView, UserView } from 'types/api';
import { DataAccess } from 'lib/Utils/Api';

function dashboard({
  users,
  adminMetrics,
  complains,
}: {
  users: UserView;
  adminMetrics: DashboardMetricsView;
  complains: any;
}) {
  return (
    <Dashboard
      users={users}
      adminMetrics={adminMetrics}
      complains={complains}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const bearer = `Bearer ${context.req.cookies.token}`;
  const _dataAccess = new DataAccess(bearer);
  const { url } = context.query;

  try {
    const userlist = (await _dataAccess.get('/api/user/list')).data;
    const complainList = (await _dataAccess.get(`/api/Complaints/list?${url}`))
      .data;
    const metrics = (await _dataAccess.get('/api/Admin/metrics')).data;

    return {
      props: {
        users: userlist,
        adminMetrics: metrics,
        complains: complainList,
      },
    };
  } catch (error) {
    return {
      props: {
        users: [],
        adminMetrics: {},
        complains: [],
      },
    };
  }
};

export default dashboard;
