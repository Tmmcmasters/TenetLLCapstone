"use client"
import { Button, Input, Spacer } from "@nextui-org/react";
import { useState } from "react";
import { GetTenetByConfirmationCode } from "../../(actions)/tenetController";
import toast from "react-hot-toast";

export default function Confirmation() {
    const [code1, setCode1] = useState("");
    const [code2, setCode2] = useState("");
    const [code3, setCode3] = useState("");
    const [code4, setCode4] = useState("");
    const [code5, setCode5] = useState("");
    const [fullCode, setFullCode] = useState("");

    const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>, codeIndex: number) => {
        const inputValue = e.target.value;
        switch (codeIndex) {
            case 1:
                setCode1(inputValue);
                break;
            case 2:
                setCode2(inputValue);
                break;
            case 3:
                setCode3(inputValue);
                break;
            case 4:
                setCode4(inputValue);
                break;
            case 5:
                setCode5(inputValue);
                break;
            default:
                break;
        }
    };

    const navigateToNextPage = async () => {
        setFullCode(`${code1}${code2}${code3}${code4}${code5}`);

        const response = await GetTenetByConfirmationCode(fullCode);
        const result = JSON.parse(response);

        setTimeout(() => {
            
            console.log(response)
            if (result.status === "error") {
                toast.error(result.message);
                return;
            } else if (result.length == 0) {
                toast.error("Invalid confirmation code. Please try again.");
                return;
            } else {
                toast.success("Code Verified. Redirecting to next page...");
                window.location.href = "/SignUp/Tenet/" + fullCode;
            }
        }, 500)
            
    }

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <Spacer y={20} />
            <h1 className="text-3xl font-semibold  mb-8">Enter Confirmation Code</h1>
            <div className="flex flex-row justify-around w-[80vw] max-w-[500px] gap-5">
                <Input
                    className="w-[20%] " 
                    type="text"
                    size="lg"
                    variant="bordered"
                    value={code1}
                    onChange={(e) => handleCodeChange(e, 1)}
                    maxLength={1}
                />
                <Input
                    className="w-[20%] "
                    type="text"
                    size="lg"
                    variant="bordered"
                    value={code2}
                    onChange={(e) => handleCodeChange(e, 2)}
                    maxLength={1}
                />
                <Input
                    className="w-[20%] "
                    type="text"
                    size="lg"
                    variant="bordered"
                    value={code3}
                    onChange={(e) => handleCodeChange(e, 3)}
                    maxLength={1}
                />
                <Input
                    className="w-[20%] "
                    type="text"
                    size="lg"
                    variant="bordered"
                    value={code4}
                    onChange={(e) => handleCodeChange(e, 4)}
                    maxLength={1}
                />
                <Input
                    className="w-[20%] "
                    type="text"
                    size="lg"
                    variant="bordered"
                    value={code5}
                    onChange={(e) => handleCodeChange(e, 5)}
                    maxLength={1}
                />
            </div>
            <Spacer y={5} />
            <div className="flex flex-row justify-end w-[80vw] max-w-[500px]">
                <Button color="success" size="lg" className="w-fill" variant="ghost" onClick={navigateToNextPage}>
                    GO!
                </Button>
            </div>
        </div>
    );
}