import React from "react";
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react";
import {FaPhotoVideo} from "react-icons/fa";

const CreatePostModal = ({onClose, isOpen}) => {
    return (
        <div>
            <Modal size={"4xl"} onClick={onClose} isOpen={true} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <div className="flex justify-between py-1 px-10 items-center">
                        <p>Create New Post</p>
                        <Button className="" variant={"ghost"} size="sm" colorScheme={"blue"}>
                            Share
                        </Button>
                    </div>
                    <hr />
                    <ModalBody>
                        <div>
                            <div>
                                <div onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave} className="drag-drop h-full">
                                    <div>
                                        <FaPhotoVideo className="text-3xl"/>
                                        <p>Drag Photos or Videos Here</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>
    );
};

export default CreatePostModal;