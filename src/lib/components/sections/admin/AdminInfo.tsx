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
import { UserContext } from 'lib/Utils/MainContext';
import { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import ChangePassword from './Modals/ChangePassword';
import UploadPhoto from './Modals/UploadPhoto';

function AdminInfo() {
  const { user } = useContext(UserContext);
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
      <Flex align="flex-start" flexDirection={['column', 'row']}>
        <Box w={['full', '50%']} as="div" h="fix-content">
          <HStack spacing="3rem" flexDirection={['column', 'row']}>
            <Circle
              size="120px"
              overflow="hidden"
              bg={shadeColor('#007F82', 0.1)}
              alignItems="flex-end"
            >
              <Icon as={FaUser} color="brand.100" fontSize="90px" />
            </Circle>
            <HStack
              align={['center', 'flex-start']}
              spacing={['0', '3rem']}
              flexDirection={['column', 'row']}
              mt={['1rem !important', '0 !important']}
              mx={['auto !important', '']}
            >
              <VStack as="div" align={['center', 'flex-start']} spacing={1}>
                <Text fontWeight="700" fontSize="1rem">
                  {user.firstName} {user.lastName}
                </Text>
                <Text fontWeight="400" fontSize=".9rem" color="brand.200">
                  {user.email}
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
              <VStack as="div" align={['center', 'flex-start']} spacing={1}>
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
            <Box h="98px" display="none">
              <Divider
                orientation="vertical"
                borderColor="black"
                borderLeftWidth="1px"
              />
            </Box>
          </HStack>
        </Box>

        <Box as="div" w={['full', '50%']}>
          <HStack
            spacing="1.8rem"
            mt="1.5rem"
            w={['full', '90%']}
            ml="auto"
            flexDirection={['column', 'row']}
          >
            <VStack as="div" align={['center', 'flex-start']} spacing={1}>
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
              mx={['0 !important', '']}
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
