"use client"
import { Input, Spacer, Button, Link } from "@nextui-org/react";
import PasswordBox from "./PasswordBox";
import { useRouter } from "next/navigation";
import { Database } from "@/lib/database.types";
import { User } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import toast from "react-hot-toast";
import getUserSession, { signInWithEmailAndPassword, signOut } from "../../(actions)";
import { GetLandlordByUserId } from "../../(actions)/landlordController";
import { Landlord } from "@/lib/types";

export default function LandlordLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [landlordId, setLandlordId] = useState("")
    
    const router = useRouter()
    // const supabase = createClientComponentClient<Database>()
    
    useEffect(() => {
        
        async function getUser() {
            const userSession = await getUserSession();
            // console.log(userSession)
            // console.log(userSession.data.session?.user)
            await setUser(userSession.data.session?.user ?? null);
            
            
            setLoading(false);
        }
        
        getUser();
    }, []);
    
    useEffect(() => {
        if (user) {
            getLandlord(user.id);
        }
    }, [user]);
    
    const handleLogout = async () => {
        const response = await signOut();
        setUser(null);
        router.refresh();
    }


    const handleSignIn = async () => {
        var response = await signInWithEmailAndPassword({
            email,
            password
        })
        // console.log(response)
        var result = JSON.parse(response)
        if (result.error === null) {
            toast.success('Login successful')
            setUser(result.data.user)
            router.refresh()
            return;
        }
        toast.error(result.error.message)
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

    async function getLandlord(userId: string) {
        const response = await GetLandlordByUserId(userId);
        const result = JSON.parse(response)

        setLandlordId(result.id);
    }


    if (user) {
        // console.log(user);



        return (
            <div className="flex flex-col items-center justify-center text-center align-middle h-[85vh]">
                <h1 className="text-3xl font-semibold  mb-8">You are already logged in</h1>
                <div className="flex flex-row justify-between w-[400px] gap-3">
                    <Button color="danger" variant="bordered" size="lg" onClick={handleLogout}>Logout</Button>
                    <Button as={Link} color="success" variant="bordered" size="lg" href={`/Landlord/Dashboard/${landlordId}`}>Dashboard</Button>
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
            onChange={(e) => setEmail(e.target.value)} />
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