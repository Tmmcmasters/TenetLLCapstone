"use server";

import { Tenet } from "@/app/(Dashboard)/Landlord/Components/Grids/types";
import createSupabaseServerCleint from "@/lib/supabase/server";


export async function GetTenetByConfirmationCode(confirmationCode: string) {
    // console.log("here")
    const supabase = await createSupabaseServerCleint();
    const { data, error } = await supabase
        .from('tenet')
        .select()
        .eq('confirmationCode', confirmationCode)
        // console.log(data)
    return JSON.stringify(data);
}

export async function UpdateTenetByTenetId(tenet: Tenet) {
    console.log("I made it to the server")
    return new Promise(async (resolve, reject) => {
        try {
            const supabase = await createSupabaseServerCleint();
            const { data, error } = await supabase
                .from('tenet')
                .update([
                    {
                        firstName: tenet.firstName,
                        lastName: tenet.lastName,
                        fullName: tenet.firstName + ' ' + tenet.lastName,
                        email: tenet.email,
                        phone: tenet.phone,
                        apartmentId: tenet.apartmentId,
                        apartmentName: tenet.apartmentName,
                        complexId: tenet.complexId,
                        complexName: tenet.complexName,
                        landlordId: tenet.landlordId,
                        address: tenet.address,
                        confirmationCode: tenet.confirmationCode,
                        modified_at: new Date().toISOString()
                    },
                ])
                .eq('id', tenet.id);

            if (error) {
                console.log(error)
                reject(error);
            }
            resolve(true);
        } catch (error) {
            console.error('Error in UpdateTenetByTenetId:', error);
            reject(error);
        }
    });
}