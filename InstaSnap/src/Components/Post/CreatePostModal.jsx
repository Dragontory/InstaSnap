import React from "react";
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react";

const CreatePostModal = ({onClose, isOpen}) => {
    return (
        <div>
            <Modal size={"4xl"} onClick={onClose} isOpen={true} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <div>
                        <p>Create New Post</p>
                        <Button className="" variant={"ghost"} size="sm" colorScheme={"blue"}>
                            Share
                        </Button>
                    </div>
                    <ModalCloseButton />
                    <ModalBody>


                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>
    );
};

export default CreatePostModal;