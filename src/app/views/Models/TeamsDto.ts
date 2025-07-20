export class TeamsDto
{
    teamName:string;
    employeeIds:string;
    subContId:string;
}   

export class UpdateTeamsDto
{
    id:string;
    teamName:string;
    employeeIds:string;
    subContId:string;
}

export class DeleteTeamsDto
{
    id:string;
}

export class TeamsBySubId
{
    subcontId:string;
}