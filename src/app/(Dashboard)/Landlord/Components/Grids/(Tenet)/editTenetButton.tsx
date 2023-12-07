import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, Tooltip, useDisclosure } from "@nextui-org/react";
import { EditIcon } from "../../Icons/EditIcon";
import { Tenet } from "../types";

interface EditTenetbuttonProps {
    tenetRow: Tenet;
  }
export default function EditTenetbutton(tenetRow: EditTenetbuttonProps) {

    const {isOpen, onOpen, onOpenChange} = useDisclosure(); 

    return (
        <div >
            <Tooltip content="Edit Tenet">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={onOpen}>
                                <EditIcon  />
                            </span>
                        </Tooltip>
                        <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1" >Edit Tenet</ModalHeader><ModalBody>
                            <Input
                                autoFocus
                                label="First Name"
                                placeholder="Enter first name"
                                variant="bordered"
                                value={tenetRow.tenetRow.firstName}
                            />
                            <Input
                                autoFocus
                                label="Last Name"
                                placeholder="Enter last name"
                                variant="bordered"
                                value={tenetRow.tenetRow.lastName}
                            />
                            <Input
                                label="Address"
                                type="address"
                                placeholder="Enter address"
                                variant="bordered"
                                value={tenetRow.tenetRow.address}
                            />
                            <Input
                                label="Apartment Name"
                                placeholder="Enter apartment name"
                                variant="bordered"
                                value={tenetRow.tenetRow.apartmentName}
                            />
                        </ModalBody>
                        <ModalFooter className="w-full flex justify-between">
                                <Button
                                    size="md"
                                    variant="bordered"
                                    color="warning"
                                    onPress={onClose}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    size="md"
                                    color="success"
                                    variant="ghost"
                                    onPress={onClose}
                                >
                                    Save
                                </Button>
                        </ModalFooter>
                        </>
                    )
                    
                    }
                </ModalContent>

            </Modal>
        </div>
    );
}