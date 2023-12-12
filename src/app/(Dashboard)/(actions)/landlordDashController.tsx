"use server";
import createSupabaseServerCleint from "@/lib/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { Complex } from "../Landlord/Components/Grids/types";

export default async function CreateApartmentComplex(complex: Complex) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("I made it to the controller create complex")
            console.log(complex)

            const supabase = await createSupabaseServerCleint();
            // const session  = await supabase.auth.getSession();
            const { data, error } = await supabase
                .from('apartment complex')
                .insert([
                    { name: complex.name, 
                        address: complex.address, 
                        description: complex.description, 
                        landlordId: complex.landlordId
                    },
                ])
                .select();

            console.log(data);
            if (error) {
                console.log(error);
                reject(error);
            }
            resolve(true);
        } catch (error) {
            console.error('Error in CreateApartmentComplex:', error);
            reject(error);
        }
    });

}
