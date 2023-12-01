"use client"
import { Spacer, Input, Button } from "@nextui-org/react";
import PasswordBox from "./components/passwordBox/PasswordBox";

export default function TenetSignUp() {
    return <div className="flex flex-col items-center justify-center text-center h-[85vh]">
        <h1 className="text-3xl font-semibold  mb-8">Tenet Sign Up</h1>
        <Spacer y={2} />
        <div className="flex flex-col justify-center w-[400px] gap-3">
        <Input label="First Name" className="w-full" type="text" variant="bordered" isRequired={true} />
        <Input label="Last Name"  className="w-full" type="text" variant="bordered" isRequired={true} />
        <Input label="Username"  className="w-full" type="text" variant="bordered" isRequired={true} />
        <Input label="Email"  className="w-full" type="email" variant="bordered" isRequired={true} />
        <PasswordBox />
        <Input label="Confirm Password"  className="w-full" type="password" variant="bordered" isRequired={true} />
        </div>
        <Spacer y={10} />
        <div className="flex flex-row justify-between w-[400px]">
            <Button color="warning" size="lg" className="w-fill" variant="ghost">
                Cancel
            </Button>
            <Button color="success" size="lg" className="w-fill" variant="ghost">
                GO!
            </Button>
            </div>
            <Spacer y={2} />
            <Button color="primary" size="md" className="w-fill underline" variant="light" onClick={() => { window.location.href = "/SignUp/Landlord" }}>I am a landlord...</Button>
    </div>;
}