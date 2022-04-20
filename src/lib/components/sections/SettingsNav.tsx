import { Button, Flex, Text } from '@chakra-ui/react';

function SettingsNav() {
  return (
    <Flex w="full" justify="space-between" align="center" mt="1rem">
      <Text fontWeight="700" fontSize="1rem">
        Account
      </Text>
      <Button variant="solid">Invite Admin</Button>
    </Flex>
  );
}

export default SettingsNav;
