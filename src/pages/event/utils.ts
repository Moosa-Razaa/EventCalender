export interface EventDetails {
    eventName: string,
    description: string,
    scheduledDate: Date
}

export enum EventStatus
{
    CREATE,
    EDIT,
    DELETE,
    READ
}