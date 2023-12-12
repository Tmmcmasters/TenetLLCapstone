import createSupabaseServerCleint from "@/lib/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

// export default async function GetLandlordForDashboard() {
//     const supabase = await createSupabaseServerCleint();

//     const { data } = await supabase.auth.getSession();

//     // if (data === null) {
//     //     redirect("/Login/Landlord")
//     // }
//     console.log("Server side session: ", data.session);
//     const landlord = await GetLandlordByUserId(data.session?.user.id, supabase);
//     return landlord;
// }

//   async  function GetLandlordByUserId(userId: string | undefined, supabaseClient: SupabaseClient) {
//     if (userId === undefined) {
//         return null;
//     }
//     // const supabase = await createSupabaseServerCleint();
//     const { data, error } = await supabaseClient
//         .from('landlord')
//         .select()
//         .eq('userId', userId)

//         console.log("Here is the landlord");
//         console.log(data![0]);
//         return JSON.stringify(data![0]);
// }