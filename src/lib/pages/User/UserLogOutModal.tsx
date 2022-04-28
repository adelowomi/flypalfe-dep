import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';

function UserLogoutModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const LogOut = () => {
    setLoading(true);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    router.push('/user');
    setLoading(false);
  };

  return (
    <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent py={5} borderRadius="0" px={5} w={['full', '50%']}>
        <ModalHeader>
          <Text color="brand.200" fontSize="1.1rem" textAlign="center">
            Are you sure you want to log out?
          </Text>
        </ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <HStack spacing="2rem" mt="1rem">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="solid"
              onClick={() => LogOut()}
              isLoading={loading}
            >
              Yes
            </Button>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default UserLogoutModal;
