import React from "react"
import NotificationCard from "./notificationCard"

export default function NotificationBar () {
    return(
    <div className="flex flex-col items-center justify-start text-center border border-t-1 border-s-0 border-b-0 w-[30vw] h-[93vh] min-w-[300px] max-w-[400px]">
            <div className="border border-b-1 border-t-0 border-s-0 border-r-0 w-full h-[5vh] items-center justify-center flex flex-col text-center">
                <h1 className="text-3xl font-semibold  font-size">Notifications</h1>
            </div>
            <div className="flex flex-col items-center justify-start text-center w-full h-full overflow-auto gap-5 pt-5">
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
            </div>
    </div>
    )
}
