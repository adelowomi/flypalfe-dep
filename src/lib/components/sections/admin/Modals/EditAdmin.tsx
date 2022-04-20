import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

function EditAdmin({ isOpen, onClose }: { isOpen: boolean; onClose: any }) {
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
            <VStack spacing="1rem">
              <FormControl>
                <FormLabel color="brand.100" fontSize="1.1rem">
                  Username
                </FormLabel>
                <InputGroup>
                  <Input placeholder="Balogun" type="text" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel color="brand.100" fontSize="1.1rem">
                  Phone Number
                </FormLabel>
                <InputGroup>
                  <Input placeholder="08123456789" type="number" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel color="brand.100" fontSize="1.1rem">
                  Email
                </FormLabel>
                <InputGroup>
                  <Input placeholder="balogun@gmail.com" type="number" />
                </InputGroup>
                <Text fontSize="14px" color="brand.200" mt="1rem">
                  This can not be edited. Reach out to support if you need to
                  change it.
                </Text>
              </FormControl>
            </VStack>
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

export default EditAdmin;
