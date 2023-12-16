"use server"

import createSupabaseServerCleint from "@/lib/supabase/server";
import { Tenet } from "../Landlord/Components/Grids/types";
import { exportTraceState } from "next/dist/trace";

export async function GetTenetsByLandlordId(landlordId: number) {
    // console.log("I made it to the server side");
    try {
        const supabase = await createSupabaseServerCleint();
        const { data, error } = await supabase
            .from('tenet')
            .select('*')
            .eq('landlordId', landlordId);
        if (error) {
            console.log(error);
            return error;
        }
        // console.log(data);
        return JSON.stringify(data);
    } catch (error) {
        console.error('Error in GetTenetsByLandlordId:', error);
        return error;
        // throw error;
    }
}

export async function RemoveTenetById(tenetId: number) {
    return new Promise(async (resolve, reject) => {
        try {
            const supabase = await createSupabaseServerCleint();
            const { data, error } = await supabase
                .from('tenet')
                .delete()
                .eq('id', tenetId);
            if (error) {
                console.log(error)
                reject(error);
            }
            resolve(true);
        } catch (error) {
            console.error('Error in RemoveTenetById:', error);
            reject(error);
        }
    });
}

export async function CreateTenet(tenet: Tenet) {
    return new Promise(async (resolve, reject) => {
        try {
            const supabase = await createSupabaseServerCleint();
            const { data, error } = await supabase
                .from('tenet')
                .insert([
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
                        confirmationCode: tenet.confirmationCode
                    },
                ])
                .select();

            if (error) {
                console.log(error)
                reject(error);
            }
            resolve(true);
        } catch (error) {
            console.error('Error in CreateTenet:', error);
            reject(error);
        }
    });
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

export async function GetApartmentsByComplexId(complexId: number) {
    // console.log("I made it to the server side");
    try {
        const supabase = await createSupabaseServerCleint();
        const { data, error } = await supabase
            .from('apartment')
            .select('*')
            .eq('complexNumber', complexId);
        if (error) {
            console.log(error);
            return null;
        }
        // console.log(data);
        return JSON.stringify(data);
    } catch (error) {
        console.error('Error in GetApartmentsByComplexId:', error);
        return null;
        // throw error;
    }
}