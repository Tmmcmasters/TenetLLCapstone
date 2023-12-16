import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, Tooltip, useDisclosure } from "@nextui-org/react";
import { EditIcon } from "../../Icons/EditIcon";
import { Complex } from "../types";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { UpdateComplex } from "@/app/(Dashboard)/actions/landlordComplexController";


// interface EditComplexbuttonProps {
//     complexRow: Complex;
//   }
export default function EditComplexbutton(
    {
        complexRow,
        getComplexes
    }:
    {
        complexRow: Complex,
        getComplexes: () => void  
    }
) {
    // const compledNameRef = useRef<HTMLInputElement | null>(null);
    // const addressRef = useRef<HTMLInputElement | null>(null);
    // const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
    const [complexName, setComplexName] = useState(complexRow.name);
    const [address, setAddress] = useState(complexRow.address);
    const [description, setDescription] = useState(complexRow.description);

    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure(); 

    async function EditComplex() {
        toast.promise(UpdateComplex({
            name: complexName,
            address: address,
            description: description,
            id: complexRow.id,
            landlordId: complexRow.landlordId,
            createdAt: complexRow.createdAt,
            modifiedAt: new Date().toISOString().slice(0,10)
        }),
        {
            loading: 'Updating...',
            success: <b>Updated Complex</b>,
            error: <b>Could not update Complex</b>,
        })
        onClose();
        setTimeout(() => {
            getComplexes();
            
        }, 1000);
    }

    return (
        <div >
            <Tooltip content="Edit Complex" className="select-none">
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
                        <ModalHeader className="flex flex-col gap-1" >Edit Complex</ModalHeader><ModalBody>
                            <Input
                                autoFocus
                                label="Complex Name"
                                placeholder="Enter complex name"
                                variant="bordered"
                                value={complexName}
                                onChange={(e) => setComplexName(e.target.value)}
                            />
                            <Input
                                label="Address"
                                type="address"
                                placeholder="Enter address"
                                variant="bordered"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <Textarea
                                label="Description"
                                placeholder="Enter description"
                                variant="bordered"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
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
                                    onPress={EditComplex}
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