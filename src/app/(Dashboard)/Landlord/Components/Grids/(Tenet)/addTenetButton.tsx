import { Button, Checkbox, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from "@nextui-org/react";
import { PlusIcon } from "../../Icons/PlusIcon";


export default function AddTenetButton () {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    return (
        <div className="w-full flex justify-end">
            <Button className="w-2/8" size="lg" color="success" variant="ghost" endContent={<PlusIcon />} onPress={onOpen}>Add Tenet</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placeholder="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1">Add Tenet</ModalHeader><ModalBody>
                            <Input
                                autoFocus
                                label="Complex Tenet"
                                placeholder="Enter tenet name"
                                variant="bordered"
                                required
                            />
                            <Input
                                label="Address"
                                type="address"
                                placeholder="Enter address"
                                variant="bordered"
                                required
                            />
                            <Textarea
                                label="Description"
                                placeholder="Enter description"
                                variant="bordered"
                                required
                            />
                            <div className="flex flex-row justify-start">
                            <Checkbox size="md">Add Another</Checkbox>
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
                                    onPress={onClose}
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