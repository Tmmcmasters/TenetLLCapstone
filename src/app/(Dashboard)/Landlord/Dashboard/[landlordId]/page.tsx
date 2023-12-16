import DashboardTickets from "../../Components/dashTickets";
import NotificationBar from "../../Components/notificationBar";
import { useEffect, useState } from "react";
import { User } from "@supabase/auth-helpers-nextjs";
import createSupabaseServerCleint from "@/lib/supabase/server";
import { redirect } from "next/navigation";




export default async function LandlordDashboard(
    {
        params,
    }: {
        params: {
            landlordId: string
        };
    }
) {
    console.log(params.landlordId)
    const supabase = await createSupabaseServerCleint();
    const {data} = await supabase.auth.getSession();
    // console.log(data)
    if (data === null) {
        redirect("/Login/Landlord")
    }



    return <div className="flex flex-row items-start justify-start h-[93vh]">
            <DashboardTickets/>
    </div>
}