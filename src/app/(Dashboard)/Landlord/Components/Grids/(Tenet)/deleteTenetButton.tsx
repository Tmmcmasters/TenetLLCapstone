import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spacer, Tooltip, useDisclosure } from "@nextui-org/react";
import { DeleteIcon } from "../../Icons/DeleteIcon";
import { Tenet } from "../types";
import toast from "react-hot-toast";
import { RemoveTenetById } from "@/app/(Dashboard)/actions/landlordTenetController";



export default function DeleteTenetButton (
    {
        tenetRow,
        GetTenets
    }:
    {
        tenetRow: Tenet,
        GetTenets: () => void
    }
) {

    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure(); 

    function deleteTenet() {
        toast.promise(RemoveTenetById(tenetRow.id), {
            loading: 'Deleting tenet...',
            success: afterSuccess,
            error: <b>Could not delete tenet</b>
        })
    }

    function afterSuccess() {
        GetTenets();
        onClose();
        return "Tenet was deleted successfully"
    }

    return (
        <div>
            <Tooltip color="danger" content="Delete Tenet">
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
                            <ModalHeader className="flex flex-col font-normal"><p className="text-xl">Are you sure you want to remove <span className="text-primary-600 font-semibold">{tenetRow.fullName}</span>?</p></ModalHeader>
                            <ModalBody>
                                
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
                                    onPress={deleteTenet}
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