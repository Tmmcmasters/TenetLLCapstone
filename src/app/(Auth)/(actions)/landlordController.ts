"use server";
import { cookies } from "next/headers";
import type { Landlord } from "@/lib/types";
import createSupabaseServerCleint from "@/lib/supabase/server";

export default async function CreateLandlord(Landlord: Landlord) {
    console.log("I made it to the controller")
    const supabase = await createSupabaseServerCleint();

    const plainLandlord = JSON.parse(JSON.stringify(Landlord));

    const { data, error } = await supabase
        .from('landlord')
        .insert([
            { 
                firstName: plainLandlord.firstName,
                lastName: plainLandlord.lastName,
                userId: plainLandlord.userId,
                email: plainLandlord.email,
                fullName: plainLandlord.fullName
            },
        ])
        .select()

        // if (error) {
        //     console.log(error)
        //     return null;
        // }
        console.log("Here is the data")
        console.log(data![0])
        return JSON.stringify(data![0]);
}

export async function GetLandlordByUserId(userId: string) {
    const supabase = await createSupabaseServerCleint();
    const { data, error } = await supabase
        .from('landlord')
        .select()
        .eq('userId', userId)

        // console.log("Here is the landlord");
        // console.log(data![0]);
        return JSON.stringify(data![0]);
}