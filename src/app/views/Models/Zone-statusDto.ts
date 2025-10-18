export class GetZoneStatusDto
{
    building_id: string;
    level: string;
    zone: string;
}

export class ZoneStatusDto
{
    building_id: string;
    level: string;
    zone: string;
    status: string;
}

export class UpdateZoneStatus
{
    id:string;
    building_id: string;
    level: string;
    zone: string;
    status: string;
}

export class DeleteZoneStatus
{
    id:string;
}