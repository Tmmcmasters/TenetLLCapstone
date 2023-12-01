import React from "react";
import { Button, Spacer, Link, Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

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
                <Button color="success" variant="ghost" as={Link} href="/SignUp/WhoAreYou">
                    Get Started
                </Button>
                <Spacer x={5} />
                <Button color="default" variant="ghost" >
                    User Guide
                </Button>
            </div>
            <Spacer y={32} />
            <div className="flex flex-row flex-wrap gap-5">
                <Card className="min-w-[400px] w-[25vw]">
                    <CardHeader className="font-bold text-lg">
                        Custom Invite Codes
                    </CardHeader>
                    <CardBody>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ex perferendis provident nihil! Voluptatem molestiae maxime itaque saepe. Repellat veritatis deleniti velit iusto voluptates autem soluta harum dolores minus obcaecati?
                    </CardBody>
                    <CardFooter>

                    </CardFooter>
                </Card>

                <Card className="min-w-[400px] w-[25vw]">
                    <CardHeader className="font-bold text-lg">
                        Track Complexes and Apartments
                    </CardHeader>
                    <CardBody>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga maiores exercitationem earum quos, praesentium illum recusandae ipsam corporis dolorum? Delectus laborum quas obcaecati laudantium temporibus reprehenderit maiores, dolorem dolore?
                    </CardBody>
                    <CardFooter>

                    </CardFooter>
                </Card>

                <Card className="min-w-[400px] w-[25vw]">
                    <CardHeader className="font-bold text-lg">
                        Track Apartments and Tenets
                    </CardHeader>
                    <CardBody>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sed, neque laudantium officia exercitationem laboriosam, fuga molestias doloribus ratione earum reiciendis sequi cupiditate enim rerum inventore beatae illum dolorem! Asperiores.
                    </CardBody>
                    <CardFooter>

                    </CardFooter>
                </Card>
            </div>
            <Spacer y={12} />
            <Card className="max-w-[75vw]">
                <CardHeader className="font-bold text-lg">
                    <p>Ticket Dashboard</p>
                </CardHeader>
                <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam id doloremque hic perferendis nam temporibus modi, beatae sequi voluptatum! Laboriosam perspiciatis vitae libero dolorem natus esse iste cumque error.
                </CardBody>
                <CardFooter>

                </CardFooter>
            </Card>
        </div>
    );
}