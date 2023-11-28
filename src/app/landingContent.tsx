import React from "react";
import { Button, Spacer } from "@nextui-org/react";

export default function LandingContent() {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold">
                Streamline Your Property Management
            </h1>
            <h3 className="font-default">
                The <span className="font-bold underline text-primary">Ultimate</span> Ticket System for Landlords and Tenants
            </h3>
            <div className="mt-8 flex">
                <Button color="success" variant="ghost">
                    Get Started
                </Button>
                <Spacer x={5} />
                <Button color="default" variant="ghost" >
                    User Guide
                </Button>
            </div>
        </div>
    );
}