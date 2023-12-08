


export type Ticket = {
    id: string;
    title: string;
    description: string;
    status: string;
    priority: string;
    messages: Message[];
    createdAt: string;
    modifiedAt: string;
}

export type Message = {
    id: number;
    ticketId: string;
    text: string;
    createdAt: string;
    modifiedAt: string;
}