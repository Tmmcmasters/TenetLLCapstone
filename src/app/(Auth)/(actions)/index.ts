"use server"

import createSupabaseServerCleint from "@/lib/supabase/server"
import { create } from "domain"


export async function signUpWithEmailaAndPassword(data:{
    email: string
    password: string
    firstName: string
    lastName: string
    username: string
}) {
    const supabase = await createSupabaseServerCleint()

    const result = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
            data: {
                first_name: data.firstName,
                last_name: data.lastName,
                username: data.username
            }
        }
    })

    return JSON.stringify(result);
}

export async function signInWithEmailAndPassword(data:{
    email: string
    password: string
}) {
    const supabase = await createSupabaseServerCleint();
    const result = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
    })

    return JSON.stringify(result);
}

export async function signOut() {
    const supabase = await createSupabaseServerCleint();

    const result = await supabase.auth.signOut();
}

export default async function getUserSession() {
    const supabase = await createSupabaseServerCleint()

    const result = await supabase.auth.getSession();

    // console.log(result)
    return result;
}
