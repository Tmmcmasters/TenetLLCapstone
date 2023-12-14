import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, Tooltip, useDisclosure } from "@nextui-org/react";
import { EditIcon } from "../../Icons/EditIcon";
import { Apartment } from "../types";

interface EditApartmentbuttonProps {
    apartmentRow: Apartment;
  }
export default function EditApartmentButton(apartmentRow: EditApartmentbuttonProps) {

    const {isOpen, onOpen, onOpenChange} = useDisclosure(); 

    return (
        <div >
            <Tooltip content="Edit Apartment" className="select-none">
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
                        <ModalHeader className="flex flex-col gap-1" >Edit Apartment</ModalHeader><ModalBody>
                            <Input
                                autoFocus
                                label="Complex Name"
                                placeholder="Enter complex name"
                                variant="bordered"
                                value={apartmentRow.apartmentRow.name}
                            />
                            <Input
                                label="Address"
                                type="address"
                                placeholder="Enter address"
                                variant="bordered"
                                value={apartmentRow.apartmentRow.address}
                            />
                            <Textarea
                                label="Description"
                                placeholder="Enter description"
                                variant="bordered"
                                value={apartmentRow.apartmentRow.description}
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