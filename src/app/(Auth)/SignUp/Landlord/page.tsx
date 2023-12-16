"use client";

import { Button, Input, Link, Spacer } from "@nextui-org/react";
import PasswordBox from "./components/passwordBox/PasswordBox";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


import type { Database } from "@/lib/database.types";
import { EyeFilledIcon } from "./components/passwordBox/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./components/passwordBox/EyeSlashFilledIcon";
import { Console } from "console";
import toast from "react-hot-toast";
import CreateLandlord, { GetLandlordByUserId } from "../../(actions)/landlordController";
import LandlordDashboardNav from "@/app/(Dashboard)/Landlord/Dashboard/[landlordId]/LandlordDashboardNav";
import { signOut, signUpWithEmailaAndPassword } from "../../(actions)";

import getUserSession from "../../(actions)";
import { User } from "@supabase/supabase-js";
export default function LandlordSignUp() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [passwordMessage, setPasswordMessage] = useState("");
    const [firstNameValid, setFirstNameValid] = useState(true);
    const [firstNameMessage, setFirstNameMessage] = useState("");
    const [lastNameValid, setLastNameValid] = useState(true);
    const [lastNameMessage, setLastNameMessage] = useState("");
    const [usernameValid, setUsernameValid] = useState(true);
    const [usernameMessage, setUsernameMessage] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [emailMessage, setEmailMessage] = useState("");
    const [user, setUser] = useState<User | null>(null);    
    const [loading, setLoading] = useState(true);
    const [landlordId , setLandlordId] = useState("");

    useEffect(() => {

        async function getUser() {
            const userSession = await getUserSession();
            // console.log(userSession)
            // console.log(userSession.data.session?.user)
            await setUser(userSession.data.session?.user ?? null);
            if (user !== null) {
                const response = await GetLandlordByUserId(user.id);
                const result = JSON.parse(response)
                console.log("The landlord id is: " + result.data.id);
                setLandlordId(result.data.id);
            }
            setLoading(false);
        }

        getUser();
    }, []);

    // const supabase = createClientComponentClient<Database>();

    const validateForm = async () => {
        var valid = true;
        if (firstName === "") {
            valid = false;
            setFirstNameValid(false);
            setFirstNameMessage("First name is required");
        } else {
            setFirstNameValid(true);
            setFirstNameMessage("");
        }
        if (lastName === "") {
            valid = false;
            setLastNameValid(false);
            setLastNameMessage("Last name is required");
        } else {
            setLastNameValid(true);
            setLastNameMessage("");
        }
        if (username === "") {
            valid = false;
            setUsernameValid(false);
            setUsernameMessage("Username is required");
        } else {
            setUsernameValid(true);
            setUsernameMessage("");
        }
        if (email === "") {
            valid = false;
            setEmailValid(false);
            setEmailMessage("Email is required");
        } else {
            setEmailValid(true);
            setEmailMessage("");
        }
        if (password !== confirmPassword) {
            setConfirmPasswordValid(false);
            setConfirmPasswordMessage("Passwords do not match");
            valid = false;
        } else {
            setConfirmPasswordValid(true);
            setConfirmPasswordMessage("");
        }
        if (password.length < 8) {
            setPasswordMatch(false);
            setPasswordMessage("Password must be at least 8 characters");
            valid = false;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordMatch(false);
            setPasswordMessage("Password must contain at least one uppercase letter");
            valid = false;
        }
        if (!/[a-z]/.test(password)) {
            setPasswordMatch(false);
            setPasswordMessage("Password must contain at least one lowercase letter");
            valid = false;
        }
        if (!/[0-9]/.test(password)) {
            setPasswordMatch(false);
            setPasswordMessage("Password must contain at least one number");
            valid = false;
        }

        return valid;
    }

    const handleLogout = async () => {
        const response = await signOut();
        setUser(null);
        router.refresh();
    }

    const handleSignUp = async () => {
        var valid = await validateForm();
        if (!valid) {
            toast.error("Please fill out all required fields");
            return;
        }
        setPasswordMatch(true);
        setPasswordMessage("");

        var result = await signUpWithEmailaAndPassword({
            email,
            password,
            firstName,
            lastName,
            username
        })
        const {data, error} = JSON.parse(result); 
        console.log(data);
        console.log(error);
        if (error === null) {


            toast.success("Account created successfully");
            // toast.success("Please check your email for a verification link", {
            //     duration: 5000,
            //     icon: "⏳",
            // });
            setUser(data.user);
            const landlordResult = await CreateLandlord({
                userId: data.user?.id as string,
                firstName: firstName,
                lastName: lastName,
                createdAt: null,
                email: email,
                fullName: firstName + " " + lastName,
                modifiedAt: null,
                id: 0,
            })
            const landlordParsed = JSON.parse(landlordResult);
            console.log("result on the sign up page");
            console.log(landlordParsed);
            // if (landlordParsed.id !== null) {
            //     console.log("Setting the landlord id");
            //     await setLandlordId(landlordParsed.id);
            //     router.push(`/Landlord/Dashboard/${landlordId}`);
            // }
            clearFields();
            return;
        }
        toast.error(error.message);
        clearFields();
        router.refresh();
    }
    const clearFields = () => {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setFirstName("");
        setLastName("");
        setUsername("");
    }

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    // console.log(loading);
    // console.log(user);

    if (loading) {
        return <div>Loading...</div>;
    }

    
    async function  getLandlord(userId: string) {
        const response =   await GetLandlordByUserId(userId);
                const result = JSON.parse(response)
                
                setLandlordId(result.id);
    }

    if (user) {
        console.log(user);
        getLandlord(user.id);

        return (
            <div className="flex flex-col items-center justify-center text-center align-middle h-[85vh]">
                <h1 className="text-3xl font-semibold  mb-8">You are already logged in</h1>
                <div className="flex flex-row justify-between w-[400px] gap-3">
                    <Button color="danger" variant="ghost" size="lg" onClick={handleLogout}>Logout</Button>
                    <Button as={Link} color="success" variant="ghost" size="lg" href={`/Landlord/Dashboard/${landlordId}`} >Dashboard</Button>
                    </div>
            </div>
        )
    }
    return <div className="flex flex-col items-center justify-center text-center h-[85vh]">
        <h1 className="text-3xl font-semibold  mb-8">Landlord Sign Up</h1>
        <Spacer y={2} />
        <div className="flex flex-col justify-center w-[400px] gap-3">
            <Input
                label="First Name"
                className="w-full"
                type="text"
                variant="bordered"
                isRequired={true}
                onChange={(e) => setFirstName(e.target.value)}
                isInvalid={!firstNameValid}
                errorMessage={firstNameMessage}
                value={firstName}
            />
            <Input
                label="Last Name"
                className="w-full"
                type="text"
                variant="bordered"
                isRequired={true}
                onChange={(e) => setLastName(e.target.value)}
                isInvalid={!lastNameValid}
                errorMessage={lastNameMessage}
                value={lastName}
            />
            <Input
                label="Username"
                className="w-full"
                type="text"
                variant="bordered"
                isRequired={true}
                onChange={(e) => setUsername(e.target.value)}
                isInvalid={!usernameValid}
                errorMessage={usernameMessage}
                value={username}
            />
            <Input
                label="Email"
                className="w-full"
                type="email"
                variant="bordered"
                isRequired={true}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!emailValid} errorMessage={emailMessage} 
                value={email}
                />
            <Input
                label="Password"
                variant="bordered"
                isRequired={true}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!passwordMatch}
                errorMessage={passwordMessage}
                value={password}
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>
                }
                type={isVisible ? "text" : "password"}
                className="w-[400px]"
            />
            <Input 
            label="Confirm Password" 
            className="w-full" 
            type="password" 
            variant="bordered" 
            isRequired={true} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            isInvalid={!confirmPasswordValid}
            errorMessage={confirmPasswordMessage}
            value={confirmPassword}
            />
        </div>
        <Spacer y={10} />
        <div className="flex flex-row justify-between w-[400px]">
            <Button color="warning" size="lg" className="w-fill" variant="ghost">
                Cancel
            </Button>
            <Button color="success" size="lg" className="w-fill" variant="ghost" onClick={handleSignUp}>
                GO!
            </Button>
        </div>
        <Spacer y={2} />
        <Button color="primary" size="md" className="w-fill underline" variant="light" onClick={() => { window.location.href = "/SignUp/Tenet" }}>I am a Tenet...</Button>
    </div>
}