import { Box, Flex } from '@chakra-ui/react';
import Authentication from 'lib/pages/Admin/Authentication';
import SideNav from 'lib/pages/Admin/SideNav';
import TopNav from 'lib/pages/Admin/TopNav';
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
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <>
      {router.pathname.startsWith('/admin/') ? (
        <>
          {user === null || user === undefined ? (
            <Authentication />
          ) : (
            <Flex pos="relative" minH="100vh">
              <SideNav />
              <Box w="80%" h="full" bg="#f4f8fb" as="main" ml="auto">
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
