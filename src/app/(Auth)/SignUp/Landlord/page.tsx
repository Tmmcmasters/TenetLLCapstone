"use client";

import { Button, Input, Spacer } from "@nextui-org/react";
import PasswordBox from "./components/passwordBox/PasswordBox";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, createClientComponentClient } from "@supabase/auth-helpers-nextjs";


import type { Database } from "@/lib/database.types";
import { EyeFilledIcon } from "./components/passwordBox/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./components/passwordBox/EyeSlashFilledIcon";
import { Console } from "console";
import toast from "react-hot-toast";
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

    useEffect(() => {
        async function getUser() {
            const {data: {user}} = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        }

        getUser();
    }, []);

    const supabase = createClientComponentClient<Database>();

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
        const response = await supabase.auth.signOut();
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

        var response = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
                data: {
                    first_name: firstName,
                    last_name: lastName,
                    username: username
                }
            }
        })
        console.log(response);
        if (response.error === null) {
            toast.success("Account created successfully");
            toast.success("Please check your email for a verification link", {
                duration: 5000,
                icon: "⏳",
            });
            setUser(response.data.user);
            router.refresh();
            clearFields();
            return;
        }
        toast.error(response.error.message);
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

    console.log(loading);
    console.log(user);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (user) {
        return (
            <div className="flex flex-col items-center justify-center text-center align-middle h-[85vh]">
                <h1 className="text-3xl font-semibold  mb-8">You are already logged in</h1>
                <div className="flex flex-row justify-between w-[400px] gap-3">
                    <Button color="danger" variant="ghost" size="lg" onClick={handleLogout}>Logout</Button>
                    <Button color="success" variant="ghost" size="lg">Dashboard</Button>
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