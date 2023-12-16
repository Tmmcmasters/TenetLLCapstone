import ApartmentTable from "../../Components/Grids/(Apartment)/apartmentTable";


export default function ViewApartments ({
    params,
}: {
    params: {
        landlordId: number
}
}
) {


    return (
        <div className="flex flex-col w-full h-[93vh] justify-center items-center align-middle">
            <ApartmentTable landlordId={params.landlordId}/>
        </div>
    )
}