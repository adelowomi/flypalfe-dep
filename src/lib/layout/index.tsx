import { Box, Flex } from '@chakra-ui/react';
import Authentication from 'lib/pages/Admin/Authentication';
import SideNav from 'lib/pages/Admin/SideNav';
import TopNav from 'lib/pages/Admin/TopNav';
import UserSideNav from 'lib/pages/User/SideNav';
import UserPage from 'lib/pages/User/UserPage';
import { UserContext } from 'lib/Utils/MainContext';
import { useRouter } from 'next/router';
import { ReactNode, useContext, useEffect } from 'react';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { user, setUser, admin, setAdmin } = useContext(UserContext);

  useEffect(() => {
    const isUser = localStorage.getItem('user') as unknown as string;
    if (isUser != null || undefined) {
      setUser(JSON.parse(isUser));
      return;
    }
    const isAdmin = localStorage.getItem('admin') as unknown as string;
    if (isAdmin != null || undefined) {
      setAdmin(JSON.parse(isAdmin));
      return;
    }
  }, []);

  return (
    <>
      {router.pathname.startsWith('/admin/') ? (
        <>
          {admin === null || admin === undefined ? (
            <Authentication />
          ) : (
            <Flex pos="relative" minH="100vh">
              <SideNav />
              <Box
                w={['full', '80%']}
                h="full"
                bg="#f4f8fb"
                as="main"
                ml="auto"
              >
                <Box as="div" w="95%" mx="auto" minH="100vh">
                  <TopNav />
                  {children}
                </Box>
              </Box>
            </Flex>
          )}
        </>
      ) : router.pathname.startsWith('/user/') &&
        router.asPath !== '/user/reset' ? (
        <>
          {user === null || user === undefined ? (
            <UserPage />
          ) : (
            <Flex pos="relative" minH="100vh">
              <UserSideNav />
              <Box
                w={['full', '80%']}
                h="full"
                bg="#f4f8fb"
                as="main"
                ml="auto"
              >
                <Box as="div" w="95%" mx="auto" minH="100vh">
                  <TopNav />
                  {children}
                </Box>
              </Box>
            </Flex>
          )}
        </>
      ) : (
        <Box margin="0 auto" transition="0.5s ease-out">
          <Header />
          <Box as="main">{children}</Box>
          <Footer />
        </Box>
      )}
    </>
  );
};

export default Layout;
