import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

function ChangePassword({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent py={5} borderRadius="0" px={5}>
        <ModalHeader>
          <Text color="brand.200" fontSize="1.1rem" textAlign="center">
            Edit Account Details
          </Text>
        </ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <form>
            <FormControl>
              <FormLabel color="brand.100" fontSize="1.1rem">
                Change Password
              </FormLabel>
              <InputGroup>
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                />
                <InputRightElement width="fit-content" pr="1rem">
                  <Box onClick={handleClick} cursor="pointer">
                    {show ? (
                      <FaRegEye color="brand.200" />
                    ) : (
                      <FaRegEyeSlash color="brand.200" />
                    )}
                  </Box>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <HStack spacing="2rem" mt="1rem">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="solid">Save</Button>
            </HStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default ChangePassword;
