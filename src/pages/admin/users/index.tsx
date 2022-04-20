import Users from 'lib/pages/Admin/Users';
import { GetServerSideProps } from 'next';
import React from 'react';

function users({ item }: { item: any }) {
  return <Users item={item} />;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id;
  const res = await fetch(
    `https://propertymataazapi.herokuapp.com/api/Property/get/${id}`
  );
  const data = await res.json();
  console.log(data);

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      item: data.data,
    },
  };
};
export default users;
