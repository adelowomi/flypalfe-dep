import { Button, Flex, VStack } from '@chakra-ui/react';
import AdminInfo from 'lib/components/sections/admin/AdminInfo';
import SettingsDetails from 'lib/components/sections/admin/SettingsDetails';
import SettingsNav from 'lib/components/sections/SettingsNav';

function settings() {
  return (
    <VStack spacing={8}>
      <SettingsNav />
      <AdminInfo />
      <SettingsDetails />
    </VStack>
  );
}

export default settings;
