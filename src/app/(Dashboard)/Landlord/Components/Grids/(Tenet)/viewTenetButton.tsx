import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tooltip, useDisclosure } from "@nextui-org/react"
import { EyeIcon } from "../../Icons/EyeIcon"
import { Tenet } from "../types"

export default function ViewTenetButton (
    {
        tenetRow,
    }:
    {
        tenetRow: Tenet
    }
) {

    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

    return(
        <div>
            <Tooltip content="More Info">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={onOpen}>
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <Modal
                            isOpen={isOpen}
                            onOpenChange={onOpenChange}
                            placement="top-center"
                            isDismissable={false}
                        >
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                    <ModalHeader className="flex flex-col font-normal justify-center align-middle content-center"><p className="text-xl">Tenet Details</p></ModalHeader>
                                    <ModalBody className="">
                                        <p className="text-primary"><span className="text-default-500">Full Name: </span>{tenetRow.fullName}</p>
                                        <p className="text-primary"><span className="text-default-500">Email: </span>{tenetRow.email}</p>
                                        <p className="text-primary"><span className="text-default-500">Phone: </span>{tenetRow.phone}</p>
                                        <p className="text-primary"><span className="text-default-500">Address: </span>{tenetRow.address}</p>
                                        <p className="text-primary"><span className="text-default-500">Apartment: </span>{tenetRow.apartmentName} </p>
                                        <p className="text-primary"><span className="text-default-500">Complex: </span>{tenetRow.complexName} </p>
                                        <p className="text-primary"><span className="text-danger-500">Confirmation Code: </span>{tenetRow.confirmationCode} </p>
                                        
                                    </ModalBody>
                                    <ModalFooter className="w-full flex flex-row justify-end">
                                        <Button  variant="ghost" color="primary" onClick={onClose}>Close</Button>
                                    </ModalFooter>
                                    </>
                                )}
                            </ModalContent>

                        </Modal>
        </div>
    )
}