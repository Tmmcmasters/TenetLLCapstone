import ComplexesTable from "../../Components/Grids/(Complex)/complexesTable";


export default function ViewComplexes (
    {
        params,
    }: {
        params: {
            landlordId: number
    }
    }
) {


    return (
        <div className="flex flex-col  h-[93vh] justify-center items-center align-middle">
            <ComplexesTable landlordId={params.landlordId}/>
        </div>
    )
}