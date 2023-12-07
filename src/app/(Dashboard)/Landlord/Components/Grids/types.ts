

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
    name: string;
    address: string;
    description: string;
    createdAt: string;
    modifiedAt: string;
}