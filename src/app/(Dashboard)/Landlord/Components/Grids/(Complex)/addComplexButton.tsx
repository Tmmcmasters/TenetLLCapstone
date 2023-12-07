import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from "@nextui-org/react";
import { PlusIcon } from "../../Icons/PlusIcon";


export default function AddComplexButton () {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    return (
        <div className="w-full flex justify-end">
            <Button className="w-2/8" size="lg" color="success" variant="ghost" endContent={<PlusIcon />} onPress={onOpen}>Add Complex</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placeholder="center"
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
                                    onPress={onClose}
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
    )
}