"use client"
import React from "react"
import {Card, CardHeader, CardBody, CardFooter, Button, Image} from "@nextui-org/react"

export default function LandlordCard() {
    return (
        <Card className="w-[400px] bg-background/60">
            <CardBody className="overflow-visible p-0">
                <Image
                    alt="Landlord"
                    src="/landlord.png"
                    className="w-full object-cover h-[250px]"
                    width="100%"
                    height="100%"
                />
            </CardBody>
            <CardFooter className="justify-center">
                <Button color="primary" size="md" className="w-fill" variant="ghost" onClick={() => {window.location.href = "/SignUp/Landlord"}}>
                    I am a LandLord!
                </Button>
            </CardFooter>
        </Card>
    )
}