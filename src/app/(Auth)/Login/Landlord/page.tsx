"use client"
import { Input, Spacer, Button } from "@nextui-org/react";
import PasswordBox from "./PasswordBox";
import { useRouter } from "next/navigation";
import { Database } from "@/lib/database.types";
import { User, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import toast from "react-hot-toast";

export default function LandlordLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    const router = useRouter()
    const supabase = createClientComponentClient<Database>()

    useEffect(() => {
        async function getUser() {
            const {data: {user}} = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        }

        getUser();
    }, []);

    const handleLogout = async () => {
        const response = await supabase.auth.signOut();
        setUser(null);
        router.refresh();
    }


    const handleSignIn = async () => {
        var response = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        console.log(response)
        if (response.error === null) {
            toast.success('Login successful')
            setUser(response.data.user)
            router.refresh()
            return;
        }
        toast.error(response.error.message)
        router.refresh()
    }

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const clearFields = () => {
        setEmail('')
        setPassword('')
    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (user) {
        return (
            <div className="flex flex-col items-center justify-center text-center align-middle h-[85vh]">
                <h1 className="text-3xl font-semibold  mb-8">You are already logged in</h1>
                <div className="flex flex-row justify-between w-[400px] gap-3">
                    <Button color="danger" variant="bordered" size="lg" onClick={handleLogout}>Logout</Button>
                    <Button color="success" variant="bordered" size="lg">Dashboard</Button>
                    </div>
            </div>
        )
    }
    return <div className="flex flex-col items-center justify-center text-center gap-5">
        <Spacer y={20} />
        <h1 className="text-3xl font-semibold  mb-8">Landlord Login</h1>
        <Input 
        type="email" 
        label="Email" 
        placeholder="Enter your email" 
        className="w-[400px]" 
        variant="bordered" 
        isRequired={true} 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}/>
        <Input
            label="Password"
            variant="bordered"
            isRequired={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <div className="flex flex-row justify-between w-[400px]">
            <Button color="warning" size="lg" className="w-fill" variant="ghost">
                Cancel
            </Button>
            <Button color="success" size="lg" className="w-fill" variant="ghost" onClick={handleSignIn}>
                GO!
            </Button>

        </div>
        <div className="flex flex-row justify-center w-[400px]">
            <Button color="primary" size="md" className="w-fill underline" variant="light" onClick={() => { window.location.href = "/Login/Tenet" }}>I am a tenet...</Button>
        </div>
    </div>
}