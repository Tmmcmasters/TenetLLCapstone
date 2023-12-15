

export type Complex = {
    id: number;
    name: string;
    address: string;
    description: string;
    createdAt: string;
    modifiedAt: string;
    landlordId?: number;
}

export type Apartment = {
    id: number;
    complexId: number;
    complexNumber?: number;
    apartmentNumber?: number;
    landlordId?: number;
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
    phone: number;
    apartmentId: number;
    apartmentName: string;
    complexId: number;
    complexName: string;
    address: string;
    createdAt: string;
    modifiedAt: string;
    landlordId: number;
    confirmationCode: string;
}