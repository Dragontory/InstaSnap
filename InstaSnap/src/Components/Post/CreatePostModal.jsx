import React, {useState} from "react";
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react";
import {FaPhotoVideo} from "react-icons/fa";
import "./CreatePostModal.css";

const CreatePostModal = ({onClose, isOpen}) => {

    const [isDragOver, setIsDragOver] = useState(false);
    const [file, setFile] = useState();
    const [caption, setCaption] = useState("");

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

    const handleOnChange = (event) => {
        const file = event.target.files[0];
        if(file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
            setFile(file);
        } else {
            setFile(null);
            alert("Please select an image or video file");
        }
    }

    const handleCaptionChange = (event) => {
        setCaption(event.target.value)
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
                        <div className="h-[70vh] justify-between pb-5 flex">
                            <div className="w-[50%]">
                                {!file && <div onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave} className="drag-drop h-full">
                                    <div>
                                        <FaPhotoVideo className="text-3xl"/>
                                        <p>Drag Photos or Videos Here</p>
                                    </div>
                                    <label htmlFor="file-upload" className="custom-file-upload">Select From Computer</label>
                                    <input className = "fileInput" type="file" id="file-upload" accept="image/*, video/*" onChange={handleOnChange} />
                                </div>}

                                {file && <img className="max-h-full" src={URL.createObjectURL(file)} alt="" />}

                            </div>
                            <div className="w-[1px] border-2 h-full"></div>
                            <div className="w-[50%]">
                                <div className="flex items-center px-2">
                                    <img className="w-7 h-7 rounded-full" src="https://cdn.pixabay.com/photo/2022/10/11/16/43/french-bulldog-7514725_1280.jpg" alt="" />
                                    <p className="font-semibold ml-4">username</p>
                                </div>
                                <div>
                                    <textarea placeholder="Write a caption" className="captionInput" name="caption" rows="8" onChange={handleCaptionChange}></textarea>
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