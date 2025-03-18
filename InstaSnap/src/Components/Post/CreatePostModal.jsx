import React, {useState} from "react";
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react";
import {FaPhotoVideo} from "react-icons/fa";
import "./CreatePostModal.css";

const CreatePostModal = ({onClose, isOpen}) => {

    const [isDragOver, setIsDragOver] = useState(false);
    const [file, setFile] = useState();

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if(file.type.startsWith("image/") || file.type.startsWith("video/")) {
            setFile(file);
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
        setIsDragOver(true);
    }

    const handleDragLeave = (event) => {
        setIsDragOver(false);
    }

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
                                    <label htmlFor="file-upload" className="custom-file-upload">Select From Computer</label>
                                    <input type="text" id="file-upload" accept="image/*, video/*" onChange={handleOnChange} />
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