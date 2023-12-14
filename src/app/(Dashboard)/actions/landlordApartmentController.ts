"use server"

import createSupabaseServerCleint from "@/lib/supabase/server";
import { Apartment } from "../Landlord/Components/Grids/types";

export async function CreateApartment(apartment: Apartment) {
    // console.log("I made it to the server side");
    // console.log(apartment)
    return new Promise(async (resolve, reject) => {
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
                console.log(error)
                reject(error);
            }
            resolve(true);
        } catch (error) {
            console.error('Error in CreateApartment:', error);
            reject(error);
        }
    });
}

export async function GetApartmentsByLandlordId(landlordId: number) {
    // console.log("I made it to the server side");
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

export async function RemoveApartmentById(apartmentId: number) {
    return new Promise(async (resolve, reject) => {
        try {
            const supabase = await createSupabaseServerCleint();
            const { data, error } = await supabase
                .from('apartment')
                .delete()
                .eq('id', apartmentId);
            if (error) {
                console.log(error);
                reject(error);
            }
            resolve(true);
        } catch (error) {
            console.error('Error in RemoveApartmentById:', error);
            reject(error);
        }
    });
}

export async function UpdateApartmentById(apartment:Apartment) {
    return new Promise(async (resolve, reject) => {
        try {
            const supabase = await createSupabaseServerCleint();
            const { data, error } = await supabase
                .from('apartment')
                .update({
                        complexNumber: apartment.complexId,
                        apartmentNumber: apartment.apartmentNumber,
                        name: apartment.name,
                        address: apartment.address,
                        description: apartment.description,
                        // landlordId: apartment.landlordId,
                        complexName: apartment.complexName,
                        modified_at: new Date().toISOString()
                })
                .eq('id', apartment.id);
            if (error) {
                console.log(error);
                reject(error);
            }
            resolve(true);
        } catch (error) {
            console.error('Error in UpdateApartmentById:', error);
            reject(error);
        }
    })
}