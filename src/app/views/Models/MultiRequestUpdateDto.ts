export class UpdateNotes
{
    Notes:string;
    id:string;
}

export class AddNotes
{
    request_id: string;
    permit_no: string;
    user_id: string;
    username: string;
    note: string;
    createdTime: string;
}

export class UpdateSafety
{
    safety:string;
    id:string;
    fields: string;
    created_time: string;
    Request_status1: string;
    userId: string;
}

export class UpdateTime
{
    Start_Time:string;
    End_Time:string;
    id:string;
    night_shift: any;
    new_end_time: string;
    logs: string;
}