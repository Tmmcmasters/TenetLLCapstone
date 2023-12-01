"use client"
import { Input, Spacer, Button } from "@nextui-org/react";
import PasswordBox from "./PasswordBox";

export default function LandlordLogin() {
    return <div className="flex flex-col items-center justify-center text-center gap-5">
        <Spacer y={20} />
        <h1 className="text-3xl font-semibold  mb-8">Landlord Login</h1>
        <Input type="email" label="Email" placeholder="Enter your email" className="w-[400px]" variant="bordered" isRequired={true} />
        <PasswordBox />
        <div className="flex flex-row justify-between w-[400px]">
            <Button color="warning" size="lg" className="w-fill" variant="ghost">
                Cancel
            </Button>
            <Button color="success" size="lg" className="w-fill" variant="ghost">
                GO!
            </Button>

        </div>
        <div className="flex flex-row justify-center w-[400px]">
            <Button color="primary" size="md" className="w-fill underline" variant="light" onClick={() => { window.location.href = "/Login/Tenet" }}>I am a tenet...</Button>
        </div>
    </div>
}