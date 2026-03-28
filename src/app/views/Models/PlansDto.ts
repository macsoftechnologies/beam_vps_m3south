export class PlansDto
{
    Sub_Contractor_Id:number;
    Site_Id:number;
    Month:string;
    Week:string;
    Date:string;
    Year:string;
    Room_Type: string

   // Plans_Id:number;
    Building_Id:number;
    from_date:string;
    to_date:string;
    start_time:string;
    end_time:string;
    area: string;
    permit_type: '';
    night_shift: string;
    new_date: string;
    new_end_time: string;
    permit_under: string;
    hras: string;
    Request_status: string;
}