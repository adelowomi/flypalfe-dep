import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BsFillCloudUploadFill } from 'react-icons/bs';

function UploadPhoto({ isOpen, onClose }: { isOpen: boolean; onClose: any }) {
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
                Upload Photo
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="brand.100"
                  children={<BsFillCloudUploadFill size="1.8rem" />}
                />
                <Input p="1rem 4rem" type="file" />
                <InputRightElement
                  pointerEvents="none"
                  color="brand.100"
                  position="absolute"
                  bgColor="white"
                  width={['40%', '34%']}
                  height="75%"
                  top="10px"
                  left="56px"
                />
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

export default UploadPhoto;
