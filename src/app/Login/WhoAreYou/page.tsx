import { Spacer } from "@nextui-org/react";
import LandlordCard from "./landlordCard";
import TenetCard from "./tenetCard";

export default function WhoAreYou() {
    return <div className="flex flex-col items-center justify-center text-center gap-5">
        <Spacer y={20} />
        <h1 className="text-2xl  mb-8">
            Are you a Landlord or a Tenant?
        </h1>
        <div className="flex flex-col md:flex-row justify-center   gap-20 md:gap-40">
        <LandlordCard />
        <TenetCard />
        </div>
        <Spacer y={20} />
    </div>;
}