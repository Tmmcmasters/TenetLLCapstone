"use server"

import createSupabaseServerCleint from "@/lib/supabase/server";
import { Apartment } from "../Landlord/Components/Grids/types";

export async function CreateApartment(apartment: Apartment) {
    try {
        const supabase = await createSupabaseServerCleint();
        const { data, error } = await supabase
        .from('apartment')
        .insert([
            { 
                    complexNumber: apartment.complexId,
                    apartmentNumber: apartment.apartmentNumber,
                    name: apartment.name, 
                    address: apartment.address, 
                    description: apartment.description, 
                    landlordId: apartment.landlordId,
                    complexName: apartment.complexName
                },
            ])
            .select();
            if (error) {
            console.log(error);
        }
        console.log(data);
        return JSON.stringify(data);
    } catch (error) {
        console.error('Error in CreateApartment:', error);
        return error;
    }
}

export async function GetApartmentsByLandlordId(landlordId: number) {
    console.log("I made it to the server side");
    try {
        const supabase = await createSupabaseServerCleint();
        const { data, error } = await supabase
            .from('apartment')
            .select('*')
            .eq('landlordId', landlordId);
        if (error) {
            console.log(error);
            return error;
        }
        // console.log(data);
        return JSON.stringify(data);
    } catch (error) {
        console.error('Error in GetApartmentsByLandlordId:', error);
        return error;
        // throw error;
    }
}