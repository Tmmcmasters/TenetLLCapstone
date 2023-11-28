import { Input, Spacer } from "@nextui-org/react";
import PasswordBox from "./PasswordBox";

export default function LandlordLogin() {
    return <div className="flex flex-col items-center justify-center text-center gap-5">
       <Spacer y={20}/>
       <h1 className="text-2xl  mb-8">Landlord Login</h1>
       <Input type="email" label="Email" placeholder="Enter your email" className="w-[400px]"/>
       <PasswordBox  />
    </div>;
}