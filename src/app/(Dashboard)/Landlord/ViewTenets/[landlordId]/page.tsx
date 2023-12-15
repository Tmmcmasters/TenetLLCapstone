import TenetsTable from "../../Components/Grids/(Tenet)/tenetsTable";


export default function ViewTenets (
    {
        params,
    }: {
        params: {
            landlordId: number
        }
    }
) {


    return (
        <div className="flex flex-col w-full h-[93vh] justify-center items-center align-middle">
            <TenetsTable landlordId={params.landlordId}/>
        </div>
    )
}