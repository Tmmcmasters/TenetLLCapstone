"use client"
import { Spacer, Input, Button } from "@nextui-org/react";
import PasswordBox from "../components/passwordBox/PasswordBox";
import { useEffect, useState } from "react";
import { GetTenetByConfirmationCode } from "@/app/(Auth)/(actions)/tenetController";
import toast from "react-hot-toast";
import { Tenet } from "@/app/(Dashboard)/Landlord/Components/Grids/types";

export default function TenetSignUp(
    {
        params,
    }: {
        params: {
            confirmationCode: string
        }
    }
) {
    useEffect(() => {
        GetTenetByCode();
    }, []);

    const [tenet, setTenet] = useState({} as {
        firstName: string
        lastName: string
        email: string
        id: number
    });

    async function GetTenetByCode() {
        const response = await GetTenetByConfirmationCode(params.confirmationCode);
        const result = JSON.parse(response);
        // console.log(result)
        if (result.status === "error") {
            toast.error(result.message);
            return;
        } else if (result.length == 0) {
            toast.error("Invalid confirmation code.");
            window.location.href = "/SignUp/Confirmation";
            return;
        } else {
            toast.success("Code Verified");
            setTenet({
                firstName: result[0].firstName,
                lastName: result[0].lastName,
                email: result[0].email,
                id: result[0].id
            });
        }
    }

    return <div className="flex flex-col items-center justify-center text-center h-[85vh]">
        <h1 className="text-3xl font-semibold  mb-8">Tenet Sign Up</h1>
        <Spacer y={2} />
        <div className="flex flex-col justify-center w-[400px] gap-3">
            <Input
                label="First Name"
                className="w-full"
                type="text"
                variant="bordered"
                isRequired={true} 
                value={tenet.firstName}
                />
            <Input 
            label="Last Name" 
            className="w-full" 
            type="text" 
            variant="bordered" 
            isRequired={true} 
            value={tenet.lastName}
            />
            <Input 
            label="Username" 
            className="w-full" 
            type="text" 
            variant="bordered" 
            isRequired={true} 
            />
            <Input 
            label="Email" 
            className="w-full" 
            type="email" 
            variant="bordered" 
            isRequired={true} 
            value={tenet.email}
            />
            <PasswordBox />
            <Input 
            label="Confirm Password" 
            className="w-full" 
            type="password" 
            variant="bordered" 
            isRequired={true} 
            />
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