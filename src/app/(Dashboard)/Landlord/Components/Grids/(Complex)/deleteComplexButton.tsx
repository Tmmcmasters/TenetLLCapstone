import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spacer, Tooltip, useDisclosure } from "@nextui-org/react";
import { DeleteIcon } from "../../Icons/DeleteIcon";
import { Complex } from "../types";
import toast from "react-hot-toast";
import { RemoveComplexById } from "@/app/(Dashboard)/(actions)/landlordDashController";



export default function DeleteComplexButton (
    {
        getComplexes,
        complexRow
    }: {
        getComplexes: () => void,
        complexRow: Complex
    }
    ) {

    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure(); 

    async function RemoveComplex() {
        toast.promise(RemoveComplexById(complexRow.id), {
            loading: 'Deleting...',
            success: <b>Deleted Complex</b>,
            error: <b>Could not delete Complex</b>,
        })
        onClose();
        getComplexes();
    }

    return (
        <div>
            <Tooltip color="danger" className="select-none" content="Delete Complex">
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
                            <ModalHeader className="flex flex-col font-normal"><p className="text-xl">Are you sure you want to delete <span className="text-primary-600 font-semibold">{complexRow.name}</span>?</p></ModalHeader>
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
                                    variant="ghost"
                                    className="font-semibold"
                                    onPress={RemoveComplex}
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