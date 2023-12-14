import { Button, Checkbox, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, Textarea, useDisclosure } from "@nextui-org/react";
import { PlusIcon } from "../../Icons/PlusIcon";
import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { Apartment, Complex } from "../types";
import  { GetAllComplexesByLandlordId } from "@/app/(Dashboard)/actions/landlordComplexController";
import { CreateApartment } from "@/app/(Dashboard)/actions/landlordApartmentController";


export default function AddApartmentButton (
    {
        landlorId,
        GetApartments
    }:
    {
        landlorId: number,
        GetApartments: () => void
    }
) {
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
    const [complexes, setComplexes] = useState([] as Complex[]);
    const [complexId, setComplexId] = useState<number | string>("");
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [complexName, setComplexName] = useState("");
    const [addAnother, setAddAnother] = useState(false)
    const [addDisabled, setAddDisabled] = useState(true)
    const [apartmentNumber, setApartmentNumber] = useState<number | null>(null)

    
    useEffect(() => {
        async function GetComplexesByLandlord(landlordId:number) {
                const response = await GetAllComplexesByLandlordId(landlordId);
                if (response) {
                    const complexes = JSON.parse(response as string);
                    setComplexes(complexes);
                } else {
                    toast.error("Could not get complexes. Please add complexes first", {
                        duration: 6000,
                    });
                }
        }

        GetComplexesByLandlord(landlorId);
    }, [])

    async function SaveApartment() {
        if (complexes.length === 0) {
            toast.error("Please add complexes first", {
                duration: 6000,
            });
            return;
        }
        if (complexId === 0) {
            toast.error("Please select a complex", {
                duration: 6000,
            });
            return;
        }
        

        const apartment: Apartment  = {
            address: address,
            name: name,
            description: description,
            apartmentNumber: apartmentNumber as number,
            landlordId: landlorId,
            id: 0,
            createdAt: "",
            modifiedAt: "",
            complexId: complexId as number,
            complexName: complexName
        }
        console.log()
        console.log(apartment)

        toast.promise(CreateApartment(apartment ), {
            loading: 'Saving...',
            success: <b>Saved Apartment</b>,
            error: <b>Could not save Apartment</b>,
        });
        if (!addAnother) {
            onClose();
        }

        GetApartments();
        clearForm();
    }

    function clearForm() {
        setComplexId(0);
        setAddress("");
        setName("");
        setDescription("");
        setComplexName("");
        setApartmentNumber(null);
    }

    

    async function onSelectChange(e:any) {
        setComplexId(e.target.value);
        setComplexName(complexes.find((complex) => complex.id == e.target.value)?.name as string);
    }


    return (
        <div className="w-full flex justify-end">
            <Button className="w-2/8" size="lg" color="success" variant="ghost" endContent={<PlusIcon />} onPress={onOpen}>Add Apartment</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placeholder="top-center"
                isDismissable={false}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1">Add Apartment</ModalHeader><ModalBody>
                            <Input
                                label="Apartment Number"
                                type="number"
                                placeholder="Enter apartment number"
                                variant="bordered"
                                isRequired
                                onChange={(e) => setApartmentNumber(e.target.value as unknown as number) }
                                value={apartmentNumber?.toString()}
                            />
                            <Select
                                label="Select Complex"
                                placeholder="Select Complex"
                                variant="bordered"
                                items={complexes}
                                isRequired
                                onChange={onSelectChange}
                            >
                                {
                                    complexes.map((complex) => (
                                        <SelectItem key={complex.id} value={complex.id}>{complex.name}</SelectItem>
                                    ))
                                }
                            </Select>
                            <Input
                                autoFocus
                                label="Apartment Name"
                                placeholder="Enter apartment name"
                                variant="bordered"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
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
                                required
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
                                    onPress={SaveApartment}
                                    // isDisabled={addDisabled}
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