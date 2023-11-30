import {Card, CardHeader, CardBody, CardFooter, Link, Divider} from "@nextui-org/react";

export default function NotificationCard () {

    return (
        <div className="w-[95%]">
            <Card isHoverable={true} isPressable={true} className="w-full">
                <CardHeader className="flex justify-between h-[4vh]">
                    <h1>Title</h1>
                    <Link isBlock={true} underline="always">Request</Link>
                </CardHeader>
                <Divider />
                <CardBody className="flex justify-start">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vero hic mollitia nulla facere porro libero tempora illum quasi. Provident impedit eum, consequuntur eos odio nemo voluptatem temporibus nulla et.</p>
                </CardBody>
                <Divider />
                <CardFooter className="h-[4vh]">
                    <p className="text-secondary bg-secondary-50 rounded-full pr-2 pl-2">*Footer Note</p>
                </CardFooter>
            </Card>
        </div>
    )
}