import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spacer, Tooltip, useDisclosure } from "@nextui-org/react";
import { DeleteIcon } from "../../Icons/DeleteIcon";
import { Complex } from "../types";

interface DeleteComplexButtonProps {
    complexRow: Complex;
}

export default function DeleteComplexButton (complexRow: DeleteComplexButtonProps) {

    const {isOpen, onOpen, onOpenChange} = useDisclosure(); 

    return (
        <div>
            <Tooltip color="danger" content="Delete Complex">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={onOpen}>
                                <DeleteIcon />
                            </span>
                        </Tooltip>

                        <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                size="xl"
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                            <ModalHeader className="flex flex-col font-normal"><p className="text-xl">Are you sure you want to delete <span className="text-primary-600 font-semibold">{complexRow.complexRow.name}</span>?</p></ModalHeader>
                            <ModalBody>
                                <p className="text-lg">Deleting a complex <span className="text-danger-500 font-bold"> removes all the apartments within it.</span></p>
                                <p className="text-warning-500 font-semibold text-lg">This action cannot be undone.</p>
                                <Spacer y={5} />
                            </ModalBody>
                            <ModalFooter className="w-full flex justify-between">
                                <Button
                                    size="md"
                                    variant="ghost"
                                    color="success"
                                    onPress={onClose}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    size="md"
                                    color="danger"
                                    variant="solid"
                                    onPress={onClose}
                                >
                                    DELETE
                                </Button>
                        </ModalFooter>
                            </>
                        )
                        }
                    </ModalContent>
                </Modal>
        </div>
    )
}