

export type Complex = {
    id: number;
    name: string;
    address: string;
    description: string;
    createdAt: string;
    modifiedAt: string;
}

export type Apartment = {
    id: number;
    complexId: number;
    complexName: string;
    name: string;
    address: string;
    description: string;
    createdAt: string;
    modifiedAt: string;
}

export type Tenet = {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    phone: string;
    apartmentId: number;
    apartmentName: string;
    complexId: number;
    complexName: string;
    address: string;
    createdAt: string;
    modifiedAt: string;
}