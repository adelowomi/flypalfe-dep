import Authentication from 'lib/pages/Admin/Authentication';
import router from 'next/router';
import cookie from 'js-cookie';
import { useEffect } from 'react';

function index() {
  useEffect(() => {
    function redirectToLogin() {
      if (cookie.get('token') != null || undefined || false) {
        router.push('/admin/dashboard');
      } else {
        router.push('/admin');
      }
    }
    redirectToLogin();
  }, []);
  return <Authentication />;
}

export default index;
