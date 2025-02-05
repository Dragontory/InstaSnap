import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";

const CommentModal = ({onClose, isOpen}) => {
    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
                <ModalOverlay />
                <ModalContent>
                    

                    <ModalBody>
                        <div className="h-[75vh] flex">
                            <div className="w-[45%] flex flex-col justify-center">
                                <img className="max-h-full w-full" src="https://cdn.pixabay.com/photo/2024/10/15/17/16/swan-9122726_1280.jpg" alt="" />
                            </div>
                            <div className="border w-[55%]">
                                <div className="flex items-center">
                                    <div>
                                        <img className="w-9 h-9 rounded-full" src="https://cdn.pixabay.com/photo/2023/12/16/04/29/arch-8451821_1280.jpg" alt="" />
                                    </div>
                                    
                                </div>

                            </div>
                        </div>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>
    )
}

export default CommentModal;