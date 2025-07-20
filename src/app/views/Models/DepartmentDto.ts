export class DepartmentDto
{
    departmentName:string;
}

export class UpdateDepartmentDto
{
    id:number;
    departmentName:string;
}

export class DeleteDepartmentDto
{
    id:string;
}

export class DeptWiseEmps
{
    departId:string;
}