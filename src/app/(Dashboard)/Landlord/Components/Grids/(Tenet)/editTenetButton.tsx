import { Accordion, AccordionItem, Button, Checkbox, CircularProgress, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, Spacer, Textarea, Tooltip, useDisclosure } from "@nextui-org/react";
import { EditIcon } from "../../Icons/EditIcon";
import { Apartment, Complex, Tenet } from "../types";
import { useEffect, useState } from "react";
import { GetApartmentsByLandlordId } from "@/app/(Dashboard)/actions/landlordApartmentController";
import { GetAllComplexesByLandlordId } from "@/app/(Dashboard)/actions/landlordComplexController";
import toast from "react-hot-toast";
import { GetApartmentsByComplexId, UpdateTenetByTenetId } from "@/app/(Dashboard)/actions/landlordTenetController";


export default function EditTenetbutton(
    {
        landlordId,
        tenetRow,
        GetTenets
    }:
        {
            landlordId: number,
            tenetRow: Tenet,
            GetTenets: () => void
        }
) {

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [fullName, setFullName] = useState(tenetRow.fullName);
    const [firstName, setFirstName] = useState(tenetRow.firstName);
    const [lastName, setLastName] = useState(tenetRow.lastName);
    const [email, setEmail] = useState(tenetRow.email);
    const [phoneNumber, setPhoneNumber] = useState<number | null>(tenetRow.phone);
    const [apartmentName, setApartmentName] = useState(tenetRow.apartmentName);
    const [apartmentId, setApartmentId] = useState<number | null>(tenetRow.apartmentId);
    const [aparmtents, setAparmtents] = useState([] as Apartment[]);
    const [complexes, setComplexes] = useState([] as Complex[]);
    const [complexName, setComplexName] = useState(tenetRow.complexName);
    const [complexId, setComplexId] = useState<number | null>(tenetRow.complexId);
    const [address, setAddress] = useState(tenetRow.address);
    const [confirmationCode, setConfirmationCode] = useState(tenetRow.confirmationCode);
    const [loading, setLoading] = useState(true)
    const [apartmentDisabled, setApartmentDisabled] = useState(false)

    useEffect(() => {
        async function GetComplexesByLandlord(landlordId: number) {
            const response = await GetAllComplexesByLandlordId(landlordId);
            if (response) {
                const complexes = JSON.parse(response as string);
                // console.log('complexes', complexes)
                setComplexes(complexes);
            } else {
                toast.error("Could not get complexes. Please add complexes first", {
                    duration: 6000,
                });
            }
        }

        async function GetApartmentsByLandlord(landlordId: number) {
            const response = await GetApartmentsByLandlordId(landlordId);
            if (response) {
                const apartments = JSON.parse(response as string);
                setAparmtents(apartments);
                console.log('apartments', apartments)
            } else {
                toast.error("Could not get apartments. Please add apartments first", {
                    duration: 6000,
                });
            }
        }

        setTimeout(() => {
            GetComplexesByLandlord(landlordId);
        }, 1000)
        setTimeout(() => {
            GetApartmentsAfterComplex(complexId as number);
        }, 1000)
        setLoading(false)
    }, [])

    function generateNewCode() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setConfirmationCode(result);

    }

    async function OnApartmentChange(e: any) {
        // console.log(e)
        setApartmentId(e.target.value);
        setApartmentName(aparmtents.find((apartment) => apartment.id == e.target.value)?.name as string);
        setAddress(aparmtents.find((apartment) => apartment.id == e.target.value)?.address as string);
        // console.log(apartmentName)
        // console.log(apartmentId)
    }

    function OnComplexSelectChange(e: any) {
        setApartmentId(null);
        setApartmentName("");
        setApartmentDisabled(true);
        setComplexId(e.target.value);
        setComplexName(complexes.find((complex) => complex.id == e.target.value)?.name as string);

        const result = GetApartmentsAfterComplex(e.target.value);


    }

    async function GetApartmentsAfterComplex(complexId: number) {
        const response = await GetApartmentsByComplexId(complexId);
        const result = JSON.parse(response as unknown as string);

        if (result === null || result === undefined || result.length === 0) {
            toast.error("Could not get apartments. Please add apartments to this complex first. ", {
                duration: 6000,
            });
            return false;
        } else {
            setAparmtents(result);
            setApartmentDisabled(false);
            return true;
        }
    }

    function SaveTenet() {
        console.log("Saving Tenet")
        setFullName(firstName + " " + lastName);
        const validation = ValidateAdd();
        if (!validation) {
            return;
        }

        const tenet: Tenet = {
            fullName: fullName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phoneNumber as number,
            apartmentName: apartmentName,
            apartmentId: apartmentId as number,
            complexName: complexName,
            complexId: complexId as number,
            address: address,
            confirmationCode: confirmationCode,
            createdAt: tenetRow.createdAt,
            modifiedAt: "",
            id: tenetRow.id,
            landlordId: landlordId
        }

        toast.promise(UpdateTenetByTenetId(tenet), {
            loading: 'Saving...',
            success: AfterSuccess,
            error: <b>Could not save Tenet</b>,
        })
    }

    function AfterSuccess() {
        onClose();
        GetTenets();

        return "Tenet Saved Successfully";
    }

    function ValidateAdd() {

        let isValid = true;
        if (complexId === null || complexId === 0) {
            toast.error("Please select a complex", {
                duration: 3000,
            });
            isValid = false;
        }
        if (apartmentId === null || apartmentId === 0) {
            toast.error("Please select an apartment", {
                duration: 3000,
            });
            isValid = false;
        }
        if(firstName === "") {
            toast.error("Please enter the first name", {
                duration: 3000,
            });
            isValid = false;
        }
        if(lastName === "") {
            toast.error("Please enter the last name", {
                duration: 3000,
            });
            isValid = false;
        }
        if (email === "") {
            toast.error("Please enter the email", {
                duration: 3000,
            });
            isValid = false;
        }
        if (confirmationCode === "") {
            toast.error("Please enter the confirmation code", {
                duration: 3000,
            });
            isValid = false;
        }
        return isValid
    }



    return (
        <div >
            <Tooltip content="Edit Tenet">
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
                            <ModalHeader className="flex flex-col gap-1" >Edit Tenet</ModalHeader>
                            <ModalBody>
                                {
                                    loading ? (
                                        <CircularProgress isIndeterminate color="secondary" />
                                    ) :
                                        (
                                            <>
                                                <Accordion variant="bordered" defaultExpandedKeys={["2"]}
                                                    className="bg-background/60"
                                                >

                                                    <AccordionItem
                                                        key="1"
                                                        aria-label="Apartment/Complex" title="Apartment | Complex"
                                                        subtitle="Select valid complex to select apartment"
                                                    >
                                                        <Select
                                                            label="Select Complex"
                                                            placeholder={complexName}
                                                            variant="bordered"
                                                            items={complexes}
                                                            isRequired
                                                            onChange={OnComplexSelectChange}
                                                        >
                                                            {
                                                                complexes.map((complex) => (
                                                                    <SelectItem
                                                                        key={complex.id}
                                                                        value={complex.id}
                                                                        textValue={complex.name}
                                                                    >{complex.name} | {complex.address}</SelectItem>
                                                                ))
                                                            }
                                                        </Select>
                                                        <Spacer y={2} />
                                                        <Select
                                                            label="Select Apartment"
                                                            placeholder={apartmentName}
                                                            variant="bordered"
                                                            items={aparmtents}
                                                            isRequired
                                                            isDisabled={apartmentDisabled}
                                                            onChange={OnApartmentChange}
                                                        // selectedKeys={[apartmentId as unknown as string]}
                                                        >
                                                            {
                                                                aparmtents.map((apartment) => (
                                                                    <SelectItem
                                                                        key={apartment.id}
                                                                        value={apartment.id}
                                                                        textValue={`${apartment.name} : ${apartment.apartmentNumber}`}
                                                                    >{apartment.name} : {apartment.apartmentNumber}</SelectItem>
                                                                ))
                                                            }
                                                        </Select>
                                                    </AccordionItem>
                                                    <AccordionItem key="2" aria-label="Change Tenant Details" title="Tenant Details" className="w-full" subtitle="Press to expand">
                                                        <div className="flex flex-col justify-between align-middle ">
                                                            <p className="text-primary"><span className=" text-default-500">Apartment: </span>{apartmentName}</p>
                                                            <p className="text-primary"><span className=" text-default-500">Complex: </span>{complexName}</p>
                                                        </div>
                                                        <Spacer y={2} />
                                                        <Input
                                                            // autoFocus
                                                            label="First Name"
                                                            placeholder="Enter first name"
                                                            variant="bordered"
                                                            isRequired
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                            value={firstName}
                                                        />
                                                        <Spacer y={2} />
                                                        <Input
                                                            label="Last Name"
                                                            placeholder="Enter last name"
                                                            variant="bordered"
                                                            isRequired
                                                            onChange={(e) => setLastName(e.target.value)}
                                                            value={lastName}
                                                        />
                                                        <Spacer y={2} />
                                                        <Input
                                                            label="Email"
                                                            type="email"
                                                            placeholder="Enter email"
                                                            variant="bordered"
                                                            isRequired
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            value={email}
                                                        />
                                                        <Spacer y={2} />
                                                        <Input
                                                            label="Phone Number"
                                                            placeholder="Enter phone number"
                                                            type="number"
                                                            variant="bordered"
                                                            onChange={(e) => setPhoneNumber(e.target.value as unknown as number)}
                                                            value={phoneNumber?.toString()}
                                                        />
                                                        <Spacer y={2} />
                                                        <Button color="primary" size="sm" className="w-fit font-bold" variant="bordered" onClick={generateNewCode} >Generate Code</Button>
                                                        <Spacer y={2} />
                                                        <Input
                                                            // label="Confirmation Code"
                                                            placeholder="Click Generate Code"
                                                            type="text"
                                                            isDisabled
                                                            isRequired
                                                            value={confirmationCode}
                                                        />
                                                        <Spacer y={2} />
                                                    </AccordionItem>
                                                </Accordion>
                                            </>
                                        )
                                }
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
                                    onPress={SaveTenet}
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