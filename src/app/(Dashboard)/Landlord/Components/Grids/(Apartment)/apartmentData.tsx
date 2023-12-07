const columns = [
    {
        key: "id",
        name: "ID",
        sortable: true,
    },
    {
        key: "name",
        name: "NAME",
        sortable: true,
    },
    {
        key: "description",
        name: "DESCRIPTION",
        sortable: true,
    },
    {
        key: "address",
        name: "ADDRESS",
        sortable: true,
    },
    {
        key: "complexName",
        name: "COMPLEX",
        sortable: true,
    },
    {
        key: "actions",
        name: "ACTIONS",
    }
]



const apartments = [
    {
        id: 1, 
        complexId: 1,
        complexName: "Nice House",
        name: "Apartment 1",
        address: "123 Main St",
        description: "A beautiful apartment with 3 bedrooms and 2 bathrooms",
        createdAt: "2022-01-01",
        modifiedAt: "2022-02-01",
    },
    {
        id: 2, 
        complexId: 1,
        complexName: "Nice House",
        name: "Apartment 2",
        address: "456 Maple Ave",
        description: "A spacious apartment with 2 bedrooms and 1 bathroom",
        createdAt: "2022-01-15",
        modifiedAt: "2022-02-15",
    },
    {
        id: 2,
        complexId: 10, 
        complexName: "Complex 10",
        name: "Apartment 20",
        address: "142 Main St",
        description: "A spacious apartment with 2 bedrooms and 1 bathroom",
        createdAt: "2022-01-20",
        modifiedAt: "2022-02-20",
      },
    {
        id: 3, 
        complexId: 7,
        complexName: "Nice House",
        name: "Apartment 3",
        address: "789 Oak Dr",
        description: "A modern apartment with 1 bedroom and 1 bathroom",
        createdAt: "2022-02-01",
        modifiedAt: "2022-03-01",
    },
    {
        id: 4, 
        complexId: 5,
        complexName: "Nice House",
        name: "Apartment 4",
        address: "987 Elm St",
        description: "A modern apartment with 1 bedroom and 1 bathroom",
        createdAt: "2022-03-01",
        modifiedAt: "2022-04-01",
    },
    {
        id: 5, 
        complexId: 2,
        complexName: "Nice House",
        name: "Apartment 5",
        address: "654 Pine St",
        description: "A modern apartment with 1 bedroom and 1 bathroom",
        createdAt: "2022-04-01",
        modifiedAt: "2022-05-01",
    }, //Make sure the values are unique
    {
        id: 6, 
        complexId: 3,
        complexName: "Nice Building",
        name: "Apartment 6",
        address: "321 Cedar St",
        description: "A modern apartment with 1 bedroom and 1 bathroom",
        createdAt: "2022-05-01",
        modifiedAt: "2022-06-01",
    },
    {
        id: 7, 
        complexId: 4,
        complexName: "Nice House 4",
        name: "Apartment 7",
        address: "210 Birch St",
        description: "A modern apartment with 1 bedroom and 1 bathroom",
        createdAt: "2022-06-01",
        modifiedAt: "2022-07-01",
    },
    {
        id: 8, 
        complexId: 6,
        complexName: "Nice House 5 ",
        name: "Apartment 8",
        address: "987 Pine St",
        description: "A modern apartment with 1 bedroom and 1 bathroom",
        createdAt: "2022-07-01",
        modifiedAt: "2022-08-01",
    },
    {
        id: 9, 
        complexId: 8,
        complexName: "Nice House 6",
        name: "Apartment 9",
        address: "654 Cedar St",
        description: "A modern apartment with 1 bedroom and 1 bathroom",
        createdAt: "2022-08-01",
        modifiedAt: "2022-09-01",
    },
    {
        id: 10, 
        complexId: 9,
        complexName: "Nice House 7 ",
        name: "Apartment 10",
        address: "321 Birch St",
        description: "A modern apartment with 1 bedroom and 1 bathroom",
        createdAt: "2022-09-01",
        modifiedAt: "2022-10-01",
    },  
    {
        id: 11, 
        complexId: 10,
        complexName: "Nice House 8 ",
        name: "Apartment 11",
        address: "210 Pine St",
        description: "A modern apartment with 1 bedroom and 1 bathroom",
        createdAt: "2022-10-01",
        modifiedAt: "2022-11-01",
    },
    {
        id: 12, 
        complexId: 10,
        complexName: "Nice Hous 9",
        name: "Apartment 12",
        address: "987 Cedar St",
        description: "A modern apartment with 1 bedroom and 1 bathroom",
        createdAt: "2022-11-01",
        modifiedAt: "2022-12-01",
    },
    {
        id: 13, 
        complexId: 10,
        complexName: "Nice House",
        name: "Apartment 13",
        address: "654 Birch St",
        description: "A modern apartment with 1 bedroom and 1 bathroom",
        createdAt: "2022-12-01",
        modifiedAt: "2023-01-01",
    },
    {
        id: 14, 
        complexId: 10,
        complexName: "Nice House 3",
        name: "Apartment 14",
        address: "321 Pine St",
        description: "A modern apartment with 1 bedroom and 1 bathroom",
        createdAt: "2023-01-01",
        modifiedAt: "2023-02-01",
    },
    {
        id: 15, 
        complexId: 10,
        complexName: "Nice House 2",
        name: "Apartment 15",
        address: "210 Cedar St",
        description: "A modern apartment with 1 bedroom and 1 bathroom",
        createdAt: "2023-02-01",
        modifiedAt: "2023-03-01",
    },
    {
        id: 16, 
        complexId: 10,
        complexName: "Nice House 1",
        name: "Apartment 16",
        address: "987 Pine St",
        description: "A modern apartment with 1 bedroom and 1 bathroom",
        createdAt: "2023-03-01",
        modifiedAt: "2023-04-01",
    },
]

export {columns, apartments};