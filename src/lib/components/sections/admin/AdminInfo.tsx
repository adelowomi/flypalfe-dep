import {
  Box,
  Button,
  Circle,
  color,
  Divider,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import shadeColor from 'lib/components/Utilities/Functions/ColorShade';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import ChangePassword from './Modals/ChangePassword';
import UploadPhoto from './Modals/UploadPhoto';

function AdminInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const openUploadModal = () => {
    setIsUploadOpen(true);
  };
  const closeUpload = () => {
    setIsUploadOpen(false);
  };
  return (
    <Box
      bg="white"
      borderRadius="8px"
      boxShadow="0px 9px 30px -6px rgba(0, 0, 0, 0.07)"
      w="100%"
      p="1.5rem 2rem"
    >
      <Flex align="flex-start">
        <Box w="50%" as="div" h="fix-content">
          <HStack spacing="3rem">
            <Circle
              size="120px"
              overflow="hidden"
              bg={shadeColor('#007F82', 0.1)}
              alignItems="flex-end"
            >
              <Icon as={FaUser} color="brand.100" fontSize="90px" />
            </Circle>
            <HStack align="flex-start" spacing="3rem">
              <VStack as="div" align="flex-start" spacing={1}>
                <Text fontWeight="700" fontSize="1rem">
                  Balogun Boss
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  balogun@gmail.com
                </Text>
                <Text
                  fontWeight="400"
                  fontSize=".9rem"
                  color="brand.100"
                  cursor="pointer"
                  textDecor="underline"
                >
                  Remove
                </Text>
              </VStack>
              <VStack as="div" align="flex-start" spacing={1}>
                <Button
                  variant="outline"
                  borderColor="brand.100"
                  w="100%"
                  onClick={() => openUploadModal()}
                >
                  Upload
                </Button>
              </VStack>
            </HStack>
            <Box h="98px">
              <Divider
                orientation="vertical"
                borderColor="black"
                borderLeftWidth="1px"
              />
            </Box>
          </HStack>
        </Box>

        <Box w="50%" as="div">
          <HStack spacing="1.8rem" mt="1.5rem" w="90%" ml="auto">
            <VStack as="div" align="flex-start" spacing={1}>
              <Text fontWeight="700" fontSize="1rem">
                Change Password
              </Text>
              <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                Change your password to a new one
              </Text>
            </VStack>
            <Button
              variant="outline"
              borderColor="brand.100"
              onClick={() => openModal()}
            >
              Change Password
            </Button>
          </HStack>
        </Box>
      </Flex>
      <ChangePassword isOpen={isOpen} onClose={closeModal} />
      <UploadPhoto isOpen={isUploadOpen} onClose={closeUpload} />
    </Box>
  );
}

export default AdminInfo;
