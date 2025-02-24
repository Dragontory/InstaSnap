import React from "react";
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody} from "@chakra-ui/react";

const CreatePostModal = ({onClose, isOpen}) => {
    return (
        <div>
            <Modal onClick={onClose} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>


                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>
    );
};