
import React from "react";

const CommentModal = ({onClose, isOpen}) => {
    return (
        <div>
            <Modal onClose={onClose} isOpen={true} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Comment</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CommentModal;