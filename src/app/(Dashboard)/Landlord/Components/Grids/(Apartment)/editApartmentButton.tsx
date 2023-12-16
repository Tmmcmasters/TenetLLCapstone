import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, Textarea, Tooltip, useDisclosure } from "@nextui-org/react";
import { EditIcon } from "../../Icons/EditIcon";
import { Apartment, Complex } from "../types";
import { useEffect, useState } from "react";
import { GetAllComplexesByLandlordId } from "@/app/(Dashboard)/actions/landlordComplexController";
import toast from "react-hot-toast";
import { UpdateApartmentById } from "@/app/(Dashboard)/actions/landlordApartmentController";
import { complex } from "framer-motion";


export default function EditApartmentButton(
    {
        apartmentRow,
        getApartments
    }:
        {
            apartmentRow: Apartment,
            getApartments: () => void
        }
) {

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [complexes, setComplexes] = useState([] as Complex[]);
    const [complexId, setComplexId] = useState<number>(apartmentRow.complexNumber as number);
    const [address, setAddress] = useState(apartmentRow.address);
    const [name, setName] = useState(apartmentRow.name);
    const [description, setDescription] = useState(apartmentRow.description);
    const [complexName, setComplexName] = useState(apartmentRow.complexName);
    const [isLoading, setIsLoading] = useState(true);
    const [apartmentNumber, setApartmentNumber] = useState<number | null>(
        apartmentRow.apartmentNumber ?? null
    );

    useEffect(() => {
        async function GetComplexesByLandlord(landlordId: number) {
            const response = await GetAllComplexesByLandlordId(landlordId);
            if (response) {
                const complexes = JSON.parse(response as string);
                setComplexes(complexes);
                setIsLoading(false);
                // console.log("complexes", complexes);
            } else {
                toast.error("Could not get complexes. Please add complexes first", {
                    duration: 6000,
                });
            }
        }

        GetComplexesByLandlord(apartmentRow.landlordId as number);
    }, [])

    function ChangeApartment() {
        const apartment: Apartment = {
            address: address,
            name: name,
            description: description,
            id: apartmentRow.id,
            createdAt: apartmentRow.createdAt,
            modifiedAt: "",
            complexId: complexId as number,
            complexName: complexName,
        }
        if (complexId === 0) {
            toast.error("Please select a complex", {
                duration: 6000,
            });
            return;
        }
        if (complexName === "") {
            toast.error("Please select a complex", {
                duration: 6000,
            });
            return;
        }
        toast.promise(UpdateApartmentById(apartment), {
            loading: 'Saving...',
            success: <b>Saved Apartment</b>,
            error: <b>Could not save Apartment</b>,
        });

        getApartments();
        onClose();
    }

    function onSelectChange(e: any) {
        console.log("current complex")
        console.log('complexId', complexId)
        setComplexId(e.target.value);
        setComplexName(complexes.find((complex) => complex.id == e.target.value)?.name as string);
    }

    return (
        <div >
            <Tooltip content="Edit Apartment" className="select-none">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={onOpen}>
                    <EditIcon />
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
                            <ModalHeader className="flex flex-col gap-1" >Edit Apartment</ModalHeader><ModalBody>
                                <Input
                                    autoFocus
                                    label="Apartment Number"
                                    placeholder="Enter apartment number"
                                    variant="bordered"
                                    type="number"
                                    value={apartmentNumber?.toString()}
                                    onChange={(e) => setApartmentNumber(parseInt(e.target.value))}
                                />
                                {!isLoading && (
                                    <Select
                                        label="Change Complex"
                                        placeholder={complexName.toString()}
                                        variant="bordered"
                                        items={complexes}
                                        // isRequired
                                        onChange={onSelectChange}
                                    >
                                        {
                                            complexes.map((complex) => (
                                                <SelectItem key={complex.id} value={complex.id}>{complex.name}</SelectItem>
                                            ))
                                        }
                                    </Select>
                                )}

                                <Input
                                    label="Apartment Name"
                                    placeholder="Enter apartment name"
                                    variant="bordered"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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
                                    onPress={ChangeApartment}
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