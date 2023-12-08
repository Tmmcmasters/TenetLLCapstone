import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure, Input, Textarea, ModalFooter } from "@nextui-org/react";
import { PlusIcon } from "../../Landlord/Components/Icons/PlusIcon";


export default function CreateRequestButton () {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div className="w-full flex ">
            <Button className="w-2/8" size="md" color="success" variant="ghost" endContent={<PlusIcon />} onClick={onOpen}>Create Request</Button>

            <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">Create Request</ModalHeader>
                <ModalBody>
                    <Input
                    autoFocus
                    label="Request Summary"
                    placeholder="Enter request summary"
                    variant="bordered"
                    required
                    />
                    <Input
                    label="Urgency Level"
                    placeholder="Enter urgency level"
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
                    >
                    Create
                    </Button>
                    </ModalFooter>
                </>
            )}
        </ModalContent>
        </Modal>
        </div>
    )
}