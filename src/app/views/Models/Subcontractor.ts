export class SubcontractorDto
{
    subContractorName:string;
    logo:string;
    // username:string;
    // password:string;
    departId:string;
}

export class UpdateSubcontractorDto
{
    id:string;
    subContractorName:string;
    logo:string;
    // username:string;
    // password:string;
    departId:string;
}

export class DeleteSubcontractorDto
{
    id:string;
}
export class MydocsDto
{
    subcontractorId:number;
}