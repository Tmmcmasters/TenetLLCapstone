"use client";

import { Button, Checkbox, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from "@nextui-org/react";
import { PlusIcon } from "../../Icons/PlusIcon";
import { useEffect, useState } from "react";
import CreateApartmentComplex, { GetAllComplexesByLandlordId } from "@/app/(Dashboard)/(actions)/landlordDashController";
import toast from "react-hot-toast";


export default function AddComplexButton(
    {
        landlordId
    }: {
        landlordId: number
    }
) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [complexName, setComplexName] = useState("")
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("")
    const [addAnother, setAddAnother] = useState(false)

    

    async function SaveApartmentComplex() {
        const successManage = () => {
            if (addAnother) {
                setComplexName("")
                setAddress("")
                setDescription("")
                return <b>Saved Complex</b>
            }
            onClose()
            setComplexName("")
            setAddress("")
            setDescription("")
            return <b>Saved Complex</b>
        }

        toast.promise(CreateApartmentComplex({
            name: complexName,
            address: address,
            description: description,
            id: 0,
            createdAt: "",
            modifiedAt: "",
            landlordId: landlordId
        }), {
            loading: 'Saving...',
            success: successManage,
            error: <b>Could not save Complex</b>,
        });
        // const isSuccess = await CreateApartmentComplex({
        //     name: complexName,
        //     address: address,
        //     description: description,
        //     id: 0,
        //     createdAt: "",
        //     modifiedAt: "",
        // })
    }

    


    return (
        <div className="w-full flex justify-end">
            <Button className="w-2/8" size="lg" color="success" variant="ghost" endContent={<PlusIcon />} onPress={onOpen}>Add Complex</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placeholder="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add Complex</ModalHeader><ModalBody>
                                <Input
                                    autoFocus
                                    label="Complex Name"
                                    placeholder="Enter complex name"
                                    variant="bordered"
                                    onChange={(e) => setComplexName(e.target.value)}
                                    isRequired
                                    value={complexName}
                                />
                                <Input
                                    label="Address"
                                    type="address"
                                    placeholder="Enter address"
                                    variant="bordered"
                                    isRequired
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                />
                                <Textarea
                                    label="Description"
                                    placeholder="Enter description"
                                    variant="bordered"
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}

                                />
                                <div className="flex flex-row justify-start">
                                    <Checkbox size="md" onChange={(e) => setAddAnother(e.target.checked)} isSelected={addAnother}>Add Another</Checkbox>
                                </div>
                            </ModalBody>
                            <ModalFooter className="w-full flex justify-between">
                                <div >
                                    <Button
                                        size="md"
                                        variant="bordered"
                                        color="warning"
                                        onPress={onClose}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <Button
                                        size="md"
                                        color="success"
                                        variant="ghost"
                                        onPress={SaveApartmentComplex}
                                    >
                                        Save
                                    </Button>
                                </div>
                            </ModalFooter>
                        </>
                    )

                    }
                </ModalContent>

            </Modal>
        </div>
    )
}