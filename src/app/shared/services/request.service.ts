import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { RequestDto, EditRequestDto, DeleteRequestDto, UpdateRequestStatusListDto, CopyRequestDto, UpdateClose_Status, RequestsbyId, RequestBySubcontractorId, DeleteMultiRequestDto } from 'app/views/Models/RequestDto';
import { PlansDto } from 'app/views/Models/PlansDto';
import { SearchRequestDto } from 'app/views/Models/SearchRequestDto';
import { UpdateNotes, UpdateSafety, UpdateTime } from 'app/views/Models/MultiRequestUpdateDto';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  SelectedRequestData: any = {};
  bulidingFloorData: any = [];

  catDialogservice = new EventEmitter<any>();
  DeleteActivityEmitter = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

    bulidingDataWithIds() {
    this.bulidingFloorData = [
      {
        buildingId: '13',
        planType: "JF - Ground Floor",
        zoneList: [
          {
            floorName: 'ZONE A',
            zoneSubList: [
              {
                value: 'S.102',
                className: "zoneA-1",
                isSelected: false
              },
              {
                value: 'S.106',
                className: "zoneA-2",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'ZONE B',
            zoneSubList: [
              {
                value: 'TR02.S',
                className: "zoneB-1",
                isSelected: false,
              },
              {
                value: 'EL02.S',
                className: "zoneB-2",
                isSelected: false,
              },
              {
                value: 'S.218',
                className: "zoneB-3",
                isSelected: false,
              },
              {
                value: 'S.216',
                className: "zoneB-4",
                isSelected: false,
              },
              {
                value: 'S.214',
                className: "zoneB-5",
                isSelected: false,
              },
              {
                value: 'S.212',
                className: "zoneB-6",
                isSelected: false,
              },
              {
                value: 'S.210',
                className: "zoneB-7",
                isSelected: false,
              },
              {
                value: 'S.208',
                className: "zoneB-8",
                isSelected: false,
              },
              {
                value: 'S.207',
                className: "zoneB-9",
                isSelected: false,
              },
              {
                value: 'S.206',
                className: "zoneB-10",
                isSelected: false,
              },
              {
                value: 'S.204',
                className: "zoneB-11",
                isSelected: false,
              },
              {
                value: 'S.552',
                className: "zoneB-12",
                isSelected: false,
              },
              {
                value: 'S.202',
                className: "zoneB-13",
                isSelected: false,
              },
              {
                value: 'TR01.S',
                className: "zoneB-14",
                isSelected: false,
              },
              {
                value: 'S.550',
                className: "zoneB-15",
                isSelected: false,
              },
              {
                value: 'EL01.S',
                className: "zoneB-16",
                isSelected: false,
              },
              {
                value: 'S.201',
                className: "zoneB-17",
                isSelected: false,
              }

            ]
          },
          {
            floorName: 'ZONE C',
            zoneSubList: [
              {
                value: 'PAU-301-06',
                className: "zoneC-1",
                isSelected: false,
              },
              {
                value: 'PAU-301-05',
                className: "zoneC-2",
                isSelected: false,
              },
              {
                value: 'PAU-301-04',
                className: "zoneC-3",
                isSelected: false,
              },
              {
                value: 'PAU-301-03',
                className: "zoneC-4",
                isSelected: false,
              },
              {
                value: 'PAU-301-02',
                className: "zoneC-5",
                isSelected: false,
              },
              {
                value: 'S.540',
                className: "zoneC-6",
                isSelected: false,
              },
              {
                value: 'S.542',
                className: "zoneC-7",
                isSelected: false,
              },
              {
                value: 'S.554',
                className: "zoneC-8",
                isSelected: false,
              },
              {
                value: 'S.546',
                className: "zoneC-9",
                isSelected: false,
              },
              {
                value: 'S.556',
                className: "zoneC-10",
                isSelected: false,
              },
              {
                value: 'S.558',
                className: "zoneC-11",
                isSelected: false,
              },
              {
                value: 'S.560',
                className: "zoneC-12",
                isSelected: false,
              },
              {
                value: 'S.562',
                className: "zoneC-13",
                isSelected: false,
              },
              {
                value: 'S.501',
                className: "zoneC-14",
                isSelected: false,
              },
              {
                value: 'PAU-292-01',
                className: "zoneC-15",
                isSelected: false,
              },
              {
                value: 'PAU-251-01',
                className: "zoneC-16",
                isSelected: false,
              },
              {
                value: 'PAU-241-01',
                className: "zoneC-17",
                isSelected: false,
              },
              {
                value: 'PAU-231-01',
                className: "zoneC-18",
                isSelected: false,
              },
              {
                value: 'PAU-291-01',
                className: "zoneC-19",
                isSelected: false,
              },
              {
                value: 'PAU-153-01',
                className: "zoneC-20",
                isSelected: false,
              },
              {
                value: 'PAU-221-01',
                className: "zoneC-21",
                isSelected: false,
              }
            ]
          },
          {
            floorName: 'ZONE D',
            zoneSubList: [
              {
                value: 'TR03.S',
                className: "zoneD-1",
                isSelected: false
              },
              {
                value: 'S.336',
                className: "zoneD-2",
                isSelected: false
              },
              {
                value: 'S.334',
                className: "zoneD-3",
                isSelected: false
              },
              {
                value: 'S.330',
                className: "zoneD-4",
                isSelected: false
              },
              {
                value: 'S.332',
                className: "zoneD-5",
                isSelected: false
              },
              {
                value: 'S.322',
                className: "zoneD-6",
                isSelected: false
              },
              {
                value: 'S.324',
                className: "zoneD-7",
                isSelected: false
              },
              {
                value: 'S.320',
                className: "zoneD-8",
                isSelected: false
              },
              {
                value: 'S.316',
                className: "zoneD-9",
                isSelected: false
              },
              {
                value: 'S.314',
                className: "zoneD-10",
                isSelected: false
              },
              {
                value: 'S.315',
                className: "zoneD-11",
                isSelected: false
              },
              {
                value: 'S.312',
                className: "zoneD-12",
                isSelected: false
              },
              {
                value: 'S.310.1',
                className: "zoneD-13",
                isSelected: false
              },
              {
                value: 'S.310',
                className: "zoneD-14",
                isSelected: false
              },
              {
                value: 'S.306',
                className: "zoneD-15",
                isSelected: false
              },
              {
                value: 'S.302',
                className: "zoneD-16",
                isSelected: false
              },
              {
                value: 'S.304',
                className: "zoneD-17",
                isSelected: false
              },
              {
                value: 'S.304.4',
                className: "zoneD-18",
                isSelected: false
              },
              {
                value: 'S.304.3',
                className: "zoneD-19",
                isSelected: false
              },
              {
                value: 'S.304.2',
                className: "zoneD-20",
                isSelected: false,
              },
              {
                value: 'S.304.1',
                className: "zoneD-21",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'ZONE E',
            zoneSubList: [
              {
                value: '111X',
                className: "zoneE-1",
                isSelected: false
              },
              {
                value: 'PAU-112-01',
                className: "zoneE-2",
                isSelected: false
              },
              {
                value: 'S.512',
                className: "zoneE-3",
                isSelected: false
              },
              {
                value: 'S.510',
                className: "zoneE-4",
                isSelected: false
              },
              {
                value: 'PAU-312-01',
                className: "zoneE-5",
                isSelected: false
              },
              {
                value: 'PAU-312-02',
                className: "zoneE-6",
                isSelected: false
              },
              {
                value: 'PAU-312-03',
                className: "zoneE-7",
                isSelected: false
              },
              {
                value: '312F',
                className: "zoneE-8",
                isSelected: false
              },
              {
                value: '312G',
                className: "zoneE-9",
                isSelected: false
              },
              {
                value: 'PAU-312-04',
                className: "zoneE-10",
                isSelected: false
              },
              {
                value: 'PAU-313-02',
                className: "zoneE-11",
                isSelected: false
              },
              {
                value: 'PAU-313-01',
                className: "zoneE-12",
                isSelected: false
              },
              {
                value: 'S.528',
                className: "zoneE-13",
                isSelected: false
              },
              {
                value: 'S.530',
                className: "zoneE-14",
                isSelected: false
              },
              {
                value: 'S.532',
                className: "zoneE-15",
                isSelected: false
              },
              {
                value: 'S.534',
                className: "zoneE-16",
                isSelected: false
              },
              {
                value: 'S.536',
                className: "zoneE-17",
                isSelected: false
              },
              {
                value: 'S.537',
                className: "zoneE-18",
                isSelected: false
              },
              {
                value: 'S.539',
                className: "zoneE-19",
                isSelected: false
              },
              {
                value: 'S.538',
                className: "zoneE-20",
                isSelected: false
              },
              {
                value: 'PAU-311-02',
                className: "zoneE-21",
                isSelected: false
              },
              {
                value: 'PAU-311-01',
                className: "zoneE-22",
                isSelected: false
              },
              {
                value: 'PAU-191-01',
                className: "zoneE-23",
                isSelected: false
              },
              {
                value: 'PAU-061-02',
                className: "zoneE-24",
                isSelected: false
              },
              {
                value: '063/064-01',
                className: "zoneE-25",
                isSelected: false
              },
              {
                value: '105C',
                className: "zoneE-26",
                isSelected: false
              },
              {
                value: 'PAU-392-01',
                className: "zoneE-27",
                isSelected: false
              },
              {
                value: 'PAU-391-01',
                className: "zoneE-28",
                isSelected: false
              },
              {
                value: 'PAU-105-01',
                className: "zoneE-29",
                isSelected: false
              },
              {
                value: 'PAU-301-01',
                className: "zoneE-30",
                isSelected: false
              }


            ]
          },
          {
            floorName: 'ZONE F1',
            zoneSubList: [
              {
                value: 'S.404',
                className: "zoneF1-1",
                isSelected: false
              },
              {
                value: 'S.406',
                className: "zoneF1-2",
                isSelected: false
              },
              {
                value: 'S.412.1',
                className: "zoneF1-3",
                isSelected: false
              },
              {
                value: 'S.338',
                className: "zoneF1-4",
                isSelected: false
              },
              {
                value: 'S.504',
                className: "zoneF1-5",
                isSelected: false
              },
              {
                value: 'S.503',
                className: "zoneF1-6",
                isSelected: false
              },
              {
                value: 'S.507',
                className: "zoneF1-7",
                isSelected: false
              },
              {
                value: 'S.509',
                className: "zoneF1-8",
                isSelected: false
              },


            ]
          },
          {
            floorName: 'ZONE F2',
            zoneSubList: [
              {
                value: 'TR05.S',
                className: "zoneF2-1",
                isSelected: false
              },
              {
                value: 'S.602',
                className: "zoneF2-2",
                isSelected: false
              },
              {
                value: 'S.606',
                className: "zoneF2-3",
                isSelected: false
              },
              {
                value: 'S.604',
                className: "zoneF2-4",
                isSelected: false
              },
              {
                value: 'S.608',
                className: "zoneF2-5",
                isSelected: false
              },
              {
                value: 'EL03.S',
                className: "zoneF2-6",
                isSelected: false
              },
              {
                value: 'TR06.S',
                className: "zoneF2-7",
                isSelected: false
              },
              {
                value: 'S.402',
                className: "zoneF2-8",
                isSelected: false
              },
              {
                value: 'S.410',
                className: "zoneF2-9",
                isSelected: false
              },
              {
                value: 'S.408',
                className: "zoneF2-10",
                isSelected: false
              },
              {
                value: 'S.412.1',
                className: "zoneF2-11",
                isSelected: false
              },
              {
                value: 'S.411',
                className: "zoneF2-12",
                isSelected: false
              }

            ]
          },
        ]
      },
      {
        buildingId: '13',
        planType: "JF - 1st Floor",
        zoneList: [
          {
            floorName: 'ZONE A',
            zoneSubList: [
              {
                value: '1.104',
                className: "first-zoneA-1",
                isSelected: false
              },
              {
                value: '1.102',
                className: "first-zoneA-2",
                isSelected: false
              },
              {
                value: '1.105',
                className: "first-zoneA-3",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE B',
            zoneSubList: [
              {
                value: 'TR02.1',
                className: "first-zoneB-1",
                isSelected: false
              },
              {
                value: '1.220',
                className: "first-zoneB-2",
                isSelected: false
              },
              {
                value: 'EL02.1',
                className: "first-zoneB-3",
                isSelected: false
              },
              {
                value: '1.228',
                className: "first-zoneB-4",
                isSelected: false
              },
              {
                value: '1.226',
                className: "first-zoneB-5",
                isSelected: false
              },
              {
                value: '1.224',
                className: "first-zoneB-6",
                isSelected: false
              },
              {
                value: '1.222',
                className: "first-zoneB-7",
                isSelected: false
              },
              {
                value: '1.218',
                className: "first-zoneB-8",
                isSelected: false
              },
              {
                value: '1.218.4',
                className: "first-zoneB-9",
                isSelected: false
              },
              {
                value: '1.218.3',
                className: "first-zoneB-10",
                isSelected: false
              },
              {
                value: '1.218.2',
                className: "first-zoneB-11",
                isSelected: false
              },
              {
                value: '1.218.1',
                className: "first-zoneB-12",
                isSelected: false
              },
              {
                value: '1.210',
                className: "first-zoneB-13",
                isSelected: false
              },
              // {
              //   value: 'TR01.S',
              //   className: "first-zoneB-14",
              //   isSelected: false
              // },
              {
                value: '1.208',
                className: "first-zoneB-14",
                isSelected: false
              },
              {
                value: '1.552',
                className: "first-zoneB-15",
                isSelected: false
              },
              {
                value: '1.206',
                className: "first-zoneB-16",
                isSelected: false
              },
              {
                value: '1.550',
                className: "first-zoneB-17",
                isSelected: false
              },
              {
                value: 'TR01.1',
                className: "first-zoneB-18",
                isSelected: false
              },
              {
                value: '1.204',
                className: "first-zoneB-19",
                isSelected: false
              },
              {
                value: 'EL01.1',
                className: "first-zoneB-20",
                isSelected: false
              },
              {
                value: '1.202',
                className: "first-zoneB-21",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE C',
            zoneSubList: [
              {
                value: '1.544',
                className: "first-zoneC-1",
                isSelected: false
              },
              {
                value: '1.540',
                className: "first-zoneC-2",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'ZONE D',
            zoneSubList: [
              {
                value: 'TR03.1',
                className: "first-zoneD-1",
                isSelected: false
              },
              {
                value: '1.328',
                className: "first-zoneD-2",
                isSelected: false
              },
              {
                value: '1.326',
                className: "first-zoneD-3",
                isSelected: false
              },
              {
                value: '1.320',
                className: "first-zoneD-4",
                isSelected: false
              },
              {
                value: '1.324',
                className: "first-zoneD-5",
                isSelected: false
              },
              {
                value: '1.323',
                className: "first-zoneD-6",
                isSelected: false
              },
              {
                value: '1.322',
                className: "first-zoneD-7",
                isSelected: false
              },
              {
                value: '1.316',
                className: "first-zoneD-8",
                isSelected: false
              },
              {
                value: '1.314',
                className: "first-zoneD-9",
                isSelected: false
              },
              {
                value: '1.310',
                className: "first-zoneD-10",
                isSelected: false
              },
              {
                value: '1.312',
                className: "first-zoneD-11",
                isSelected: false
              },
              {
                value: '1.308',
                className: "first-zoneD-12",
                isSelected: false
              },
              {
                value: '1.307',
                className: "first-zoneD-13",
                isSelected: false
              },
              {
                value: '1.306',
                className: "first-zoneD-14",
                isSelected: false
              },
              {
                value: '1.305',
                className: "first-zoneD-15",
                isSelected: false
              },
              {
                value: '1.220',
                className: "first-zoneD-16",
                isSelected: false
              },
              {
                value: '1.302',
                className: "first-zoneD-17",
                isSelected: false
              },
              {
                value: '1.304',
                className: "first-zoneD-18",
                isSelected: false
              },
              {
                value: '1.302.2',
                className: "first-zoneD-19",
                isSelected: false
              },
              {
                value: '1.302.1',
                className: "first-zoneD-20",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE E',
            zoneSubList: [
              {
                value: '1.532',
                className: "first-zoneE-1",
                isSelected: false
              },
              {
                value: '1.530',
                className: "first-zoneE-2",
                isSelected: false
              },
              {
                value: 'PAU-313',
                className: "first-zoneE-3",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE F1',
            zoneSubList: [
              {
                value: '1.338',
                className: "first-zoneF1-1",
                isSelected: false
              },
              {
                value: '1.502',
                className: "first-zoneF1-2",
                isSelected: false
              },
              {
                value: '1.504',
                className: "first-zoneF1-3",
                isSelected: false
              },
              {
                value: 'TR04.1',
                className: "first-zoneF1-4",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE F2',
            zoneSubList: [
              {
                value: 'TR05.1',
                className: "first-zoneF2-1",
                isSelected: false
              },
              {
                value: '1.616',
                className: "first-zoneF2-2",
                isSelected: false
              },
              {
                value: 'EL03.1',
                className: "first-zoneF2-3",
                isSelected: false
              },
              {
                value: ' TR06._',
                className: "first-zoneF2-4",
                isSelected: false
              },
              {
                value: '1.602',
                className: "first-zoneF2-5",
                isSelected: false
              },
              {
                value: '1.404',
                className: "first-zoneF2-6",
                isSelected: false
              },
              {
                value: '1.402',
                className: "first-zoneF2-7",
                isSelected: false
              },
              {
                value: '1.604',
                className: "first-zoneF2-8",
                isSelected: false
              },
              {
                value: '1.606',
                className: "first-zoneF2-9",
                isSelected: false
              },
              {
                value: '1.410',
                className: "first-zoneF2-10",
                isSelected: false
              },
              {
                value: '1.608',
                className: "first-zoneF2-11",
                isSelected: false
              },
              {
                value: '1.610',
                className: "first-zoneF2-12",
                isSelected: false
              },
              {
                value: '1.412',
                className: "first-zoneF2-13",
                isSelected: false
              },
              {
                value: '1.414',
                className: "first-zoneF2-14",
                isSelected: false
              },
              {
                value: '1.614',
                className: "first-zoneF2-15",
                isSelected: false
              }
            ]
          },
        ]
      },
      {
        buildingId: '13',
        planType: "JF- 2nd Floor",
        zoneList: [
          {
            floorName: 'ZONE A',
            zoneSubList: [
              {
                value: 'ZONE A',
                className: "second-zoneA",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'ZONE B',
            zoneSubList: [
              {
                value: ' TR02.2',
                className: "second-zoneB-1",
                isSelected: false
              },
              {
                value: 'EL02.2',
                className: "second-zoneB-2",
                isSelected: false
              },
              {
                value: 'JF5743',
                className: "second-zoneB-3",
                isSelected: false
              },
              {
                value: '2.202',
                className: "second-zoneB-4",
                isSelected: false
              },
              {
                value: 'JF5745',
                className: "second-zoneB-5",
                isSelected: false
              },
              {
                value: 'JF5744',
                className: "second-zoneB-6",
                isSelected: false
              },
              {
                value: 'TR01.2',
                className: "second-zoneB-7",
                isSelected: false
              },
              {
                value: 'EL01.2',
                className: "second-zoneB-8",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE C',
            zoneSubList: [
              {
                value: '2.501',
                className: "second-zoneC-1",
                isSelected: false
              },
              {
                value: '2.550',
                className: "second-zoneC-2",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE D',
            zoneSubList: [
              {
                value: 'TR03.2',
                className: "second-zoneD-1",
                isSelected: false
              },
              {
                value: 'JF5741',
                className: "second-zoneD-2",
                isSelected: false
              },
              {
                value: 'JF5746',
                className: "second-zoneD-3",
                isSelected: false
              },
              {
                value: 'JF5742',
                className: "second-zoneD-4",
                isSelected: false
              },
              {
                value: '2.302',
                className: "second-zoneD-5",
                isSelected: false
              },
              {
                value: '2.300',
                className: "second-zoneD-6",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE E',
            zoneSubList: [
              {
                value: '2.501',
                className: "second-zoneE-1",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'ZONE F1',
            zoneSubList: [
              {
                value: '2.402',
                className: "second-zoneF1-1",
                isSelected: false
              },
              {
                value: '2.502',
                className: "second-zoneF1-2",
                isSelected: false
              },
              {
                value: 'TR04.2',
                className: "second-zoneF1-3",
                isSelected: false
              },
              {
                value: '2.503',
                className: "second-zoneF1-4",
                isSelected: false
              },
              {
                value: '2.509',
                className: "second-zoneF1-5",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE F2',
            zoneSubList: [
              {
                value: 'TR05.2',
                className: "second-zoneF2-1",
                isSelected: false
              },
              {
                value: '2.602',
                className: "second-zoneF2-2",
                isSelected: false
              },
              {
                value: 'JF5740',
                className: "second-zoneF2-3",
                isSelected: false
              },
              {
                value: '2.402',
                className: "second-zoneF2-4",
                isSelected: false
              },
              {
                value: '2.410',
                className: "second-zoneF2-5",
                isSelected: false
              },
              {
                value: '2.606',
                className: "second-zoneF2-6",
                isSelected: false
              },
              {
                value: '2.612',
                className: "second-zoneF2-7",
                isSelected: false
              },
              {
                value: '2.608',
                className: "second-zoneF2-8",
                isSelected: false
              },
              {
                value: 'EL03.2',
                className: "second-zoneF2-9",
                isSelected: false
              },
              {
                value: 'TR06.1',
                className: "second-zoneF2-10",
                isSelected: false
              },
              {
                value: '2.610',
                className: "second-zoneF2-11",
                isSelected: false
              },
              {
                value: '2.604',
                className: "second-zoneF2-12",
                isSelected: false
              },
              {
                value: '2.601',
                className: "second-zoneF2-13",
                isSelected: false
              },
              {
                value: '2.411',
                className: "second-zoneF2-14",
                isSelected: false
              },
              {
                value: '2.415',
                className: "second-zoneF2-15",
                isSelected: false
              }
            ]
          },
        ]
      },
      {
        buildingId: '13',
        planType: "JF - Roof Plan",
        zoneList: [
          {
            floorName: 'ZONE A',
            zoneSubList: [
              {
                value: 'ZONE A',
                className: "roof-zoneA",
                isSelected: false
              },
            ]
          },
          {
            floorName: 'ZONE B',
            zoneSubList: [
              {
                value: 'ZONE B',
                className: "roof-zoneB",
                isSelected: false
              },
              {
                value: 'DT-3.TR01.3.EXT',
                className: "roof-zoneB-1",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'ZONE C',
            zoneSubList: [
              {
                value: 'ZONE C',
                className: "roof-zoneC",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'ZONE D',
            zoneSubList: [
              {
                value: 'ZONE D',
                className: "roof-zoneD",
                isSelected: false
              },
            ]
          },
          {
            floorName: 'ZONE E',
            zoneSubList: [
              {
                value: 'ZONE E',
                className: "roof-zoneE",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'ZONE F1',
            zoneSubList: [
              {
                value: 'ZONE F1',
                className: "roof-zoneF1",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'ZONE F2',
            zoneSubList: [
              {
                value: 'ZONE F2',
                className: "roof-zoneF2",
                isSelected: false
              },
            ]
          },
        ]
      },
      {
        buildingId: '14',
        planType: "External Areas",
        zoneList: [
          {
            floorName: 'JE',
            zoneSubList: [
              {
                value: 'Area JE/1',
                className: "external-areas-je-1",
                isSelected: false
              },
              {
                value: 'Area JE/2',
                className: "external-areas-je-2",
                isSelected: false
              },
              {
                value: 'Area JE/3',
                className: "external-areas-je-3",
                isSelected: false
              },
              {
                value: 'Area JE/4',
                className: "external-areas-je-4",
                isSelected: false
              },
              {
                value: 'Area JE/5',
                className: "external-areas-je-5",
                isSelected: false
              },
              {
                value: 'Area JE/6',
                className: "external-areas-je-6",
                isSelected: false
              },
              {
                value: 'Area JE/7',
                className: "external-areas-je-7",
                isSelected: false
              },
              {
                value: 'Area JE/8',
                className: "external-areas-je-8",
                isSelected: false
              },
              {
                value: 'Area JE/9',
                className: "external-areas-je-9",
                isSelected: false
              },
              {
                value: 'Area JE/10',
                className: "external-areas-je-10",
                isSelected: false
              },
              {
                value: 'Area JE/11',
                className: "external-areas-je-11",
                isSelected: false
              },
              {
                value: 'JE-Zone 1',
                className: "external-areas-je-12",
                isSelected: false
              },
              {
                value: 'JE-Zone 2',
                className: "external-areas-je-13",
                isSelected: false
              },
              {
                value: 'JE-Zone 3',
                className: "external-areas-je-14",
                isSelected: false
              },
              {
                value: 'JE-Zone 4',
                className: "external-areas-je-15",
                isSelected: false
              },
              {
                value: 'JE-Zone 5',
                className: "external-areas-je-16",
                isSelected: false
              },
      
            ]
          },
          {
            floorName: 'JF',
            zoneSubList: [
              {
                value: 'Area JF/2',
                className: "external-areas-jf-1",
                isSelected: false
              },
              {
                value: 'Area JF/3',
                className: "external-areas-jf-2",
                isSelected: false
              },
              {
                value: 'Area JF/4',
                className: "external-areas-jf-3",
                isSelected: false
              },
              {
                value: 'Area JF/5',
                className: "external-areas-jf-4",
                isSelected: false
              },
              {
                value: 'Area JF/6',
                className: "external-areas-jf-5",
                isSelected: false
              },
              {
                value: 'Area JF/7',
                className: "external-areas-jf-6",
                isSelected: false
              },
              {
                value: 'Area JF/8',
                className: "external-areas-jf-7",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'JG',
            zoneSubList: [
              {
                value: 'Area JG/3',
                className: "external-areas-jg-1",
                isSelected: false
              },

              {
                value: 'Area JG/4',
                className: "external-areas-jg-2",
                isSelected: false
              },
              {
                value: 'Area JG/5',
                className: "external-areas-jg-3",
                isSelected: false
              },
              {
                value: 'Area JG/6',
                className: "external-areas-jg-4",
                isSelected: false
              },
              {
                value: 'Area JG/7',
                className: "external-areas-jg-5",
                isSelected: false
              },
              {
                value: 'Area JG/8',
                className: "external-areas-jg-6",
                isSelected: false
              },
              {
                value: 'Area JG/9',
                className: "external-areas-jg-7",
                isSelected: false
              },
              {
                value: 'Area JG/10',
                className: "external-areas-jg-8",
                isSelected: false
              },
            ]
          },
          {
            floorName: 'MR',
            zoneSubList: [
              {
                value: 'Area MR/1',
                className: "external-areas-mr-1",
                isSelected: false
              },

              {
                value: 'Area MR/2',
                className: "external-areas-mr-2",
                isSelected: false
              },
              {
                value: 'Area MR/3',
                className: "external-areas-mr-3",
                isSelected: false
              },
              {
                value: 'Area MR/4',
                className: "external-areas-mr-4",
                isSelected: false
              },
              {
                value: 'Area MR/5',
                className: "external-areas-mr-5",
                isSelected: false
              },
              {
                value: 'Area MR/6',
                className: "external-areas-mr-6",
                isSelected: false
              },
              {
                value: 'Area MR/7',
                className: "external-areas-mr-7",
                isSelected: false
              },
              {
                value: 'Area MR/8',
                className: "external-areas-mr-8",
                isSelected: false
              },
            ]
          },
          {
            floorName: 'JH-JX-JS',
            zoneSubList: [
              {
                value: 'Area N2/1',
                className: "external-areas-jh-jx-js-1",
                isSelected: false
              },
      
              {
                value: 'Area N2/2',
                className: "external-areas-jh-jx-js-2",
                isSelected: false
              },
      
              {
                value: 'Area JH/1',
                className: "external-areas-jh-jx-js-3",
                isSelected: false
              },
              {
                value: 'Area JH/2',
                className: "external-areas-jh-jx-js-4",
                isSelected: false
              },
              {
                value: 'Area JH/3',
                className: "external-areas-jh-jx-js-5",
                isSelected: false
              },
              {
                value: 'Area JH/4',
                className: "external-areas-jh-jx-js-6",
                isSelected: false
              },
              {
                value: 'Area JH/5',
                className: "external-areas-jh-jx-js-7",
                isSelected: false
              },
              {
                value: 'Area JX/1',
                className: "external-areas-jh-jx-js-8",
                isSelected: false
              },
              {
                value: 'Area JX/2',
                className: "external-areas-jh-jx-js-9",
                isSelected: false
              },
              {
                value: 'Area JX/3',
                className: "external-areas-jh-jx-js-10",
                isSelected: false
              },
              {
                value: 'N2',
                className: "external-areas-jh-jx-js-11",
                isSelected: false
              },
              {
                value: 'JH-Zone1',
                className: "external-areas-jh-jx-js-12",
                isSelected: false
              },
              {
                value: 'JH-Zone2',
                className: "external-areas-jh-jx-js-13",
                isSelected: false
              },
              {
                value: 'JX',
                className: "external-areas-jh-jx-js-14",
                isSelected: false
              },
              {
                value: 'JS',
                className: "external-areas-jh-jx-js-15",
                isSelected: false
              },
          
            ]
          },
          {
            floorName: 'JJ',
            zoneSubList: [
              {
                value: 'Area JJ/1',
                className: "external-areas-jj-1",
                isSelected: false
              },

              {
                value: 'Area JJ/2',
                className: "external-areas-jj-2",
                isSelected: false
              },

              {
                value: 'Area JJ/3',
                className: "external-areas-jj-3",
                isSelected: false
              },

              {
                value: 'JJ-Zone 1',
                className: "external-areas-jj-4",
                isSelected: false
              },

              {
                value: 'JJ-Zone 2',
                className: "external-areas-jj-5",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'MP',
            zoneSubList: [
              {
                value: 'Area MP/1',
                className: "external-areas-mp-1",
                isSelected: false
              },
              {
                value: 'Area MP/2',
                className: "external-areas-mp-2",
                isSelected: false
              },
              {
                value: 'Area MP/3',
                className: "external-areas-mp-3",
                isSelected: false
              },
              {
                value: 'Area MP/4',
                className: "external-areas-mp-4",
                isSelected: false
              },
              {
                value: 'Area MP/5',
                className: "external-areas-mp-5",
                isSelected: false
              },
      
              {
                value: 'MP-Tank Farm',
                className: "external-areas-mp-6",
                isSelected: false
              },
              {
                value: 'MP',
                className: "external-areas-mp-7",
                isSelected: false
              },
              {
                value: 'Pump Station',
                className: "external-areas-mp-8",
                isSelected: false
              },
      

            ]
          },

          {
            floorName: 'JK-JM',
            zoneSubList: [
              {
                value: 'Area JK-JM',
                className: "external-areas-jk-jm-1",
                isSelected: false
              },
              {
                value: 'Area JM/1',
                className: "external-areas-jk-jm-2",
                isSelected: false
              },
            ]
          },

          {
            floorName: 'NH3-KF-MF',
            zoneSubList: [
              {
                value: 'Area MF/1',
                className: "external-areas-nh3-kf-mf-1",
                isSelected: false
              },

              {
                value: 'Area MF/2',
                className: "external-areas-nh3-kf-mf-2",
                isSelected: false
              },

              {
                value: 'Area NH3/1',
                className: "external-areas-nh3-kf-mf-3",
                isSelected: false
              },
              {
                value: 'Area NH3/2',
                className: "external-areas-nh3-kf-mf-4",
                isSelected: false
              },
              {
                value: 'Area KF/0',
                className: "external-areas-nh3-kf-mf-5",
                isSelected: false
              },
              {
                value: 'Area KF/1',
                className: "external-areas-nh3-kf-mf-6",
                isSelected: false
              },
              {
                value: 'Area KF/2',
                className: "external-areas-nh3-kf-mf-7",
                isSelected: false
              },
              {
                value: 'Area KF/3',
                className: "external-areas-nh3-kf-mf-8",
                isSelected: false
              },
              {
                value: 'Area KF/4',
                className: "external-areas-nh3-kf-mf-9",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Roads',
            zoneSubList: [
              {
                value: 'Road JF-North/1',
                className: "external-areas-roads-1",
                isSelected: false
              },
              {
                value: 'Road JF-North/2',
                className: "external-areas-roads-2",
                isSelected: false
              },
              {
                value: 'Road JF-West',
                className: "external-areas-roads-3",
                isSelected: false
              },
              {
                value: 'Road JG-West',
                className: "external-areas-roads-4",
                isSelected: false
              },
              {
                value: 'Junction JF',
                className: "external-areas-roads-5",
                isSelected: false
              },
              {
                value: 'Road JF-South',
                className: "external-areas-roads-6",
                isSelected: false
              },
              {
                value: 'Junction JH',
                className: "external-areas-roads-7",
                isSelected: false
              },

              {
                value: 'Road JG-South',
                className: "external-areas-roads-8",
                isSelected: false
              },
              {
                value: 'Bus Stop',
                className: "external-areas-roads-9",
                isSelected: false
              },
              {
                value: 'Road JH-South',
                className: "external-areas-roads-10",
                isSelected: false
              },
              {
                value: 'Junction JX',
                className: "external-areas-roads-11",
                isSelected: false
              },
              {
                value: 'Road JG-East',
                className: "external-areas-roads-12",
                isSelected: false
              },

              {
                value: 'Road MR-West',
                className: "external-areas-roads-13",
                isSelected: false
              },
              {
                value: 'Road MR-South',
                className: "external-areas-roads-14",
                isSelected: false
              },
              {
                value: 'Road MP-South',
                className: "external-areas-roads-15",
                isSelected: false
              },

              {
                value: 'Junction KF',
                className: "external-areas-roads-16",
                isSelected: false
              },
              {
                value: 'Road KF',
                className: "external-areas-roads-17",
                isSelected: false
              },
              {
                value: 'Road MR-East',
                className: "external-areas-roads-18",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Welfare',
            zoneSubList: [
              {
                value: 'Area WFC/3',
                className: "external-areas-welfare-1",
                isSelected: false
              },
              {
                value: 'Area WFC/1',
                className: "external-areas-welfare-2",
                isSelected: false
              },
              {
                value: 'Area WFC/2',
                className: "external-areas-welfare-3",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'CM',
            zoneSubList: [
              {
                value: 'Area CM/1',
                className: "external-areas-cm-1",
                isSelected: false
              },
              {
                value: 'Area CM/2',
                className: "external-areas-cm-2",
                isSelected: false
              },
              {
                value: 'Area CM/3',
                className: "external-areas-cm-3",
                isSelected: false
              },
              {
                value: 'Area CM/4',
                className: "external-areas-cm-4",
                isSelected: false
              },
              {
                value: 'Area JF/5',
                className: "external-areas-cm-5",
                isSelected: false
              },
              {
                value: 'Area CM/6',
                className: "external-areas-cm-6",
                isSelected: false
              },
              {
                value: 'Area CM/7',
                className: "external-areas-cm-7",
                isSelected: false
              },
              {
                value: 'Area CM/8',
                className: "external-areas-cm-8",
                isSelected: false
              },
              {
                value: 'Area CM/9',
                className: "external-areas-cm-9",
                isSelected: false
              },
              {
                value: 'Area CM/10',
                className: "external-areas-cm-10",
                isSelected: false
              },
            ]
          },
        ]
      },
      // mr ground floor plans

      {
        buildingId: '15',
        planType: "MR - Ground Floor",
        zoneList: [
          {
            floorName: 'Zone 0.1_N',
            zoneSubList: [
              {
                value: 'S.044',
                className: "mr-zone0_1_N-1",
                isSelected: false
              },
              {
                value: 'TR02',
                className: "mr-zone0_1_N-2",
                isSelected: false
              },
              {
                value: 'S.048',
                className: "mr-zone0_1_N-3",
                isSelected: false
              },
              {
                value: 'S.050',
                className: "mr-zone0_1_N-4",
                isSelected: false
              },
              {
                value: 'S.052',
                className: "mr-zone0_1_N-5",
                isSelected: false
              },
              {
                value: 'S.054',
                className: "mr-zone0_1_N-6",
                isSelected: false
              },
              {
                value: 'S.056',
                className: "mr-zone0_1_N-7",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 0.1_S',
            zoneSubList: [
              {
                value: 'S.051',
                className: "mr-zone0_1_S-1",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 0.2_N',
            zoneSubList: [
              {
                value: 'TR01',
                className: "mr-zone0_2_N-1",
                isSelected: false
              },
              {
                value: '0172BP001',
                className: "mr-zone0_2_N-2",
                isSelected: false
              },
              {
                value: '0172BP002',
                className: "mr-zone0_2_N-3",
                isSelected: false
              },
              {
                value: '0172BK001',
                className: "mr-zone0_2_N-4",
                isSelected: false
              },
              {
                value: '0172CP001',
                className: "mr-zone0_2_N-5",
                isSelected: false
              },
              {
                value: '0172CP002',
                className: "mr-zone0_2_N-6",
                isSelected: false
              },
              {
                value: 'S.016',
                className: "mr-zone0_2_N-7",
                isSelected: false
              },
              {
                value: '0172CK001',
                className: "mr-zone0_2_N-8",
                isSelected: false
              },
              {
                value: '0172DP002',
                className: "mr-zone0_2_N-9",
                isSelected: false
              },
              {
                value: '0172DP001',
                className: "mr-zone0_2_N-10",
                isSelected: false
              },
              {
                value: '0172CK001',
                className: "mr-zone0_2_N-11",
                isSelected: false
              },
              {
                value: '0172EP001',
                className: "mr-zone0_2_N-12",
                isSelected: false
              },
              {
                value: '0172EP002',
                className: "mr-zone0_2_N-13",
                isSelected: false
              },
              {
                value: 'S.034',
                className: "mr-zone0_2_N-14",
                isSelected: false
              },
              {
                value: '0172EK001',
                className: "mr-zone0_2_N-15",
                isSelected: false
              }
              ,
              {
                value: '0172FP002',
                className: "mr-zone0_2_N-16",
                isSelected: false
              },
              {
                value: '0172FP001',
                className: "mr-zone0_2_N-17",
                isSelected: false
              },
              {
                value: '0172FK001',
                className: "mr-zone0_2_N-18",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 0.2_S',
            zoneSubList: [
              {
                value: 'TR03',
                className: "mr-zone0_2_S-1",
                isSelected: false
              },
              {
                value: 'EL01',
                className: "mr-zone0_2_S-2",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'Zone 0.3_N',
            zoneSubList: [
              {
                value: 'S.004',
                className: "mr-zone0_3_N-1",
                isSelected: false
              },
              {
                value: '0173AP001',
                className: "mr-zone0_3_N-2",
                isSelected: false
              },
              {
                value: '0172AW001',
                className: "mr-zone0_3_N-3",
                isSelected: false
              },
              {
                value: '0172AX001',
                className: "mr-zone0_3_N-4",
                isSelected: false
              },
              {
                value: '0173AP002',
                className: "mr-zone0_3_N-5",
                isSelected: false
              },
              {
                value: '0173AP003',
                className: "mr-zone0_3_N-6",
                isSelected: false
              },
              {
                value: '0172AX002',
                className: "mr-zone0_3_N-7",
                isSelected: false
              },
              {
                value: '0172AX003',
                className: "mr-zone0_3_N-8",
                isSelected: false
              },
              {
                value: 'S.002',
                className: "mr-zone0_3_N-9",
                isSelected: false
              },
              {
                value: '0170AH001',
                className: "mr-zone0_3_N-10",
                isSelected: false
              },
              {
                value: '0170AH002',
                className: "mr-zone0_3_N-11",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 0.3_S',
            zoneSubList: [
              {
                value: '0172TK001',
                className: "mr-zone0_3_S-1",
                isSelected: false
              },
              {
                value: '0172TP002',
                className: "mr-zone0_3_S-2",
                isSelected: false
              },
              {
                value: '0172TP001',
                className: "mr-zone0_3_S-3",
                isSelected: false
              },
              {
                value: 'S.055',
                className: "mr-zone0_3_S-4",
                isSelected: false
              },
              {
                value: '0172SK001',
                className: "mr-zone0_3_S-5",
                isSelected: false
              },
              {
                value: '0172SP002',
                className: "mr-zone0_3_S-6",
                isSelected: false
              },
              {
                value: '0172SP001',
                className: "mr-zone0_3_S-7",
                isSelected: false
              },
              {
                value: '0172RK001',
                className: "mr-zone0_3_S-8",
                isSelected: false
              },
              {
                value: '0172RP001',
                className: "mr-zone0_3_S-9",
                isSelected: false
              },
              {
                value: '0172RP002',
                className: "mr-zone0_3_S-10",
                isSelected: false
              },
              {
                value: 'S.065',
                className: "mr-zone0_3_S-11",
                isSelected: false
              },
              {
                value: '0172QK001',
                className: "mr-zone0_3_S-12",
                isSelected: false
              },
              {
                value: '0172QP002',
                className: "mr-zone0_3_S-13",
                isSelected: false
              }
              ,
              {
                value: '0172QP001',
                className: "mr-zone0_3_S-14",
                isSelected: false
              }
              ,
              {
                value: '0172PK001',
                className: "mr-zone0_3_S-15",
                isSelected: false
              }
              ,
              {
                value: '0172PP002',
                className: "mr-zone0_3_S-16",
                isSelected: false
              }
              ,
              {
                value: '0172PP001',
                className: "mr-zone0_3_S-17",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 0.4_N',
            zoneSubList: [
              {
                value: '0174AK001',
                className: "mr-zone0_4_N-1",
                isSelected: false
              },
              {
                value: '0174BK001',
                className: "mr-zone0_4_N-2",
                isSelected: false
              },
              {
                value: '0174AP002',
                className: "mr-zone0_4_N-3",
                isSelected: false
              },
              {
                value: '0174AP001',
                className: "mr-zone0_4_N-4",
                isSelected: false
              },
              {
                value: 'S.001',
                className: "mr-zone0_4_N-5",
                isSelected: false
              },
              {
                value: '0174BP002',
                className: "mr-zone0_4_N-6",
                isSelected: false
              },
              {
                value: '0174BP001',
                className: "mr-zone0_4_N-7",
                isSelected: false
              },
              {
                value: '0174CP002',
                className: "mr-zone0_4_N-8",
                isSelected: false
              },
              {
                value: '0174CP001',
                className: "mr-zone0_4_N-9",
                isSelected: false
              },
              {
                value: '0174DP002',
                className: "mr-zone0_4_N-10",
                isSelected: false
              },
              {
                value: '0174DP001',
                className: "mr-zone0_4_N-11",
                isSelected: false
              },
              {
                value: 'S.007',
                className: "mr-zone0_4_N-12",
                isSelected: false
              },
              {
                value: '0174CK001',
                className: "mr-zone0_4_N-13",
                isSelected: false
              },
              {
                value: '0174DK001',
                className: "mr-zone0_4_N-14",
                isSelected: false
              },
              {
                value: 'S.013',
                className: "mr-zone0_4_N-15",
                isSelected: false
              },
              {
                value: '0168AK001',
                className: "mr-zone0_4_N-16",
                isSelected: false
              },
              {
                value: '0168DK001',
                className: "mr-zone0_4_N-17",
                isSelected: false
              },
              {
                value: 'S.015',
                className: "mr-zone0_4_N-18",
                isSelected: false
              },
              {
                value: '0168EK001',
                className: "mr-zone0_4_N-19",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 0.4_S',
            zoneSubList: [
              {
                value: '0170CH002',
                className: "mr-zone0_4_S-1",
                isSelected: false
              },
              {
                value: '0170CH001',
                className: "mr-zone0_4_S-2",
                isSelected: false
              },
              {
                value: 'S.077',
                className: "mr-zone0_4_S-3",
                isSelected: false
              },
              {
                value: '0173CP001',
                className: "mr-zone0_4_S-4",
                isSelected: false
              },
              {
                value: '0173CP003',
                className: "mr-zone0_4_S-5",
                isSelected: false
              },
              {
                value: '0173CP002',
                className: "mr-zone0_4_S-6",
                isSelected: false
              },
              {
                value: '0172NW001',
                className: "mr-zone0_4_S-7",
                isSelected: false
              },
              {
                value: '0172NX001',
                className: "mr-zone0_4_S-8",
                isSelected: false
              },
              {
                value: '0172NX002',
                className: "mr-zone0_4_S-9",
                isSelected: false
              },
              {
                value: '0172NX003',
                className: "mr-zone0_4_S-10",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 0.5_N',
            zoneSubList: [
              {
                value: '0171AW001',
                className: "mr-zone0_5_N-1",
                isSelected: false
              },
              {
                value: '0171AX001',
                className: "mr-zone0_5_N-2",
                isSelected: false
              },
              {
                value: '0171AX002',
                className: "mr-zone0_5_N-3",
                isSelected: false
              },
              {
                value: '0171AX003',
                className: "mr-zone0_5_N-4",
                isSelected: false
              },
              {
                value: '0168AX001',
                className: "mr-zone0_5_N-5",
                isSelected: false
              },
              {
                value: '0168AW001',
                className: "mr-zone0_5_N-6",
                isSelected: false
              },
              {
                value: '0168AX002',
                className: "mr-zone0_5_N-7",
                isSelected: false
              },
              {
                value: '0168AX003',
                className: "mr-zone0_5_N-8",
                isSelected: false
              },
              {
                value: '0166AW001',
                className: "mr-zone0_5_N-9",
                isSelected: false
              },
              {
                value: '0166AX001',
                className: "mr-zone0_5_N-10",
                isSelected: false
              },
              {
                value: '0166AX002',
                className: "mr-zone0_5_N-11",
                isSelected: false
              },
              {
                value: '0166AX003',
                className: "mr-zone0_5_N-12",
                isSelected: false
              },
              {
                value: '0174AX001',
                className: "mr-zone0_5_N-13",
                isSelected: false
              },
              {
                value: '0174AW001',
                className: "mr-zone0_5_N-14",
                isSelected: false
              },
              {
                value: '0174AX002',
                className: "mr-zone0_5_N-15",
                isSelected: false
              },
              {
                value: '0174AX003',
                className: "mr-zone0_5_N-16",
                isSelected: false
              },
              {
                value: '0180AX001',
                className: "mr-zone0_5_N-17",
                isSelected: false
              },
              {
                value: '0180AW001',
                className: "mr-zone0_5_N-18",
                isSelected: false
              },
              {
                value: '0180AX002',
                className: "mr-zone0_5_N-19",
                isSelected: false
              },
              {
                value: '0180AX003',
                className: "mr-zone0_5_N-20",
                isSelected: false
              },
              {
                value: '0180AP002',
                className: "mr-zone0_5_N-21",
                isSelected: false
              },
              {
                value: '0180AP001',
                className: "mr-zone0_5_N-22",
                isSelected: false
              },
              {
                value: '0180BP002',
                className: "mr-zone0_5_N-23",
                isSelected: false
              },
              {
                value: '0180BP001',
                className: "mr-zone0_5_N-24",
                isSelected: false
              },
              {
                value: '0180EP001',
                className: "mr-zone0_5_N-25",
                isSelected: false
              },
              {
                value: '0180EP002',
                className: "mr-zone0_5_N-26",
                isSelected: false
              },
              {
                value: '0180EP003',
                className: "mr-zone0_5_N-27",
                isSelected: false
              },
              {
                value: '0174EP003',
                className: "mr-zone0_5_N-28",
                isSelected: false
              },
              {
                value: '0174EP002',
                className: "mr-zone0_5_N-29",
                isSelected: false
              },
              {
                value: '0174EP001',
                className: "mr-zone0_5_N-30",
                isSelected: false
              },
              {
                value: '0166CP003',
                className: "mr-zone0_5_N-31",
                isSelected: false
              },
              {
                value: '0166CP002',
                className: "mr-zone0_5_N-32",
                isSelected: false
              },
              {
                value: '0166CP001',
                className: "mr-zone0_5_N-33",
                isSelected: false
              },
              {
                value: '0168CP001',
                className: "mr-zone0_5_N-34",
                isSelected: false
              },
              {
                value: '0168CP002',
                className: "mr-zone0_5_N-35",
                isSelected: false
              },
              {
                value: '0168CP003',
                className: "mr-zone0_5_N-36",
                isSelected: false
              },
              {
                value: '0168DP002',
                className: "mr-zone0_5_N-37",
                isSelected: false
              },
              {
                value: '0168DP001',
                className: "mr-zone0_5_N-38",
                isSelected: false
              },
              {
                value: '0168AP002',
                className: "mr-zone0_5_N-39",
                isSelected: false
              },
              {
                value: '0168AP001',
                className: "mr-zone0_5_N-40",
                isSelected: false
              },
              {
                value: '0168EP002',
                className: "mr-zone0_5_N-41",
                isSelected: false
              },
              {
                value: '0168EP001',
                className: "mr-zone0_5_N-42",
                isSelected: false
              },
              {
                value: 'S.017',
                className: "mr-zone0_5_N-43",
                isSelected: false
              },
              {
                value: '0171AP003',
                className: "mr-zone0_5_N-44",
                isSelected: false
              },
              {
                value: '0171AP002',
                className: "mr-zone0_5_N-45",
                isSelected: false
              },
              {
                value: '0171AP001',
                className: "mr-zone0_5_N-46",
                isSelected: false
              },
              {
                value: '180DP001',
                className: "mr-zone0_5_N-47",
                isSelected: false
              },
              {
                value: '180DP002',
                className: "mr-zone0_5_N-48",
                isSelected: false
              },
              {
                value: '180CP001',
                className: "mr-zone0_5_N-49",
                isSelected: false
              },
              {
                value: '180CP002',
                className: "mr-zone0_5_N-50",
                isSelected: false
              },
            ]
          },
          {
            floorName: 'Zone 0.5_S',
            zoneSubList: [
              {
                value: 'S.078',
                className: "mr-zone0_5_S-1",
                isSelected: false
              },
              {
                value: '0170BH001',
                className: "mr-zone0_5_S-2",
                isSelected: false
              },

              {
                value: '0170BH002',
                className: "mr-zone0_5_S-3",
                isSelected: false
              },
              {
                value: 'S.080',
                className: "mr-zone0_5_S-4",
                isSelected: false
              },
              {
                value: '0173BP003',
                className: "mr-zone0_5_S-5",
                isSelected: false
              },

              {
                value: '0173BP002',
                className: "mr-zone0_5_S-6",
                isSelected: false
              },

              {
                value: '0173BP001',
                className: "mr-zone0_5_S-7",
                isSelected: false
              },

              {
                value: '0172GW001',
                className: "mr-zone0_5_S-8",
                isSelected: false
              },

              {
                value: '0172GX001',
                className: "mr-zone0_5_S-9",
                isSelected: false
              },

              {
                value: '0172GX002',
                className: "mr-zone0_5_S-10",
                isSelected: false
              },

              {
                value: '0172GX003',
                className: "mr-zone0_5_S-11",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 0.6_N',
            zoneSubList: [
              {
                value: 'S.033',
                className: "mr-zone0_6_N-1",
                isSelected: false
              },
              {
                value: '0180BK001',
                className: "mr-zone0_6_N-2",
                isSelected: false
              },
              {
                value: '0180DK001',
                className: "mr-zone0_6_N-3",
                isSelected: false
              },
              {
                value: 'S.037',
                className: "mr-zone0_6_N-4",
                isSelected: false
              },
              {
                value: '0180AK001',
                className: "mr-zone0_6_N-5",
                isSelected: false
              },
              {
                value: '0180CK001',
                className: "mr-zone0_6_N-6",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 0.6_S',
            zoneSubList: [
              {
                value: 'CORP',
                className: "mr-zone0_6_S-1",
                isSelected: false
              },
              {
                value: 'PS-NET',
                className: "mr-zone0_6_S-2",
                isSelected: false
              },
              {
                value: 'JAN',
                className: "mr-zone0_6_S-3",
                isSelected: false
              },
              {
                value: '0172MP001',
                className: "mr-zone0_6_S-4",
                isSelected: false
              },
              {
                value: '0172MP002',
                className: "mr-zone0_6_S-5",
                isSelected: false
              },
              {
                value: '0172MK001',
                className: "mr-zone0_6_S-6",
                isSelected: false
              },
              {
                value: 'S.058',
                className: "mr-zone0_6_S-7",
                isSelected: false
              },
              {
                value: '0172LP002',
                className: "mr-zone0_6_S-8",
                isSelected: false
              },
              {
                value: '0172LP001',
                className: "mr-zone0_6_S-9",
                isSelected: false
              },
              {
                value: '0172LK001',
                className: "mr-zone0_6_S-10",
                isSelected: false
              },
              {
                value: '0172KP001',
                className: "mr-zone0_6_S-11",
                isSelected: false
              },
              {
                value: '0172KP002',
                className: "mr-zone0_6_S-12",
                isSelected: false
              },
              {
                value: '0172KK001',
                className: "mr-zone0_6_S-13",
                isSelected: false
              },
              {
                value: 'S.066',
                className: "mr-zone0_6_S-14",
                isSelected: false
              },
              {
                value: '0172JP002',
                className: "mr-zone0_6_S-15",
                isSelected: false
              },
              {
                value: '0172JP001',
                className: "mr-zone0_6_S-16",
                isSelected: false
              },
              {
                value: '0172JK001',
                className: "mr-zone0_6_S-17",
                isSelected: false
              },
              {
                value: '0172HP002',
                className: "mr-zone0_6_S-18",
                isSelected: false
              },
              {
                value: '0172HP001',
                className: "mr-zone0_6_S-19",
                isSelected: false
              },
              {
                value: '0172HK001',
                className: "mr-zone0_6_S-20",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 0.7_N',
            zoneSubList: [
              {
                value: 'S.043.1',
                className: "mr-zone0_7_N-1",
                isSelected: false
              },
              {
                value: 'S.041',
                className: "mr-zone0_7_N-2",
                isSelected: false
              },
              {
                value: 'S.043',
                className: "mr-zone0_7_N-3",
                isSelected: false
              },
              {
                value: 'S.045',
                className: "mr-zone0_7_N-4",
                isSelected: false
              },
              {
                value: 'S.047',
                className: "mr-zone0_7_N-5",
                isSelected: false
              },
              {
                value: 'S.049',
                className: "mr-zone0_7_N-6",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 0.P1_N',
            zoneSubList: [
              {
                value: 'S.003',
                className: "mr-zone0_P1_N-1",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 0.P2_S',
            zoneSubList: [
              {
                value: 'S.003',
                className: "mr-zone0_P2_S-1",
                isSelected: false
              }
            ]
          },
        ]
      },

      // mr first floor plan
      {
        buildingId: '15',
        planType: "MR - 1st Floor",
        zoneList: [
          {
            floorName: 'Zone 1.1_N',
            zoneSubList: [
              {
                value: '1.044',
                className: "mr-zone1_1_N-1",
                isSelected: false
              },
              {
                value: '1.046',
                className: "mr-zone1_1_N-2",
                isSelected: false
              },
              {
                value: 'TR02',
                className: "mr-zone1_1_N-3",
                isSelected: false
              },
              {
                value: '1.048.1',
                className: "mr-zone1_1_N-4",
                isSelected: false
              },
              {
                value: '1.048',
                className: "mr-zone1_1_N-5",
                isSelected: false
              },
              {
                value: '1.050',
                className: "mr-zone1_1_N-6",
                isSelected: false
              },
              {
                value: '1.052',
                className: "mr-zone1_1_N-7",
                isSelected: false
              },
              {
                value: '1.054',
                className: "mr-zone1_1_N-8",
                isSelected: false
              },
              {
                value: 'ELCP',
                className: "mr-zone1_1_N-9",
                isSelected: false
              },
              {
                value: 'UPS-LPDB',
                className: "mr-zone1_1_N-10",
                isSelected: false
              },
              {
                value: 'L&P-DB',
                className: "mr-zone1_1_N-11",
                isSelected: false
              },
              {
                value: 'UPS-2',
                className: "mr-zone1_1_N-12",
                isSelected: false
              },
              {
                value: 'UPS-1',
                className: "mr-zone1_1_N-13",
                isSelected: false
              },
              {
                value: 'SWITCH 1',
                className: "mr-zone1_1_N-14",
                isSelected: false
              },
              {
                value: 'SWITCH 2',
                className: "mr-zone1_1_N-15",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'Zone 1.1_S',
            zoneSubList: [
              {
                value: '1.051',
                className: "mr-zone1_1_S-1",
                isSelected: false
              },
              {
                value: 'LPDB-6',
                className: "mr-zone1_1_S-2",
                isSelected: false
              },
              {
                value: '6-LCA',
                className: "mr-zone1_1_S-3",
                isSelected: false
              },
              {
                value: '6-LC',
                className: "mr-zone1_1_S-4",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.2_N',
            zoneSubList: [
              {
                value: 'MR000712FC001',
                className: "mr-zone1_2_N-1",
                isSelected: false
              },
              {
                value: 'MR000711FC001',
                className: "mr-zone1_2_N-2",
                isSelected: false
              },
              {
                value: 'MR000712FC002',
                className: "mr-zone1_2_N-3",
                isSelected: false
              },
              {
                value: '1.038',
                className: "mr-zone1_2_N-4",
                isSelected: false
              },
              {
                value: 'SK05',
                className: "mr-zone1_2_N-5",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.2_S',
            zoneSubList: [
              {
                value: '1.053.1',
                className: "mr-zone1_2_S-1",
                isSelected: false
              },
              {
                value: 'TR03',
                className: "mr-zone1_2_S-2",
                isSelected: false
              },
              {
                value: 'EL01',
                className: "mr-zone1_2_S-3",
                isSelected: false
              },
              {
                value: '1.053',
                className: "mr-zone1_2_S-4",
                isSelected: false
              },
              {
                value: '1.053.2',
                className: "mr-zone1_2_S-5",
                isSelected: false
              },
              {
                value: '1.053.3',
                className: "mr-zone1_2_S-6",
                isSelected: false
              },
              {
                value: '1.053.4',
                className: "mr-zone1_2_S-7",
                isSelected: false
              },
              {
                value: 'SK08',
                className: "mr-zone1_2_S-8",
                isSelected: false
              },
              {
                value: '1.057.1',
                className: "mr-zone1_2_S-9",
                isSelected: false
              },
              {
                value: '1.057.2',
                className: "mr-zone1_2_S-10",
                isSelected: false
              },
              {
                value: '1.057.3',
                className: "mr-zone1_2_S-11",
                isSelected: false
              },
              {
                value: '1.057',
                className: "mr-zone1_2_S-12",
                isSelected: false
              },
              {
                value: '1.059',
                className: "mr-zone1_2_S-13",
                isSelected: false
              },
              {
                value: '1.055',
                className: "mr-zone1_2_S-14",
                isSelected: false
              },
              {
                value: '1.059',
                className: "mr-zone1_2_S-15",
                isSelected: false
              },
              {
                value: '1.065.1',
                className: "mr-zone1_2_S-16",
                isSelected: false
              },
              {
                value: '1.065.3',
                className: "mr-zone1_2_S-17",
                isSelected: false
              },
              {
                value: '1.065.4',
                className: "mr-zone1_2_S-18",
                isSelected: false
              },
              {
                value: '1.065',
                className: "mr-zone1_2_S-19",
                isSelected: false
              },
              {
                value: '1.067',
                className: "mr-zone1_2_S-20",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.3_N',
            zoneSubList: [
              {
                value: '1.034',
                className: "mr-zone1_3_N-1",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.3_S',
            zoneSubList: [
              {
                value: '1.061',
                className: "mr-zone1_3_S-1",
                isSelected: false
              },
              {
                value: '1.063.1',
                className: "mr-zone1_3_S-2",
                isSelected: false
              },
              {
                value: '1.069',
                className: "mr-zone1_3_S-3",
                isSelected: false
              },
              {
                value: '1.063',
                className: "mr-zone1_3_S-4",
                isSelected: false
              },
              {
                value: '1.063.2',
                className: "mr-zone1_3_S-5",
                isSelected: false
              },
              {
                value: '1.063.3',
                className: "mr-zone1_3_S-6",
                isSelected: false
              },
              {
                value: '1.063.4',
                className: "mr-zone1_3_S-7",
                isSelected: false
              },
              {
                value: '1.071',
                className: "mr-zone1_3_S-8",
                isSelected: false
              },
              {
                value: '1.063.5',
                className: "mr-zone1_3_S-9",
                isSelected: false
              },
              {
                value: '1.079',
                className: "mr-zone1_3_S-10",
                isSelected: false
              },
              {
                value: 'SK09',
                className: "mr-zone1_3_S-11",
                isSelected: false
              },
              {
                value: '1.075',
                className: "mr-zone1_3_S-12",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.4_N',
            zoneSubList: [
              {
                value: '1.024',
                className: "mr-zone1_4_N-0",
                isSelected: false
              },
              {
                value: '0130CK001',
                className: "mr-zone1_4_N-1",
                isSelected: false
              },
              {
                value: '0130AK001',
                className: "mr-zone1_4_N-2",
                isSelected: false
              },
              {
                value: '0130FT001',
                className: "mr-zone1_4_N-3",
                isSelected: false
              },
              {
                value: '0130FT002',
                className: "mr-zone1_4_N-4",
                isSelected: false
              },
              {
                value: '0130BK001',
                className: "mr-zone1_4_N-5",
                isSelected: false
              },
              {
                value: '0130BK001',
                className: "mr-zone1_4_N-6",
                isSelected: false
              },
              {
                value: '0130BK001',
                className: "mr-zone1_4_N-7",
                isSelected: false
              },
              {
                value: 'SK04',
                className: "mr-zone1_4_N-8",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.4_S',
            zoneSubList: [
              {
                value: '1.073',
                className: "mr-zone1_4_S-1",
                isSelected: false
              },
              {
                value: '1.077',
                className: "mr-zone1_4_S-2",
                isSelected: false
              },
              {
                value: '1.081.1',
                className: "mr-zone1_4_S-3",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.5_N',
            zoneSubList: [
              {
                value: '1.016',
                className: "mr-zone1_5_N-1",
                isSelected: false
              },
              {
                value: '1.018',
                className: "mr-zone1_5_N-2",
                isSelected: false
              },
              {
                value: '1.020',
                className: "mr-zone1_5_N-3",
                isSelected: false
              },
              {
                value: 'TR01',
                className: "mr-zone1_5_N-4",
                isSelected: false
              },
              {
                value: 'LPDB-5',
                className: "mr-zone1_5_N-5",
                isSelected: false
              },
              {
                value: '1.022',
                className: "mr-zone1_5_N-6",
                isSelected: false
              },
              {
                value: '3-FEA',
                className: "mr-zone1_5_N-7",
                isSelected: false
              },
              {
                value: '3-FE',
                className: "mr-zone1_5_N-8",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.5_S',
            zoneSubList: [
              {
                value: 'MR000719FC005',
                className: "mr-zone1_5_S-1",
                isSelected: false
              },
              {
                value: 'MR000719FC005',
                className: "mr-zone1_5_S-2",
                isSelected: false
              },
              {
                value: '1.081',
                className: "mr-zone1_5_S-3",
                isSelected: false
              },
              {
                value: 'SK11',
                className: "mr-zone1_5_S-4",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.6_N',
            zoneSubList: [
              {
                value: 'MR000709P001/MR000709P500',
                className: "mr-zone1_6_N-1",
                isSelected: false
              },
              {
                value: 'MR000708P001/MR000708P500',
                className: "mr-zone1_6_N-2",
                isSelected: false
              },
              {
                value: 'MR000719FC002',
                className: "mr-zone1_6_N-3",
                isSelected: false
              },
              {
                value: '1.002',
                className: "mr-zone1_6_N-4",
                isSelected: false
              }
              ,
              {
                value: 'MR00075P011/MR000715P511',
                className: "mr-zone1_6_N-5",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.6_S',
            zoneSubList: [
              {
                value: '110V_DC',
                className: "mr-zone1_6_S-1",
                isSelected: false
              },
              {
                value: '1.083',
                className: "mr-zone1_6_S-2",
                isSelected: false
              },
              {
                value: 'MR1-1',
                className: "mr-zone1_6_S-3",
                isSelected: false
              },
              {
                value: 'MR1-2',
                className: "mr-zone1_6_S-4",
                isSelected: false
              },
              {
                value: 'MR1-3',
                className: "mr-zone1_6_S-5",
                isSelected: false
              },
              {
                value: 'MR1-4',
                className: "mr-zone1_6_S-6",
                isSelected: false
              },
              {
                value: 'MR1-5',
                className: "mr-zone1_6_S-7",
                isSelected: false
              },
              {
                value: 'MR1-6',
                className: "mr-zone1_6_S-8",
                isSelected: false
              },
              {
                value: 'MR1-7',
                className: "mr-zone1_6_S-9",
                isSelected: false
              },
              {
                value: 'MR2-1',
                className: "mr-zone1_6_S-10",
                isSelected: false
              },
              {
                value: 'MR2-2',
                className: "mr-zone1_6_S-11",
                isSelected: false
              },
              {
                value: 'MR2-3',
                className: "mr-zone1_6_S-12",
                isSelected: false
              },
              {
                value: 'MR2-4',
                className: "mr-zone1_6_S-13",
                isSelected: false
              },
              {
                value: 'MR2-5',
                className: "mr-zone1_6_S-14",
                isSelected: false
              },
              {
                value: 'MR2-6',
                className: "mr-zone1_6_S-15",
                isSelected: false
              },
              {
                value: 'MR3-1',
                className: "mr-zone1_6_S-16",
                isSelected: false
              },
              {
                value: 'MR3-2',
                className: "mr-zone1_6_S-17",
                isSelected: false
              },
              {
                value: 'MR3-3',
                className: "mr-zone1_6_S-18",
                isSelected: false
              },
              {
                value: 'MR3-4',
                className: "mr-zone1_6_S-19",
                isSelected: false
              },
              {
                value: 'MR3-5',
                className: "mr-zone1_6_S-20",
                isSelected: false
              },
              {
                value: 'MR3-6',
                className: "mr-zone1_6_S-21",
                isSelected: false
              },
              {
                value: 'MR3-7',
                className: "mr-zone1_6_S-22",
                isSelected: false
              },
              {
                value: 'MR4-1',
                className: "mr-zone1_6_S-23",
                isSelected: false
              },
              {
                value: 'MR4-2',
                className: "mr-zone1_6_S-24",
                isSelected: false
              },
              {
                value: 'MR4-3',
                className: "mr-zone1_6_S-25",
                isSelected: false
              },
              {
                value: 'MR4-4',
                className: "mr-zone1_6_S-26",
                isSelected: false
              },
              {
                value: 'MR4-5',
                className: "mr-zone1_6_S-27",
                isSelected: false
              },
              {
                value: 'MR4-6',
                className: "mr-zone1_6_S-28",
                isSelected: false
              },
              {
                value: 'MR5-1',
                className: "mr-zone1_6_S-29",
                isSelected: false
              },
              {
                value: 'MR5-2',
                className: "mr-zone1_6_S-30",
                isSelected: false
              },
              {
                value: 'MR5-3',
                className: "mr-zone1_6_S-31",
                isSelected: false
              },
              {
                value: 'MR5-4',
                className: "mr-zone1_6_S-32",
                isSelected: false
              },
              {
                value: 'MR5-5',
                className: "mr-zone1_6_S-33",
                isSelected: false
              },
              {
                value: 'MR5-6',
                className: "mr-zone1_6_S-34",
                isSelected: false
              },
              {
                value: 'MR5-7',
                className: "mr-zone1_6_S-35",
                isSelected: false
              },
              {
                value: 'MR6-1',
                className: "mr-zone1_6_S-36",
                isSelected: false
              },
              {
                value: 'MR6-2',
                className: "mr-zone1_6_S-37",
                isSelected: false
              },
              {
                value: 'MR6-3',
                className: "mr-zone1_6_S-38",
                isSelected: false
              },
              {
                value: 'MR6-4',
                className: "mr-zone1_6_S-39",
                isSelected: false
              },
              {
                value: 'MR6-5',
                className: "mr-zone1_6_S-40",
                isSelected: false
              },
              {
                value: 'MR6-6',
                className: "mr-zone1_6_S-41",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.7_N',
            zoneSubList: [
              {
                value: '4-GGA',
                className: "mr-zone1_7_N-1",
                isSelected: false
              },
              {
                value: '4-GG',
                className: "mr-zone1_7_N-2",
                isSelected: false
              },
              {
                value: 'LPDB-4',
                className: "mr-zone1_7_N-3",
                isSelected: false
              },
              {
                value: '1.013',
                className: "mr-zone1_7_N-4",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.7_S',
            zoneSubList: [
              {
                value: 'SK10',
                className: "mr-zone1_7_S-1",
                isSelected: false
              },
              {
                value: 'MR6-M',
                className: "mr-zone1_7_S-2",
                isSelected: false
              },
              {
                value: 'MR5-J',
                className: "mr-zone1_7_S-3",
                isSelected: false
              },
              {
                value: 'MR4-H',
                className: "mr-zone1_7_S-4",
                isSelected: false
              },
              {
                value: '1.076',
                className: "mr-zone1_7_S-5",
                isSelected: false
              },
              {
                value: 'MR3-E',
                className: "mr-zone1_7_S-6",
                isSelected: false
              },
              {
                value: 'MR2-D',
                className: "mr-zone1_7_S-7",
                isSelected: false
              },
              {
                value: 'MR1-A',
                className: "mr-zone1_7_S-8",
                isSelected: false
              },
              {
                value: '1.015',
                className: "mr-zone1_7_S-9",
                isSelected: false
              },
              {
                value: 'SK02',
                className: "mr-zone1_7_S-10",
                isSelected: false
              },
              {
                value: 'SK03',
                className: "mr-zone1_7_S-11",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.8_N',
            zoneSubList: [
              {
                value: 'SK01',
                className: "mr-zone1_8_N-1",
                isSelected: false
              },
              {
                value: '0166AP001',
                className: "mr-zone1_8_N-2",
                isSelected: false
              },
              {
                value: '0166BP001',
                className: "mr-zone1_8_N-3",
                isSelected: false
              },
              {
                value: '0166BP002',
                className: "mr-zone1_8_N-4",
                isSelected: false
              },
              {
                value: '0168BP001',
                className: "mr-zone1_8_N-5",
                isSelected: false
              },
              {
                value: '0166BP002',
                className: "mr-zone1_8_N-6",
                isSelected: false
              },
              {
                value: '0166AH001',
                className: "mr-zone1_8_N-7",
                isSelected: false
              },
              {
                value: '0166BH001',
                className: "mr-zone1_8_N-8",
                isSelected: false
              },
              {
                value: '0166BH002',
                className: "mr-zone1_8_N-9",
                isSelected: false
              },
              {
                value: '0166BH001',
                className: "mr-zone1_8_N-10",
                isSelected: false
              },
              {
                value: '0166BH002',
                className: "mr-zone1_8_N-11",
                isSelected: false
              },
              {
                value: '1.017',
                className: "mr-zone1_8_N-12",
                isSelected: false
              },
              {
                value: '0170DH001',
                className: "mr-zone1_8_N-13",
                isSelected: false
              },
              {
                value: '0170DH002',
                className: "mr-zone1_8_N-14",
                isSelected: false
              },
              {
                value: '0170DH003',
                className: "mr-zone1_8_N-15",
                isSelected: false
              },
              {
                value: '0170DH004',
                className: "mr-zone1_8_N-16",
                isSelected: false
              },
              {
                value: 'SK03',
                className: "mr-zone1_8_N-17",
                isSelected: false
              },
              {
                value: 'SK03.1',
                className: "mr-zone1_8_N-18",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.8_S',
            zoneSubList: [
              {
                value: 'MR6-M',
                className: "mr-zone1_8_S-1",
                isSelected: false
              },
              {
                value: 'MR5-J',
                className: "mr-zone1_8_S-2",
                isSelected: false
              },
              {
                value: 'MR4-H',
                className: "mr-zone1_8_S-3",
                isSelected: false
              },
              {
                value: '1.078',
                className: "mr-zone1_8_S-4",
                isSelected: false
              },
              {
                value: 'MR3-E',
                className: "mr-zone1_8_S-5",
                isSelected: false
              },
              {
                value: '1.076',
                className: "mr-zone1_8_S-6",
                isSelected: false
              },
              {
                value: 'MR2-D',
                className: "mr-zone1_8_S-7",
                isSelected: false
              },
              {
                value: 'MR1-A',
                className: "mr-zone1_8_S-8",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.9_N',
            zoneSubList: [
              {
                value: '1.029',
                className: "mr-zone1_9_N-1",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.9_S',
            zoneSubList: [
              {
                value: '1.015',
                className: "mr-zone1_9_S-1",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.10_N',
            zoneSubList: [
              {
                value: 'MR000711P001/MR000711P500',
                className: "mr-zone1_10_N-1",
                isSelected: false
              },

              {
                value: '1.033',
                className: "mr-zone1_10_N-2",
                isSelected: false
              },

              {
                value: '1.037',
                className: "mr-zone1_10_N-3",
                isSelected: false
              },

              {
                value: 'MR000712P001/MR000712P500',
                className: "mr-zone1_10_N-4",
                isSelected: false
              },
              {
                value: 'SK06',
                className: "mr-zone1_10_N-5",
                isSelected: false
              },
              {
                value: ' SK06.1',
                className: "mr-zone1_10_N-6",
                isSelected: false
              },


            ]
          },
          {
            floorName: 'Zone 1.10_S',
            zoneSubList: [
              {
                value: 'MR6-L',
                className: "mr-zone1_10_S-1",
                isSelected: false
              },
              {
                value: 'MR5-K',
                className: "mr-zone1_10_S-2",
                isSelected: false
              },

              {
                value: 'MR4-G',
                className: "mr-zone1_10_S-3",
                isSelected: false
              },
              {
                value: '1.058',
                className: "mr-zone1_10_S-4",
                isSelected: false
              },
              {
                value: 'MR3-F',
                className: "mr-zone1_10_S-5",
                isSelected: false
              },
              {
                value: 'MR2-C',
                className: "mr-zone1_10_S-6",
                isSelected: false
              },
              {
                value: 'MR1-B',
                className: "mr-zone1_10_S-7",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.11_S',
            zoneSubList: [
              {
                value: 'SK07.1',
                className: "mr-zone1_11_S-1",
                isSelected: false
              },
              {
                value: 'SK07',
                className: "mr-zone1_11_S-2",
                isSelected: false
              },
              {
                value: 'MR6-L',
                className: "mr-zone1_11_S-3",
                isSelected: false
              },
              {
                value: 'MR5-K',
                className: "mr-zone1_11_S-4",
                isSelected: false
              },
              {
                value: 'MR4-G',
                className: "mr-zone1_11_S-5",
                isSelected: false
              },
              {
                value: '1.056',
                className: "mr-zone1_11_S-6",
                isSelected: false
              },
              {
                value: 'MR3-F',
                className: "mr-zone1_11_S-7",
                isSelected: false
              },
              {
                value: 'MR2-C',
                className: "mr-zone1_11_S-8",
                isSelected: false
              },
              {
                value: 'MR1-B',
                className: "mr-zone1_11_S-9",
                isSelected: false
              },
              {
                value: 'SK01',
                className: "mr-zone1_11_S-10",
                isSelected: false
              },
              {
                value: 'SK02',
                className: "mr-zone1_11_S-11",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.P1_N',
            zoneSubList: [

              {
                value: 'ZONE 1.P1_N',
                className: "mr-zone1-P1_N-1",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.P2_S',
            zoneSubList: [
              {
                value: '1.015',
                className: "mr-zone1_P2_S-1",
                isSelected: false
              }
            ]
          },
        ]
      },

       // mr SECOND floor

       {
        buildingId: '15',
        planType: "MR - 2nd Floor",
        zoneList: [
          {
            floorName: 'Zone 2.1_N',
            zoneSubList: [
              {
                value: '2.044',
                className: "mr-zone2_1_N-1",
                isSelected: false
              },
              {
                value: 'TR02',
                className: "mr-zone2_1_N-2",
                isSelected: false
              },
              {
                value: '2.019',
                className: "mr-zone2_1_N-3",
                isSelected: false
              },
              {
                value: '2.048',
                className: "mr-zone2_1_N-4",
                isSelected: false
              },
              {
                value: '2.050',
                className: "mr-zone2_1_N-5",
                isSelected: false
              },
              {
                value: '2.052',
                className: "mr-zone2_1_N-6",
                isSelected: false
              }
      
            ]
          },
          {
            floorName: 'Zone 2.1_S',
            zoneSubList: [
              {
                value: '2.053',
                className: "mr-zone2_1_S-1",
                isSelected: false
              },
              {
                value: 'TR03',
                className: "mr-zone2_1_S-2",
                isSelected: false
              },
              {
                value: 'EL01',
                className: "mr-zone2_1_S-3",
                isSelected: false
              },
              {
                value: '2.051',
                className: "mr-zone2_1_S-4",
                isSelected: false
              },
              {
                value: '2.019',
                className: "mr-zone2_1_S-5",
                isSelected: false
              }
      
            ]
          },
          {
            floorName: 'Zone 2.2_N',
            zoneSubList: [
              {
                value: 'MR000719FC007',
                className: "mr-zone2_2_N-1",
                isSelected: false
              },
              {
                value: 'MR000718P001',
                className: "mr-zone2_2_N-2",
                isSelected: false
              },
              {
                value: 'MR000701P010/MR000701P510',
                className: "mr-zone2_2_N-3",
                isSelected: false
              },
              {
                value: 'MR000701P001/MR000701P510',
                className: "mr-zone2_2_N-4",
                isSelected: false
              },
              {
                value: 'MR000701P030',
                className: "mr-zone2_2_N-5",
                isSelected: false
              },
              {
                value: ' 2.018',
                className: "mr-zone2_2_N-6",
                isSelected: false
              },
              {
                value: 'MR000717P001/002',
                className: "mr-zone2_2_N-7",
                isSelected: false
              },
              {
                value: 'MR000702P030',
                className: "mr-zone2_2_N-8",
                isSelected: false
              },
              {
                value: 'MR000702P010/MR000702P510',
                className: "mr-zone2_2_N-9",
                isSelected: false
              },
              {
                value: 'MR000702P001/MR000702P500',
                className: "mr-zone2_2_N-10",
                isSelected: false
              }
      
            ]
          },
          {
            floorName: 'Zone 2.2_S',
            zoneSubList: [
              {
                value: 'MR000709P510/MR000706P010',
                className: "mr-zone2_2_S-1",
                isSelected: false
              },
              {
                value: 'MR000706P001/MR000706P500',
                className: "mr-zone2_2_S-2",
                isSelected: false
              },
              {
                value: '2.057',
                className: "mr-zone2_2_S-3",
                isSelected: false
              },
              {
                value: '2.059',
                className: "mr-zone2_2_S-4",
                isSelected: false
              },
              {
                value: 'MR000705P030',
                className: "mr-zone2_2_S-5",
                isSelected: false
              },
              {
                value: 'MR000705P001/MR000705P500',
                className: "mr-zone2_2_S-6",
                isSelected: false
              },
              {
                value: 'MR000713P001/MR000713P500',
                className: "mr-zone2_2_S-7",
                isSelected: false
              },
              {
                value: '2.075',
                className: "mr-zone2_2_S-8",
                isSelected: false
              },
              {
                value: 'MR000719FC009',
                className: "mr-zone2_2_S-9",
                isSelected: false
              },
              {
                value: 'MR000705P010/MR000705P510',
                className: "mr-zone2_2_S-10",
                isSelected: false
              },
              {
                value: '2.087',
                className: "mr-zone2_2_S-11",
                isSelected: false
              },
              {
                value: '2.089',
                className: "mr-zone2_2_S-12",
                isSelected: false
              }
      
            ]
          },
          {
            floorName: 'Zone 2.3_N',
            zoneSubList: [
              {
                value: '2.014',
                className: "mr-zone2_3_N-1",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 2.3_S',
            zoneSubList: [
              {
                value: '2.085',
                className: "mr-zone2_3_S-1",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 2.4_N',
            zoneSubList: [
              {
                value: '2.001',
                className: "mr-zone2_4_N-1",
                isSelected: false
              },
              {
                value: '2.002',
                className: "mr-zone2_4_N-2",
                isSelected: false
              },
              {
                value: '2.007',
                className: "mr-zone2_4_N-3",
                isSelected: false
              },
              {
                value: 'TR01',
                className: "mr-zone2_4_N-4",
                isSelected: false
              }
      
            ]
          },
          {
            floorName: 'Zone 2.4_S',
            zoneSubList: [
              {
                value: 'MR000719FC004',
                className: "mr-zone2_4_S-1",
                isSelected: false
              },
              {
                value: 'MR000703P001/MR000703P500',
                className: "mr-zone2_4_S-2",
                isSelected: false
              },
              {
                value: 'MR000703P010/MR000703P510',
                className: "mr-zone2_4_S-3",
                isSelected: false
              },
              {
                value: 'MR000715P040/MR000715P540',
                className: "mr-zone2_4_S-4",
                isSelected: false
              },
              {
                value: '2.054',
                className: "mr-zone2_4_S-5",
                isSelected: false
              },
              {
                value: 'MR000704P001/MR000704P500',
                className: "mr-zone2_4_S-6",
                isSelected: false
              },
              {
                value: 'MR000704P030',
                className: "mr-zone2_4_S-7",
                isSelected: false
              },
              {
                value: 'MR000715P041/MR000715P541',
                className: "mr-zone2_4_S-8",
                isSelected: false
              },
              {
                value: 'MR000704P510/MR000704P010',
                className: "mr-zone2_4_S-9",
                isSelected: false
              },
              {
                value: 'MR000719FC003',
                className: "mr-zone2_4_S-10",
                isSelected: false
              },
              {
                value: '2.074',
                className: "mr-zone2_4_S-11",
                isSelected: false
              },
              {
                value: 'MR000715P535',
                className: "mr-zone2_4_S-12",
                isSelected: false
              },
              {
                value: 'MR000715P536',
                className: "mr-zone2_4_S-13",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 2.5_N',
            zoneSubList: [
              {
                value: '2.015',
                className: "mr-zone2_5_N-1",
                isSelected: false
              },
              {
                value: 'MR000708P010/MR000708P510',
                className: "mr-zone2_5_N-2",
                isSelected: false
              },
              {
                value: '2.032',
                className: "mr-zone2_5_N-3",
                isSelected: false
              },
              {
                value: 'MR000715P526',
                className: "mr-zone2_5_N-4",
                isSelected: false
              },
              {
                value: 'MR000707P001/MR000707P500',
                className: "mr-zone2_5_N-5",
                isSelected: false
              },
              {
                value: '2.027',
                className: "mr-zone2_5_N-6",
                isSelected: false
              }
      
            ]
          },
          {
            floorName: 'Zone 2.6_N',
            zoneSubList: [
              {
                value: '2.031',
                className: "mr-zone2_6_N-1",
                isSelected: false
              },
              {
                value: 'MR000714P001/MR000714P500',
                className: "mr-zone2_6_N-2",
                isSelected: false
              },
              {
                value: '2.017',
                className: "mr-zone2_6_N-3",
                isSelected: false
              },
              {
                value: '2.043',
                className: "mr-zone2_6_N-4",
                isSelected: false
              },
              {
                value: 'MR000710P001/MR000710P500',
                className: "mr-zone2_6_N-5",
                isSelected: false
              },
              {
                value: 'MR000719FC008',
                className: "mr-zone2_6_N-6",
                isSelected: false
              },
              {
                value: '2.049',
                className: "mr-zone2_6_N-7",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 2.P1_N',
            zoneSubList: [
              {
                value: '2.019',
                className: "mr-zone2_P1_N-1",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 2.P2_S',
            zoneSubList: [
              {
                value: '2.019',
                className: "mr-zone2_P2_S-1",
                isSelected: false
              }
    
            ]
          },
         
        ]
      },

    // mr roof floor
   
    {
      buildingId: '15',
      planType: "MR - Roof Plan",
      zoneList: [
        {
          floorName: 'Zone R1',
          zoneSubList: [
            {
              value: 'TR01',
              className: "mr-zoneR1-1",
              isSelected: false
            },
            {
              value: 'zoneR1',
              className: "mr-zoneR1-2",
              isSelected: false
             }
    
          ]
        },
        {
          floorName: 'Zone R2',
          zoneSubList: [
            {
              value: 'zoneR2',
              className: "mr-zoneR2-1",
              isSelected: false
            }
    
          ]
        },
        {
          floorName: 'Zone R3',
          zoneSubList: [
            {
              value: 'zoneR3',
              className: "mr-zoneR3-1",
              isSelected: false
            }
     
          ]
        },
        {
          floorName: 'Zone R4',
          zoneSubList: [
            {
              value: 'zoneR4',
              className: "mr-zoneR4-1",
              isSelected: false
            }
          ]
        },
        {
          floorName: 'Zone R5',
          zoneSubList: [
            {
              value: 'zoneR5',
              className: "mr-zoneR5-1",
              isSelected: false
            }

          ]
        },
        {
          floorName: 'Zone R6',
          zoneSubList: [
            {
              value: 'zoneR6',
              className: "mr-zoneR6-1",
              isSelected: false
            }
          ]
        },
        {
          floorName: 'Zone R7',
          zoneSubList: [
            {
              value: 'zoneR7',
              className: "mr-zoneR7-1",
              isSelected: false
            }
          ]
        },
        {
          floorName: 'Zone R8',
          zoneSubList: [
            {
              value: 'TR03',
              className: "mr-zoneR8-1",
              isSelected: false
            },
            {
              value: 'zoneR8',
              className: "mr-zoneR8-2",
              isSelected: false
             }
    
          ]
        },
        {
          floorName: 'Zone R9',
          zoneSubList: [
            {
              value: 'zoneR9',
              className: "mr-zoneR9-1",
              isSelected: false
            }
          ]
        },
        {
          floorName: 'Zone R10',
          zoneSubList: [
            {
              value: 'zoneR10',
              className: "mr-zoneR10-1",
              isSelected: false
            }
    
          ]
        },
        {
          floorName: 'Zone R11',
          zoneSubList: [
            {
              value: 'zoneR11',
              className: "mr-zoneR11-1",
              isSelected: false
              }
  
          ]
        },
        {
          floorName: 'Zone R12',
          zoneSubList: [
            {
              value: 'zoneR12',
              className: "mr-zoneR12-1",
              isSelected: false
              }
          ]
        },
        {
          floorName: 'Zone R13',
          zoneSubList: [
            
          {
            value: 'zoneR13',
            className: "mr-zoneR13-1",
            isSelected: false
            }
          ]
        },
       
      ]
    },

    // jg start ground floor

    {
      buildingId: '16',
      planType: "JG - Ground Floor",
      zoneList: [
        {
          floorName: 'Zone S.0XX',
          zoneSubList: [
            {
              value: 'S.0XX-EL02',
              className: "S_0XX-1",
              isSelected: false
            },
            {
              value: 'S.0XX-S.004.3',
              className: "S_0XX-2",
              isSelected: false
            },
            {
              value: 'S.0XX-TR02',
              className: "S_0XX-3",
              isSelected: false
            },
            {
              value: 'S.0XX-S.004.4',
              className: "S_0XX-4",
              isSelected: false
            },
            {
              value: 'S.0XX-S.K02',
              className: "S_0XX-5",
              isSelected: false
            },
            {
              value: 'S.0XX-S.008.4',
              className: "S_0XX-6",
              isSelected: false
            },
            {
              value: 'S.0XX-S.002.5',
              className: "S_0XX-7",
              isSelected: false
            },
            {
              value: 'S.0XX-S.004.2',
              className: "S_0XX-8",
              isSelected: false
            },
            {
              value: 'S.0XX-S.002.4',
              className: "S_0XX-9 ",
              isSelected: false
            },
            {
              value: 'S.0XX-S.002.3',
              className: "S_0XX-10 ",
              isSelected: false
            },
            {
              value: 'S.0XX-S.002.6',
              className: "S_0XX-11 ",
              isSelected: false
            },
            {
              value: 'S.0XX-S.002.2',
              className: "S_0XX-12 ",
              isSelected: false
            },
            {
              value: 'S.0XX-S.002',
              className: "S_0XX-13 ",
              isSelected: false
            },
            {
              value: 'S.0XX-S.004',
              className: "S_0XX-14 ",
              isSelected: false
            },
            {
              value: 'S.0XX-S.001.3',
              className: "S_0XX-15",
              isSelected: false
            },
            {
              value: 'S.0XX-S.001.2',
              className: "S_0XX-16",
              isSelected: false
            },
            {
              value: 'S.0XX-S.001.1',
              className: "S_0XX-17",
              isSelected: false
            },
            {
              value: 'S.0XX-S.008.3',
              className: "S_0XX-18",
              isSelected: false
            },
            {
              value: 'S.0XX-S.008.2',
              className: "S_0XX-19",
              isSelected: false
            },
            {
              value: 'S.0XX-S.008.1',
              className: "S_0XX-20",
              isSelected: false
            },
            {
              value: 'S.0XX-S.008',
              className: "S_0XX-21",
              isSelected: false
            },
            {
              value: 'S.0XX-S.007.3',
              className: "S_0XX-22",
              isSelected: false
            },
            {
              value: 'S.0XX-S.001',
              className: "S_0XX-23",
              isSelected: false
            },
            {
              value: 'S.0XX-S.007.2',
              className: "S_0XX-24",
              isSelected: false
            },
            {
              value: 'S.0XX-S.007',
              className: "S_0XX-25",
              isSelected: false
            },
            {
              value: 'S.0XX-S.003.1',
              className: "S_0XX-26",
              isSelected: false
            },
            {
              value: 'S.0XX-SK01',
              className: "S_0XX-27",
              isSelected: false
            },
            {
              value: 'S.0XX-EL01',
              className: "S_0XX-28",
              isSelected: false
            },
            {
              value: 'S.0XX-S.003',
              className: "S_0XX-29",
              isSelected: false
            },
            {
              value: 'S.0XX-TR01',
              className: "S_0XX-30",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone S.1XX',
          zoneSubList: [
            {
              value: 'S.1XX-S.120',
              className: "S_1XX-1",
              isSelected: false
            },
            {
              value: 'S.1XX-TR04',
              className: "S_1XX-2",
              isSelected: false
            },
            {
              value: 'S.1XX-S.112',
              className: "S_1XX-3",
              isSelected: false
            },
            {
              value: 'S.1XX-S.128',
              className: "S_1XX-4",
              isSelected: false
            },
            {
              value: 'S.1XX-S.111-Line3',
              className: "S_1XX-5",
              isSelected: false
            },
            {
              value: 'S.1XX-S.111-Line2',
              className: "S_1XX-6",
              isSelected: false
            },
            {
              value: 'S.1XX-S.111-Line1',
              className: "S_1XX-7",
              isSelected: false
            },
            {
              value: 'S.1XX-S.111.1',
              className: "S_1XX-8",
              isSelected: false
            },
            {
              value: 'S.1XX-S.127',
              className: "S_1XX-9",
              isSelected: false
            },
            {
              value: 'S.1XX-EL03',
              className: "S_1XX-10",
              isSelected: false
            },
            {
              value: 'S.1XX-S.117',
              className: "S_1XX-11",
              isSelected: false
            },
            {
              value: 'S.1XX-TR03',
              className: "S_1XX-12",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone S.2XX',
          zoneSubList: [
            {
              value: 'S.2XX-TR06',
              className: "S_2XX-1",
              isSelected: false
            },
            {
              value: 'S.2XX-S.242',
              className: "S_2XX-2",
              isSelected: false
            },
            {
              value: 'S.2XX-EL04',
              className: "S_2XX-3",
              isSelected: false
            },
            {
              value: 'S.2XX-S.240',
              className: "S_2XX-4",
              isSelected: false
            },
            {
              value: 'S.2XX-S.231-Line3',
              className: "S_2XX-5",
              isSelected: false
            },
            {
              value: 'S.2XX-S.231-Line2',
              className: "S_2XX-6",
              isSelected: false
            },
            {
              value: 'S.2XX-S.231-Line1',
              className: "S_2XX-7",
              isSelected: false
            },
            {
              value: 'S.2XX-S.239',
              className: "S_2XX-8",
              isSelected: false
            },
            {
              value: 'S.2XX-S.241',
              className: "S_2XX-9",
              isSelected: false
            },
            {
              value: 'S.2XX-TR05',
              className: "S_2XX-10",
              isSelected: false
            },
            {
              value: 'S.2XX-S.229',
              className: "S_2XX-11",
              isSelected: false
            },
          ]
        },

        {
          floorName: 'Zone S.3XX',
          zoneSubList: [
            {
              value: 'S.3XX-TR08',
              className: "S_3XX-1",
              isSelected: false
            },
            {
              value: 'S.3XX-S.358.2',
              className: "S_3XX-2",
              isSelected: false
            },
            {
              value: 'S.3XX-SK05',
              className: "S_3XX-3",
              isSelected: false
            },
            {
              value: 'S.3XX-SK04',
              className: "S_3XX-4",
              isSelected: false
            },
            {
              value: 'S.3XX-S.360.2',
              className: "S_3XX-5",
              isSelected: false
            },
            {
              value: 'S.3XX-S.350.4',
              className: "S_3XX-6",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354',
              className: "S_3XX-7",
              isSelected: false
            },
            {
              value: 'S.3XX-S.350.3',
              className: "S_3XX-8",
              isSelected: false
            },
            {
              value: 'S.3XX-S.352.2',
              className: "S_3XX-9",
              isSelected: false
            },
            {
              value: 'S.3XX-S.352.1',
              className: "S_3XX-10",
              isSelected: false
            },
            {
              value: 'S.3XX-S.350.2',
              className: "S_3XX-11",
              isSelected: false
            },
            {
              value: 'S.3XX-S.350.1',
              className: "S_3XX-12",
              isSelected: false
            },
            {
              value: 'S.3XX-S.350',
              className: "S_3XX-13",
              isSelected: false
            },
            {
              value: 'S.3XX-S.352',
              className: "S_3XX-14",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354.5',
              className: "S_3XX-15",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354.7',
              className: "S_3XX-16",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354.6',
              className: "S_3XX-17",
              isSelected: false
            },
            {
              value: 'S.3XX-EL06',
              className: "S_3XX-18",
              isSelected: false
            },
            {
              value: 'S.3XX-S.356',
              className: "S_3XX-19",
              isSelected: false
            },
            {
              value: 'S.3XX-S.358.1',
              className: "S_3XX-20",
              isSelected: false
            },
            {
              value: 'S.3XX-EL09',
              className: "S_3XX-21",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354.4',
              className: "S_3XX-22",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354.2',
              className: "S_3XX-23",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354.3',
              className: "S_3XX-24",
              isSelected: false
            },
            {
              value: 'S.3XX-S.358',
              className: "S_3XX-25",
              isSelected: false
            },
            {
              value: 'S.3XX-S.360',
              className: "S_3XX-26",
              isSelected: false
            },
            {
              value: 'S.3XX-S.357.6',
              className: "S_3XX-27",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354.1',
              className: "S_3XX-28",
              isSelected: false
            },
            {
              value: 'S.3XX-S.349.4',
              className: "S_3XX-29",
              isSelected: false
            },
            {
              value: 'S.3XX-S.351.1',
              className: "S_3XX-30",
              isSelected: false
            },
            {
              value: 'S.3XX-S.347',
              className: "S_3XX-31",
              isSelected: false
            },
            {
              value: 'S.3XX-S.347.2',
              className: "S_3XX-32",
              isSelected: false
            },
            {
              value: 'S.3XX-S.347.1',
              className: "S_3XX-33",
              isSelected: false
            },
            {
              value: 'S.3XX-S.349',
              className: "S_3XX-34",
              isSelected: false
            },
            {
              value: 'S.3XX-S.349.3',
              className: "S_3XX-35",
              isSelected: false
            },
            {
              value: 'S.3XX-S.349.2',
              className: "S_3XX-36",
              isSelected: false
            },
            {
              value: 'S.3XX-S.349.1',
              className: "S_3XX-37",
              isSelected: false
            },
            {
              value: 'S.3XX-S.351',
              className: "S_3XX-38",
              isSelected: false
            },
            {
              value: 'S.3XX-S.353',
              className: "S_3XX-39",
              isSelected: false
            },
            {
              value: 'S.3XX-S.349.5',
              className: "S_3XX-40",
              isSelected: false
            },
            {
              value: 'S.3XX-EL05',
              className: "S_3XX-41",
              isSelected: false
            },
            {
              value: 'S.3XX-S.353.1',
              className: "S_3XX-42",
              isSelected: false
            },
            {
              value: 'S.3XX-S.353.4',
              className: "S_3XX-43",
              isSelected: false
            },
            {
              value: 'S.3XX-S.353.2',
              className: "S_3XX-44",
              isSelected: false
            },
            {
              value: 'S.3XX-S.353.3',
              className: "S_3XX-45",
              isSelected: false
            },
            {
              value: 'S.3XX-EL08',
              className: "S_3XX-46",
              isSelected: false
            },
            {
              value: 'S.3XX-S.357.2',
              className: "S_3XX-47",
              isSelected: false
            },
            {
              value: 'S.3XX-S.357.1',
              className: "S_3XX-48",
              isSelected: false
            },
            {
              value: 'S.3XX-S.357',
              className: "S_3XX-49",
              isSelected: false
            },
            {
              value: 'S.3XX-SK03',
              className: "S_3XX-50",
              isSelected: false
            },
            {
              value: 'S.3XX-S.357.3',
              className: "S_3XX-51",
              isSelected: false
            },
            {
              value: 'S.3XX-S.357.4',
              className: "S_3XX-52",
              isSelected: false
            },
            {
              value: 'S.3XX-TR07',
              className: "S_3XX-53",
              isSelected: false
            },
            {
              value: 'S.3XX-S.357.5',
              className: "S_3XX-54",
              isSelected: false
            },
            {
              value: 'S.3XX-EL07',
              className: "S_3XX-55",
              isSelected: false
            },
          ]
        },


      ]
    },

    // jg end ground floor

    // jg first floor start
    {
      buildingId: '16',
      planType: "JG - 1st Floor",
      zoneList: [
        {
          floorName: 'Zone 1.0XX',
          zoneSubList: [
            {
              value: '1.0XX-EL02',
              className: "S_1_0XX-1",
              isSelected: false
            },
            {
              value: '1.0XX-1.004.1',
              className: "S_1_0XX-2",
              isSelected: false
            },
            {
              value: '1.0XX-TR02',
              className: "S_1_0XX-3",
              isSelected: false
            },
            {
              value: '1.0XX-SK02',
              className: "S_1_0XX-4",
              isSelected: false
            },
            {
              value: '1.0XX-1.002',
              className: "S_1_0XX-5",
              isSelected: false
            },
            {
              value: '1.0XX-1.002.1',
              className: "S_1_0XX-6",
              isSelected: false
            },
            {
              value: '1.0XX-1.004',
              className: "S_1_0XX-7",
              isSelected: false
            },
            {
              value: '1.0XX-1.008',
              className: "S_1_0XX-8",
              isSelected: false
            },
            {
              value: '1.0XX-SK06',
              className: "S_1_0XX-9",
              isSelected: false
            },
            {
              value: '1.0XX-1.004.2',
              className: "S_1_0XX-10",
              isSelected: false
            },
            {
              value: '1.0XX-1.003.2',
              className: "S_1_0XX-11",
              isSelected: false
            },
            {
              value: '1.0XX-1.003.4',
              className: "S_1_0XX-12",
              isSelected: false
            },
            {
              value: '1.0XX-1.003.3',
              className: "S_1_0XX-13",
              isSelected: false
            },
            {
              value: '1.0XX-1.003',
              className: "S_1_0XX-14",
              isSelected: false
            },
            {
              value: '1.0XX-1.003.9',
              className: "S_1_0XX-15",
              isSelected: false
            },
            {
              value: '1.0XX-1.003.10',
              className: "S_1_0XX-16",
              isSelected: false
            },
            {
              value: '1.0XX-1.005.2',
              className: "S_1_0XX-17",
              isSelected: false
            },
            {
              value: '1.0XX-1.007.1',
              className: "S_1_0XX-18",
              isSelected: false
            },
            {
              value: '1.0XX-1.007.3',
              className: "S_1_0XX-19",
              isSelected: false
            },
            {
              value: '1.0XX-1.007.5',
              className: "S_1_0XX-20",
              isSelected: false
            },
            {
              value: '1.0XX-1.007',
              className: "S_1_0XX-21",
              isSelected: false
            },
            {
              value: '1.0XX-1.003.5',
              className: "S_1_0XX-22",
              isSelected: false
            },
            {
              value: '1.0XX-1.005.1',
              className: "S_1_0XX-23",
              isSelected: false
            },
            {
              value: '1.0XX-1.007.2',
              className: "S_1_0XX-24",
              isSelected: false
            },
            {
              value: '1.0XX-1.001',
              className: "S_1_0XX-25",
              isSelected: false
            },
            {
              value: '1.0XX-EL01',
              className: "S_1_0XX-26",
              isSelected: false
            },
            {
              value: '1.0XX-1.003.1',
              className: "S_1_0XX-27",
              isSelected: false
            },
            {
              value: '1.0XX-SK01',
              className: "S_1_0XX-28",
              isSelected: false
            },
            {
              value: '1.0XX-TR01',
              className: "S_1_0XX-29",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 1.1XX',
          zoneSubList: [
            {
              value: '1.1XX-1.118',
              className: "S_1_1XX-1",
              isSelected: false
            },
            {
              value: '1.1XX-1.120',
              className: "S_1_1XX-2",
              isSelected: false
            },
            {
              value: '1.1XX-TR04',
              className: "S_1_1XX-3",
              isSelected: false
            },
            {
              value: '1.1XX-1.112.1',
              className: "S_1_1XX-4",
              isSelected: false
            },
            {
              value: '1.1XX-1.128',
              className: "S_1_1XX-5",
              isSelected: false
            },
            {
              value: '1.1XX-1.111-Line3',
              className: "S_1_1XX-6",
              isSelected: false
            },
            {
              value: '1.1XX-1.111-Line2',
              className: "S_1_1XX-7",
              isSelected: false
            },
            {
              value: '1.1XX-1.111-Line1',
              className: "S_1_1XX-8",
              isSelected: false
            },
            {
              value: '1.1XX-1.109',
              className: "S_1_1XX-9",
              isSelected: false
            },
            {
              value: '1.1XX-1.130',
              className: "S_1_1XX-10",
              isSelected: false
            },
            {
              value: '1.1XX-EL03',
              className: "S_1_1XX-11",
              isSelected: false
            },
            {
              value: '1.1XX-1.119',
              className: "S_1_1XX-12",
              isSelected: false
            },
            {
              value: '1.1XX-TR03',
              className: "S_1_1XX-13",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 1.2XX',
          zoneSubList: [
            {
              value: '1.2XX-TR06',
              className: "S_1_2XX-1",
              isSelected: false
            },
            {
              value: '1.2XX-1.242',
              className: "S_1_2XX-2",
              isSelected: false
            },
            {
              value: '1.2XX-EL04',
              className: "S_1_2XX-3",
              isSelected: false
            },
            {
              value: '1.2XX-1.231-Line3',
              className: "S_1_2XX-4",
              isSelected: false
            },
            {
              value: '1.2XX-1.231-Line2',
              className: "S_1_2XX-5",
              isSelected: false
            },
            {
              value: '1.2XX-1.231-Line1',
              className: "S_1_2XX-6",
              isSelected: false
            },
            {
              value: '1.2XX-1.130',
              className: "S_1_2XX-7",
              isSelected: false
            },
            {
              value: '1.2XX-TR05',
              className: "S_1_2XX-8",
              isSelected: false
            },
            {
              value: '1.2XX-1.241',
              className: "S_1_2XX-9",
              isSelected: false
            },
            {
              value: '1.2XX-1.243',
              className: "S_1_2XX-10 ",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 1.3XX',
          zoneSubList: [
            {
              value: '1.3XX-TR08',
              className: "S_1_3XX-1",
              isSelected: false
            },
            {
              value: '1.3XX-1.358',
              className: "S_1_3XX-2",
              isSelected: false
            },
            {
              value: '1.3XX-SK05',
              className: "S_1_3XX-3",
              isSelected: false
            },
            {
              value: '1.3XX-SK04',
              className: "S_1_3XX-4",
              isSelected: false
            },
            {
              value: '1.3XX-1.350',
              className: "S_1_3XX-5",
              isSelected: false
            },
            {
              value: '1.3XX-1.350.4',
              className: "S_1_3XX-6",
              isSelected: false
            },
            {
              value: '1.3XX-1.350.5',
              className: "S_1_3XX-7",
              isSelected: false
            },
            {
              value: '1.3XX-1.350.3',
              className: "S_1_3XX-8",
              isSelected: false
            },
            {
              value: '1.3XX-1.350.2',
              className: "S_1_3XX-9",
              isSelected: false
            },
            {
              value: '1.3XX-SK10',
              className: "S_1_3XX-10",
              isSelected: false
            },
            {
              value: '1.3XX-1.354.2',
              className: "S_1_3XX-11",
              isSelected: false
            },
            {
              value: '1.3XX-1.354.1',
              className: "S_1_3XX-12",
              isSelected: false
            },
            {
              value: '1.3XX-EL06',
              className: "S_1_3XX-13",
              isSelected: false
            },
            {
              value: '1.3XX-SK12',
              className: "S_1_3XX-14",
              isSelected: false
            },
            {
              value: '1.3XX-EL09',
              className: "S_1_3XX-15",
              isSelected: false
            },
            {
              value: '1.3XX-SK11',
              className: "S_1_3XX-16",
              isSelected: false
            },
            {
              value: '1.3XX-1.352',
              className: "S_1_3XX-17",
              isSelected: false
            },
            {
              value: '1.3XX-1.347',
              className: "S_1_3XX-18",
              isSelected: false
            },
            {
              value: '1.3XX-1.349.5',
              className: "S_1_3XX-19",
              isSelected: false
            },
            {
              value: '1.3XX-1.349.6',
              className: "S_1_3XX-20",
              isSelected: false
            },
            {
              value: '1.3XX-1.349.4',
              className: "S_1_3XX-21",
              isSelected: false
            },
            {
              value: '1.3XX-1.351.1',
              className: "S_1_3XX-22",
              isSelected: false
            },
            {
              value: '1.3XX-1.354',
              className: "S_1_3XX-23",
              isSelected: false
            },
            {
              value: '1.3XX-1.349.3',
              className: "S_1_3XX-24",
              isSelected: false
            },
            {
              value: '1.3XX-1.349.2',
              className: "S_1_3XX-25",
              isSelected: false
            },
            {
              value: '1.3XX-1.349.1',
              className: "S_1_3XX-26",
              isSelected: false
            },
            {
              value: '1.3XX-1.351',
              className: "S_1_3XX-27",
              isSelected: false
            },
            {
              value: '1.3XX-1.353',
              className: "S_1_3XX-28",
              isSelected: false
            },
            {
              value: '1.3XX-EL05',
              className: "S_1_3XX-29",
              isSelected: false
            },
            {
              value: '1.3XX-1.355',
              className: "S_1_3XX-30",
              isSelected: false
            },
            {
              value: '1.3XX-SK09',
              className: "S_1_3XX-31",
              isSelected: false
            },
            {
              value: '1.3XX-EL08',
              className: "S_1_3XX-32",
              isSelected: false
            },
            {
              value: '1.3XX-SK08',
              className: "S_1_3XX-33",
              isSelected: false
            },
            {
              value: '1.3XX-1.357.1',
              className: "S_1_3XX-34",
              isSelected: false
            },
            {
              value: '1.3XX-1.349',
              className: "S_1_3XX-35",
              isSelected: false
            },
            {
              value: '1.3XX-SK03',
              className: "S_1_3XX-36",
              isSelected: false
            },
            {
              value: '1.3XX-TR07',
              className: "S_1_3XX-37",
              isSelected: false
            },
            {
              value: '1.3XX-1.357',
              className: "S_1_3XX-38",
              isSelected: false
            },
            {
              value: '1.3XX-EL07',
              className: "S_1_3XX-39",
              isSelected: false
            },
          ]
        },
      ]
    },

    // jg first floor end

    //jg second floor start
    {
      buildingId: '16',
      planType: "JG - 2nd Floor",
      zoneList: [
        {
          floorName: 'Zone 2.0XX',
          zoneSubList: [
            {
              value: '2.0XX-EL02',
              className: "JG_2_0XX-1",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.8',
              className: "JG_2_0XX-2",
              isSelected: false
            },
            {
              value: '2.0XX-TR02',
              className: "JG_2_0XX-3",
              isSelected: false
            },
            {
              value: '2.0XX-SK02',
              className: "JG_2_0XX-4",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.2',
              className: "JG_2_0XX-5",
              isSelected: false
            },
            {
              value: '2.0XX-2.006.1',
              className: "JG_2_0XX-6",
              isSelected: false
            },
            {
              value: '2.0XX-2.006.2',
              className: "JG_2_0XX-7",
              isSelected: false
            },
            {
              value: '2.0XX-2.010',
              className: "JG_2_0XX-8",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.1',
              className: "JG_2_0XX-9",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.6',
              className: "JG_2_0XX-10",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.7',
              className: "JG_2_0XX-11",
              isSelected: false
            },
            {
              value: '2.0XX-2.004',
              className: "JG_2_0XX-12",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.4',
              className: "JG_2_0XX-13",
              isSelected: false
            },
            {
              value: '2.0XX-SK06',
              className: "JG_2_0XX-14",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.5',
              className: "JG_2_0XX-15",
              isSelected: false
            },
            {
              value: '2.0XX-2.008.1',
              className: "JG_2_0XX-16",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.3',
              className: "JG_2_0XX-17",
              isSelected: false
            },
            {
              value: '2.0XX-2.006',
              className: "JG_2_0XX-18",
              isSelected: false
            },
            {
              value: '2.0XX-2.008',
              className: "JG_2_0XX-19",
              isSelected: false
            },
            {
              value: '2.0XX-2.001',
              className: "JG_2_0XX-20",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.6',
              className: "JG_2_0XX-21",
              isSelected: false
            },
            {
              value: '2.0XX-2.005',
              className: "JG_2_0XX-22",
              isSelected: false
            },
            {
              value: '2.0XX-2.005.4',
              className: "JG_2_0XX-23",
              isSelected: false
            },
            {
              value: '2.0XX-2.007.2',
              className: "JG_2_0XX-24",
              isSelected: false
            },
            {
              value: '2.0XX-2.009.2',
              className: "JG_2_0XX-25",
              isSelected: false
            },
            {
              value: '2.0XX-2.005.3',
              className: "JG_2_0XX-26",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.7',
              className: "JG_2_0XX-27",
              isSelected: false
            },
            {
              value: '2.0XX-2.005.2',
              className: "JG_2_0XX-28",
              isSelected: false
            },
            {
              value: '2.0XX-2.009.1',
              className: "JG_2_0XX-29",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.5',
              className: "JG_2_0XX-30",
              isSelected: false
            },
            {
              value: '2.0XX-2.005.1',
              className: "JG_2_0XX-31",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.8',
              className: "JG_2_0XX-32",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.4',
              className: "JG_2_0XX-33",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.3',
              className: "JG_2_0XX-34",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.1',
              className: "JG_2_0XX-35",
              isSelected: false
            },
            {
              value: '2.0XX-2.009',
              className: "JG_2_0XX-36",
              isSelected: false
            },
            {
              value: '2.0XX-EL01',
              className: "JG_2_0XX-37",
              isSelected: false
            },
            {
              value: '2.0XX-2.003',
              className: "JG_2_0XX-38",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.11',
              className: "JG_2_0XX-39",
              isSelected: false
            },
            {
              value: '2.0XX-SK01',
              className: "JG_2_0XX-40",
              isSelected: false
            },
            {
              value: '2.0XX-TR01',
              className: "JG_2_0XX-41",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 2.1XX',
          zoneSubList: [
            {
              value: '2.1XX-SK17',
              className: "JG_2_1XX-1",
              isSelected: false
            },
            {
              value: '2.1XX-SK21',
              className: "JG_2_1XX-2",
              isSelected: false
            },
            {
              value: '2.1XX-2.118',
              className: "JG_2_1XX-3",
              isSelected: false
            },
            {
              value: '2.1XX-2.120',
              className: "JG_2_1XX-4",
              isSelected: false
            },
            {
              value: '2.1XX-TR04',
              className: "JG_2_1XX-5",
              isSelected: false
            },
            {
              value: '2.1XX-SK25',
              className: "JG_2_1XX-6",
              isSelected: false
            },
            {
              value: '2.1XX-SK29',
              className: "JG_2_1XX-7",
              isSelected: false
            },
            {
              value: '2.1XX-SK33',
              className: "JG_2_1XX-8",
              isSelected: false
            },
            {
              value: '2.1XX-2.111-LINE_3',
              className: "JG_2_1XX-9",
              isSelected: false
            },
            {
              value: '2.1XX-SK16',
              className: "JG_2_1XX-10",
              isSelected: false
            },
            {
              value: '2.1XX-SK20',
              className: "JG_2_1XX-11",
              isSelected: false
            },
            {
              value: '2.1XX-SK24',
              className: "JG_2_1XX-12",
              isSelected: false
            },
            {
              value: '2.1XX-SK28',
              className: "JG_2_1XX-13",
              isSelected: false
            },
            {
              value: '2.1XX-SK32',
              className: "JG_2_1XX-14",
              isSelected: false
            },
            {
              value: '2.1XX-2.111-LINE-2',
              className: "JG_2_1XX-15",
              isSelected: false
            },
            {
              value: '2.1XX-SK15',
              className: "JG_2_1XX-16",
              isSelected: false
            },
            {
              value: '2.1XX-SK19',
              className: "JG_2_1XX-17",
              isSelected: false
            },
            {
              value: '2.1XX-SK23',
              className: "JG_2_1XX-18",
              isSelected: false
            },
            {
              value: '2.1XX-SK27',
              className: "JG_2_1XX-19",
              isSelected: false
            },
            {
              value: '2.1XX-SK31',
              className: "JG_2_1XX-20",
              isSelected: false
            },
            {
              value: '2.1XX-2.111-LINE-2',
              className: "JG_2_1XX-21",
              isSelected: false
            },
            {
              value: '2.1XX-SK14',
              className: "JG_2_1XX-22",
              isSelected: false
            },
            {
              value: '2.1XX-SK18',
              className: "JG_2_1XX-23",
              isSelected: false
            },
            {
              value: '2.1XX-SK22',
              className: "JG_2_1XX-24",
              isSelected: false
            },
            {
              value: '2.1XX-SK26',
              className: "JG_2_1XX-25",
              isSelected: false
            },
            {
              value: '2.1XX-SK30',
              className: "JG_2_1XX-26",
              isSelected: false
            },
            {
              value: '2.1XX-EL03',
              className: "JG_2_1XX-27",
              isSelected: false
            },
            {
              value: '2.1XX-2.119',
              className: "JG_2_1XX-28",
              isSelected: false
            },
            {
              value: '2.1XX-TR03',
              className: "JG_2_1XX-29",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 2.2XX',
          zoneSubList: [
            {
              value: '2.2XX-SK37',
              className: "JG_2_2XX-1",
              isSelected: false
            },
            {
              value: '2.2XX-SK41',
              className: "JG_2_2XX-2",
              isSelected: false
            },
            {
              value: '2.2XX-SK45',
              className: "JG_2_2XX-3",
              isSelected: false
            },
            {
              value: '2.2XX-TR06',
              className: "JG_2_2XX-4",
              isSelected: false
            },
            {
              value: '2.2XX-2.242',
              className: "JG_2_2XX-5",
              isSelected: false
            },
            {
              value: '2.2XX-EL04',
              className: "JG_2_2XX-6",
              isSelected: false
            },
            {
              value: '2.2XX-2.231-LINE_3',
              className: "JG_2_2XX-7",
              isSelected: false
            },
            {
              value: '2.2XX-SK36',
              className: "JG_2_2XX-8",
              isSelected: false
            },
            {
              value: '2.2XX-SK40',
              className: "JG_2_2XX-9",
              isSelected: false
            },
            {
              value: '2.2XX-SK44',
              className: "JG_2_2XX-10",
              isSelected: false
            },
            {
              value: '2.2XX-2.231-LINE_2',
              className: "JG_2_2XX-11",
              isSelected: false
            },
            {
              value: '2.2XX-SK35',
              className: "JG_2_2XX-12",
              isSelected: false
            },
            {
              value: '2.2XX-SK39',
              className: "JG_2_2XX-13",
              isSelected: false
            },
            {
              value: '2.2XX-SK43',
              className: "JG_2_2XX-14",
              isSelected: false
            },
            {
              value: '2.2XX-2.231-LINE_1',
              className: "JG_2_2XX-15",
              isSelected: false
            },
            {
              value: '2.2XX-SK34',
              className: "JG_2_2XX-16",
              isSelected: false
            },
            {
              value: '2.2XX-SK38',
              className: "JG_2_2XX-17",
              isSelected: false
            },
            {
              value: '2.2XX-SK42',
              className: "JG_2_2XX-18",
              isSelected: false
            },
            {
              value: '2.2XX-TR05',
              className: "JG_2_2XX-19",
              isSelected: false
            },
            {
              value: '2.2XX-2.241',
              className: "JG_2_2XX-20",
              isSelected: false
            },
            {
              value: '2.2XX-2.243',
              className: "JG_2_2XX-21",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 2.3XX',
          zoneSubList: [
            {
              value: '2.3XX-TR08',
              className: "JG_2_3XX-1",
              isSelected: false
            },
            {
              value: '2.3XX-2.358',
              className: "JG_2_3XX-2",
              isSelected: false
            },
            {
              value: '2.3XX-SK05',
              className: "JG_2_3XX-3",
              isSelected: false
            },
            {
              value: '2.3XX-SK04',
              className: "JG_2_3XX-4",
              isSelected: false
            },
            {
              value: '2.3XX-2.350.4',
              className: "JG_2_3XX-5",
              isSelected: false
            },
            {
              value: '2.3XX-2.350.5',
              className: "JG_2_3XX-6",
              isSelected: false
            },
            {
              value: '2.3XX-SK10',
              className: "JG_2_3XX-7",
              isSelected: false
            },
            {
              value: '2.3XX-2.354.2',
              className: "JG_2_3XX-8",
              isSelected: false
            },
            {
              value: '2.3XX-2.354.1',
              className: "JG_2_3XX-9",
              isSelected: false
            },
            {
              value: '2.3XX-EL06',
              className: "JG_2_3XX-10",
              isSelected: false
            },
            {
              value: '2.3XX-SK12',
              className: "JG_2_3XX-11",
              isSelected: false
            },
            {
              value: '2.3XX-EL09',
              className: "JG_2_3XX-12",
              isSelected: false
            },
            {
              value: '2.3XX-SK11',
              className: "JG_2_3XX-13",
              isSelected: false
            },
            {
              value: '2.3XX-2.358.1',
              className: "JG_2_3XX-14",
              isSelected: false
            },
            {
              value: '2.3XX-2.352.1',
              className: "JG_2_3XX-15",
              isSelected: false
            },
            {
              value: '2.3XX-2.350.3',
              className: "JG_2_3XX-16",
              isSelected: false
            },
            {
              value: '2.3XX-2.350.1',
              className: "JG_2_3XX-17",
              isSelected: false
            },
            {
              value: '2.3XX-2.352',
              className: "JG_2_3XX-18",
              isSelected: false
            },
            {
              value: '2.3XX-2.354',
              className: "JG_2_3XX-19",
              isSelected: false
            },
            {
              value: '2.3XX-2.356',
              className: "JG_2_3XX-20",
              isSelected: false
            },
            {
              value: '2.3XX-SK47',
              className: "JG_2_3XX-21",
              isSelected: false
            },
            {
              value: '2.3XX-2.356.2',
              className: "JG_2_3XX-22",
              isSelected: false
            },
            {
              value: '2.3XX-2.356.1',
              className: "JG_2_3XX-23",
              isSelected: false
            },
            {
              value: '2.3XX-2.350',
              className: "JG_2_3XX-24",
              isSelected: false
            },
            {
              value: '2.3XX-2.347',
              className: "JG_2_3XX-25",
              isSelected: false
            },
            {
              value: '2.3XX-2.349.3',
              className: "JG_2_3XX-26",
              isSelected: false
            },
            {
              value: '2.3XX-2.353',
              className: "JG_2_3XX-27",
              isSelected: false
            },
            {
              value: '2.3XX-2.359',
              className: "JG_2_3XX-28",
              isSelected: false
            },
            {
              value: '2.3XX-2.349.2',
              className: "JG_2_3XX-29",
              isSelected: false
            },
            {
              value: '2.3XX-2.349.5',
              className: "JG_2_3XX-30",
              isSelected: false
            },
            {
              value: '2.3XX-2.349.4',
              className: "JG_2_3XX-31",
              isSelected: false
            },
            {
              value: '2.3XX-2.351.1',
              className: "JG_2_3XX-32",
              isSelected: false
            },
            {
              value: '2.3XX-SK46',
              className: "JG_2_3XX-33",
              isSelected: false
            },
            {
              value: '2.3XX-2.349.1',
              className: "JG_2_3XX-34",
              isSelected: false
            },
            {
              value: '2.3XX-2.351',
              className: "JG_2_3XX-35",
              isSelected: false
            },
            {
              value: '2.3XX-EL05',
              className: "JG_2_3XX-36",
              isSelected: false
            },
            {
              value: '2.3XX-SK09',
              className: "JG_2_3XX-37",
              isSelected: false
            },
            {
              value: '2.3XX-EL08',
              className: "JG_2_3XX-38",
              isSelected: false
            },
            {
              value: '2.3XX-SK08',
              className: "JG_2_3XX-39",
              isSelected: false
            },
            {
              value: '2.3XX-2.349',
              className: "JG_2_3XX-40",
              isSelected: false
            },
            {
              value: '2.3XX-SK03',
              className: "JG_2_3XX-41",
              isSelected: false
            },
            {
              value: '2.3XX-TR07',
              className: "JG_2_3XX-42",
              isSelected: false
            },
            {
              value: '2.3XX-EL07',
              className: "JG_2_3XX-43",
              isSelected: false
            },
          ]
        },
      ]
    },

    // jg second floor end

    // jg third floor start
    {
      buildingId: '16',
      planType: "JG - 3rd Floor",
      zoneList: [
        {
          floorName: 'Zone 3.0XX',
          zoneSubList: [
            {
              value: '3.0XX-EL02',
              className: "JG_3_0XX-1",
              isSelected: false
            },
            {
              value: '3.0XX-3.0041',
              className: "JG_3_0XX-2",
              isSelected: false
            },
            {
              value: '3.0XX-TR02',
              className: "JG_3_0XX-3",
              isSelected: false
            },
            {
              value: '3.0XX-3.006.1',
              className: "JG_3_0XX-4",
              isSelected: false
            },
            {
              value: '3.0XX-SK02',
              className: "JG_3_0XX-5",
              isSelected: false
            },
            {
              value: '3.0XX-3.004',
              className: "JG_3_0XX-6",
              isSelected: false
            },
            {
              value: '3.0XX-3.004.2',
              className: "JG_3_0XX-7",
              isSelected: false
            },
            {
              value: '3.0XX-3.002.1',
              className: "JG_3_0XX-8",
              isSelected: false
            },
            {
              value: '3.0XX-3.004.3',
              className: "JG_3_0XX-9",
              isSelected: false
            },
            {
              value: '3.0XX-SK06',
              className: "JG_3_0XX-10",
              isSelected: false
            },
            {
              value: '3.0XX-3.010',
              className: "JG_3_0XX-11",
              isSelected: false
            },
            {
              value: '3.0XX-3.002',
              className: "JG_3_0XX-12",
              isSelected: false
            },
            {
              value: '3.0XX-3.008.1',
              className: "JG_3_0XX-13",
              isSelected: false
            },
            {
              value: '3.0XX-3.008.2',
              className: "JG_3_0XX-14",
              isSelected: false
            },
            {
              value: '3.0XX-3.008.4',
              className: "JG_3_0XX-15",
              isSelected: false
            },
            {
              value: '3.0XX-3.004.4',
              className: "JG_3_0XX-16",
              isSelected: false
            },
            {
              value: '3.0XX-3.006',
              className: "JG_3_0XX-17",
              isSelected: false
            },
            {
              value: '3.0XX-3.008.3',
              className: "JG_3_0XX-18",
              isSelected: false
            },
            {
              value: '3.0XX-3.109',
              className: "JG_3_0XX-19",
              isSelected: false
            },
            {
              value: '3.0XX-3.001',
              className: "JG_3_0XX-20",
              isSelected: false
            },
            {
              value: '3.0XX-3.003.4',
              className: "JG_3_0XX-21",
              isSelected: false
            },
            {
              value: '3.0XX-3.003.2',
              className: "JG_3_0XX-22",
              isSelected: false
            },
            {
              value: '3.0XX-3.005',
              className: "JG_3_0XX-23",
              isSelected: false
            },
            {
              value: '3.0XX-3.009',
              className: "JG_3_0XX-24",
              isSelected: false
            },
            {
              value: '3.0XX-3.003',
              className: "JG_3_0XX-25",
              isSelected: false
            },
            {
              value: '3.0XX-EL01',
              className: "JG_3_0XX-26",
              isSelected: false
            },
            {
              value: '3.0XX-3.003.1',
              className: "JG_3_0XX-27",
              isSelected: false
            },
            {
              value: '3.0XX-TR01',
              className: "JG_3_0XX-28",
              isSelected: false
            },
            {
              value: '3.0XX-SK01',
              className: "JG_3_0XX-29",
              isSelected: false
            },
            {
              value: '3.0XX-3.008',
              className: "JG_3_0XX-30",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 3.3XX',
          zoneSubList: [
            {
              value: '3.3XX-TR08',
              className: "JG_3_3XX-1",
              isSelected: false
            },
            {
              value: '3.3XX-3.358.2',
              className: "JG_3_3XX-2",
              isSelected: false
            },
            {
              value: '3.3XX-SK05',
              className: "JG_3_3XX-3",
              isSelected: false
            },
            {
              value: '3.3XX-SK04',
              className: "JG_3_3XX-4",
              isSelected: false
            },
            {
              value: '3.3XX-3.350.4',
              className: "JG_3_3XX-5",
              isSelected: false
            },
            {
              value: '3.3XX-3.348.1',
              className: "JG_3_3XX-6",
              isSelected: false
            },
            {
              value: '3.3XX-3.350.5',
              className: "JG_3_3XX-7",
              isSelected: false
            },
            {
              value: '3.3XX-3.354',
              className: "JG_3_3XX-8",
              isSelected: false
            },
            {
              value: '3.3XX-3.350.3',
              className: "JG_3_3XX-9",
              isSelected: false
            },
            {
              value: '3.3XX-SK10',
              className: "JG_3_3XX-10",
              isSelected: false
            },
            {
              value: '3.3XX-3.354.1',
              className: "JG_3_3XX-11",
              isSelected: false
            },
            {
              value: '3.3XX-3.354.2',
              className: "JG_3_3XX-12",
              isSelected: false
            },
            {
              value: '3.3XX-SK12',
              className: "JG_3_3XX-13",
              isSelected: false
            },
            {
              value: '3.3XX-EL06',
              className: "JG_3_3XX-14",
              isSelected: false
            },
            {
              value: '3.3XX-EL09',
              className: "JG_3_3XX-15",
              isSelected: false
            },
            {
              value: '3.3XX-SK11',
              className: "JG_3_3XX-16",
              isSelected: false
            },
            {
              value: '3.3XX-3.360',
              className: "JG_3_3XX-17",
              isSelected: false
            },
            {
              value: '3.3XX-3.350.2',
              className: "JG_3_3XX-18",
              isSelected: false
            },
            {
              value: '3.3XX-3.354.3',
              className: "JG_3_3XX-19",
              isSelected: false
            },
            {
              value: '3.3XX-3.356',
              className: "JG_3_3XX-20",
              isSelected: false
            },
            {
              value: '3.3XX-3.356.3',
              className: "JG_3_3XX-21",
              isSelected: false
            },
            {
              value: '3.3XX-3.354.5',
              className: "JG_3_3XX-22",
              isSelected: false
            },
            {
              value: '3.3XX-3.356.1',
              className: "JG_3_3XX-23",
              isSelected: false
            },
            {
              value: '3.3XX-SK47',
              className: "JG_3_3XX-24",
              isSelected: false
            },
            {
              value: '3.3XX-3.358',
              className: "JG_3_3XX-25",
              isSelected: false
            },
            {
              value: '3.3XX-3.350',
              className: "JG_3_3XX-26",
              isSelected: false
            },
            {
              value: '3.3XX-3.354.6',
              className: "JG_3_3XX-27",
              isSelected: false
            },
            {
              value: '3.3XX-3.356.2',
              className: "JG_3_3XX-28",
              isSelected: false
            },
            {
              value: '3.3XX-3.356.4',
              className: "JG_3_3XX-29",
              isSelected: false
            },
            {
              value: '3.3XX-3.358.1',
              className: "JG_3_3XX-30",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.10',
              className: "JG_3_3XX-31",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.11',
              className: "JG_3_3XX-32",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.9',
              className: "JG_3_3XX-33",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.8',
              className: "JG_3_3XX-34",
              isSelected: false
            },
            {
              value: '3.3XX-3.351',
              className: "JG_3_3XX-35",
              isSelected: false
            },
            {
              value: '3.3XX-3.353',
              className: "JG_3_3XX-36",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.7',
              className: "JG_3_3XX-37",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.6',
              className: "JG_3_3XX-38",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.4',
              className: "JG_3_3XX-39",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.5',
              className: "JG_3_3XX-40",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.3',
              className: "JG_3_3XX-41",
              isSelected: false
            },
            {
              value: '3.3XX-3.347.1',
              className: "JG_3_3XX-42",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.2',
              className: "JG_3_3XX-43",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.1',
              className: "JG_3_3XX-44",
              isSelected: false
            },
            {
              value: '3.3XX-3.349',
              className: "JG_3_3XX-45",
              isSelected: false
            },
            {
              value: '3.3XX-SK46',
              className: "JG_3_3XX-46",
              isSelected: false
            },
            {
              value: '3.3XX-3.353.1',
              className: "JG_3_3XX-47",
              isSelected: false
            },
            {
              value: '3.3XX-EL05',
              className: "JG_3_3XX-48",
              isSelected: false
            },
            {
              value: '3.3XX-3.357',
              className: "JG_3_3XX-49",
              isSelected: false
            },
            {
              value: '3.3XX-SK09',
              className: "JG_3_3XX-50",
              isSelected: false
            },
            {
              value: '3.3XX-EL08',
              className: "JG_3_3XX-51",
              isSelected: false
            },
            {
              value: '3.3XX-SK08',
              className: "JG_3_3XX-52",
              isSelected: false
            },
            {
              value: '3.3XX-3.357.1',
              className: "JG_3_3XX-53",
              isSelected: false
            },
            {
              value: '3.3XX-3.359',
              className: "JG_3_3XX-54",
              isSelected: false
            },
            {
              value: '3.3XX-3.352',
              className: "JG_3_3XX-55",
              isSelected: false
            },
            {
              value: '3.3XX-3.347',
              className: "JG_3_3XX-56",
              isSelected: false
            },
            {
              value: '3.3XX-SK03',
              className: "JG_3_3XX-57",
              isSelected: false
            },
            {
              value: '3.3XX-TR07',
              className: "JG_3_3XX-58",
              isSelected: false
            },
            {
              value: '3.3XX-EL07',
              className: "JG_3_3XX-59",
              isSelected: false
            },
            {
              value: '3.3XX-3.350.1',
              className: "JG_3_3XX-60",
              isSelected: false
            },
            {
              value: '3.3XX-3.347.2',
              className: "JG_3_3XX-61",
              isSelected: false
            },
            {
              value: '3.3XX-3.346',
              className: "JG_3_3XX-62",
              isSelected: false
            }
          ]
        },
      ]
    },

    // jg third floor end

    //jg 4th floor start

    {
      buildingId: '16',
      planType: "JG - 4th Floor",
      zoneList: [
        {
          floorName: 'Zone 4.0XX',
          zoneSubList: [
            {
              value: '4.0XX-4.002',
              className: "JG_4_0XX-1",
              isSelected: false
            },
            {
              value: '4.0XX-TR02',
              className: "JG_4_0XX-2",
              isSelected: false
            },
            {
              value: '4.0XX-4.004',
              className: "JG_4_0XX-3",
              isSelected: false
            },
            {
              value: '4.0XX-4.015',
              className: "JG_4_0XX-4",
              isSelected: false
            },
            {
              value: '4.0XX-4.003.3',
              className: "JG_4_0XX-5",
              isSelected: false
            },
            {
              value: '4.0XX-4.001.1',
              className: "JG_4_0XX-6",
              isSelected: false
            },
            {
              value: '4.0XX-4.003.2',
              className: "JG_4_0XX-7",
              isSelected: false
            },
            {
              value: '4.0XX-4.005',
              className: "JG_4_0XX-8",
              isSelected: false
            },
            {
              value: '4.0XX-4.003',
              className: "JG_4_0XX-9",
              isSelected: false
            },
            {
              value: '4.0XX-SK01',
              className: "JG_4_0XX-10",
              isSelected: false
            },
            {
              value: '4.0XX-EL01',
              className: "JG_4_0XX-11",
              isSelected: false
            },
            {
              value: '4.0XX-4.003.1',
              className: "JG_4_0XX-12",
              isSelected: false
            },
            {
              value: '4.0XX-TR01',
              className: "JG_4_0XX-13",
              isSelected: false
            },
            {
              value: '4.0XX-HVAC Floor 0',
              className: "JG_4_0XX-14",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 4.1XX',
          zoneSubList: [
            {
              value: '4.1XX-4.118',
              className: "JG_4_1XX-1",
              isSelected: false
            },
            {
              value: '4.1XX-4.120',
              className: "JG_4_1XX-2",
              isSelected: false
            },
            {
              value: '4.1XX-TR04',
              className: "JG_4_1XX-3",
              isSelected: false
            },
            {
              value: '4.1XX-4.118.1',
              className: "JG_4_1XX-4",
              isSelected: false
            },
            {
              value: '4.1XX-4.114.1',
              className: "JG_4_1XX-5",
              isSelected: false
            },
            {
              value: '4.1XX-4.128',
              className: "JG_4_1XX-6",
              isSelected: false
            },
            {
              value: '4.1XX-4.114',
              className: "JG_4_1XX-7",
              isSelected: false
            },
            {
              value: '4.1XX-4.130',
              className: "JG_4_1XX-8",
              isSelected: false
            },
            {
              value: '4.1XX-4.118.2',
              className: "JG_4_1XX-9",
              isSelected: false
            },
            {
              value: '4.1XX-4.248',
              className: "JG_4_1XX-10",
              isSelected: false
            },
            {
              value: '4.1XX-4.128.2',
              className: "JG_4_1XX-11",
              isSelected: false
            },
            {
              value: '4.1XX-4.113',
              className: "JG_4_1XX-12",
              isSelected: false
            },
            {
              value: '4.1XX-4.129',
              className: "JG_4_1XX-13",
              isSelected: false
            },
            {
              value: '4.1XX-4.127',
              className: "JG_4_1XX-14",
              isSelected: false
            },
            {
              value: '4.1XX-4.113.2',
              className: "JG_4_1XX-15",
              isSelected: false
            },
            {
              value: '4.1XX-EL03',
              className: "JG_4_1XX-16",
              isSelected: false
            },
            {
              value: '4.1XX-4.119',
              className: "JG_4_1XX-17",
              isSelected: false
            },
            {
              value: '4.1XX-TR03',
              className: "JG_4_1XX-18",
              isSelected: false
            },
            {
              value: '4.1XX-HVAC Floor 1',
              className: "JG_4_1XX-19",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 4.2XX',
          zoneSubList: [
            {
              value: '4.2XX-TR06',
              className: "JG_4_2XX-1",
              isSelected: false
            },
            {
              value: '4.2XX-4.242',
              className: "JG_4_2XX-2",
              isSelected: false
            },
            {
              value: '4.2XX-EL04',
              className: "JG_4_2XX-3",
              isSelected: false
            },
            {
              value: '4.2XX-4.234',
              className: "JG_4_2XX-4",
              isSelected: false
            },
            {
              value: '4.2XX-4.238',
              className: "JG_4_2XX-5",
              isSelected: false
            },
            {
              value: '4.2XX-4.240',
              className: "JG_4_2XX-6",
              isSelected: false
            },
            {
              value: '4.2XX-4.240.1',
              className: "JG_4_2XX-7",
              isSelected: false
            },
            {
              value: '4.2XX-4.234.1',
              className: "JG_4_2XX-8",
              isSelected: false
            },
            {
              value: '4.2XX-4.232.2',
              className: "JG_4_2XX-9",
              isSelected: false
            },
            {
              value: '4.2XX-4.239',
              className: "JG_4_2XX-10",
              isSelected: false
            },
            {
              value: '4.2XX-4.237',
              className: "JG_4_2XX-11",
              isSelected: false
            },
            {
              value: '4.2XX-4.237.2',
              className: "JG_4_2XX-12",
              isSelected: false
            },
            {
              value: '4.2XX-TR05',
              className: "JG_4_2XX-13",
              isSelected: false
            },
            {
              value: '4.2XX-4.241',
              className: "JG_4_2XX-14",
              isSelected: false
            },
            {
              value: '4.2XX-4.243',
              className: "JG_4_2XX-15",
              isSelected: false
            },
            {
              value: '4.2XX-HVAC Floor 2',
              className: "JG_4_2XX-16",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 4.3XX',
          zoneSubList: [
            {
              value: '4.3XX-TR08',
              className: "JG_4_3XX-1",
              isSelected: false
            },
            {
              value: '4.3XX-4.358.1',
              className: "JG_4_3XX-2",
              isSelected: false
            },
            {
              value: '4.3XX-SK05',
              className: "JG_4_3XX-3",
              isSelected: false
            },
            {
              value: '4.3XX-4.356.1',
              className: "JG_4_3XX-4",
              isSelected: false
            },
            {
              value: '4.3XX-4.354',
              className: "JG_4_3XX-5",
              isSelected: false
            },
            {
              value: '4.3XX-SK04',
              className: "JG_4_3XX-6",
              isSelected: false
            },
            {
              value: '4.3XX-4.356',
              className: "JG_4_3XX-7",
              isSelected: false
            },
            {
              value: '4.3XX-4.358',
              className: "JG_4_3XX-8",
              isSelected: false
            },
            {
              value: '4.3XX-4.352',
              className: "JG_4_3XX-9",
              isSelected: false
            },
            {
              value: '4.3XX-SK47',
              className: "JG_4_3XX-10",
              isSelected: false
            },
            {
              value: '4.3XX-4.351.1',
              className: "JG_4_3XX-11",
              isSelected: false
            },
            {
              value: '4.3XX-SK46',
              className: "JG_4_3XX-12",
              isSelected: false
            },
            {
              value: '4.3XX-4.351',
              className: "JG_4_3XX-13",
              isSelected: false
            },
            {
              value: '4.3XX-4.345',
              className: "JG_4_3XX-14",
              isSelected: false
            },
            {
              value: '4.3XX-4.355',
              className: "JG_4_3XX-15",
              isSelected: false
            },
            {
              value: '4.3XX-SK03',
              className: "JG_4_3XX-16",
              isSelected: false
            },
            {
              value: '4.3XX-TR07',
              className: "JG_4_3XX-17",
              isSelected: false
            },
            {
              value: '4.3XX-4.357',
              className: "JG_4_3XX-18",
              isSelected: false
            },
            {
              value: '4.3XX-EL07',
              className: "JG_4_3XX-19",
              isSelected: false
            },
            {
              value: '4.3XX-HVAC Floor 3',
              className: "JG_4_3XX-20",
              isSelected: false
            },
          ]
        },

      ]
    },

    // jg 4th floor end

    // jg roof floor start

    {
      buildingId: '16',
      planType: "JG - Roof Plan",
      zoneList: [
        {
          floorName: 'Zone 5.0XX',
          zoneSubList: [
            {
              value: '5.0XX-5.002',
              className: "JG_5_0XX-1",
              isSelected: false
            },
            {
              value: '5.0XX-TR02',
              className: "JG_5_0XX-2",
              isSelected: false
            },
            {
              value: '5.0XX-5.004',
              className: "JG_5_0XX-3",
              isSelected: false
            },
            {
              value: '5.0XX-5.001',
              className: "JG_5_0XX-4",
              isSelected: false
            },
            {
              value: '5.0XX-EL01',
              className: "JG_5_0XX-5",
              isSelected: false
            },
            {
              value: '5.0XX-5.003',
              className: "JG_5_0XX-6",
              isSelected: false
            },
            {
              value: '5.0XX-TR01',
              className: "JG_5_0XX-7",
              isSelected: false
            },
            {
              value: '5.0XX-North',
              className: "JG_5_0XX-8",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 5.1XX',
          zoneSubList: [
            {
              value: '5.1XX-5.118',
              className: "JG_5_1XX-1",
              isSelected: false
            },
            {
              value: '5.1XX-TR04',
              className: "JG_5_1XX-2",
              isSelected: false
            },
            {
              value: '5.1XX-EL03',
              className: "JG_5_1XX-3",
              isSelected: false
            },
            {
              value: '5.1XX-5.119',
              className: "JG_5_1XX-4",
              isSelected: false
            },
            {
              value: '5.1XX-TR03',
              className: "JG_5_1XX-5",
              isSelected: false
            },
            {
              value: '5.1XX-5.119.1',
              className: "JG_5_1XX-6",
              isSelected: false
            },
            {
              value: '5.1XX-Fermentation 1',
              className: "JG_5_1XX-7",
              isSelected: false
            }
          ]
        },
        {
          floorName: 'Zone 5.2XX',
          zoneSubList: [
            {
              value: '5.2XX-5.242.1',
              className: "JG_5_2XX-1",
              isSelected: false
            },
            {
              value: '5.2XX-TR06',
              className: "JG_5_2XX-2",
              isSelected: false
            },
            {
              value: '5.2XX-5.242',
              className: "JG_5_2XX-3",
              isSelected: false
            },
            {
              value: '5.2XX-EL04',
              className: "JG_5_2XX-4",
              isSelected: false
            },
            {
              value: '5.2XX-TR05',
              className: "JG_5_2XX-5",
              isSelected: false
            },
            {
              value: '5.2XX-5.241',
              className: "JG_5_2XX-6",
              isSelected: false
            },
            {
              value: '5.2XX-Fermentation 2',
              className: "JG_5_2XX-7",
              isSelected: false
            },
    
          ]
        },
        {
          floorName: 'Zone 5.3XX',
          zoneSubList: [
            {
              value: '5.3XX-TR08',
              className: "JG_5_3XX-1",
              isSelected: false
            },
            {
              value: '5.3XX-5.358',
              className: "JG_5_3XX-2",
              isSelected: false
            },
            {
              value: '5.3XX-TR07',
              className: "JG_5_3XX-3",
              isSelected: false
            },
            {
              value: '5.3XX-5.357',
              className: "JG_5_3XX-4",
              isSelected: false
            },
            {
              value: '5.3XX-5.357.1',
              className: "JG_5_3XX-5",
              isSelected: false
            },
            {
              value: '5.3XX-EL07',
              className: "JG_5_3XX-6",
              isSelected: false
            },
            {
              value: '5.3XX-South',
              className: "JG_5_3XX-7",
              isSelected: false
            },
    
          ]
        },
      ]
    },

    // jg roof floor end
      // JH - Ground Floor
   
    {
      buiildingId: "17",
      planType: "JH - Ground Floor",
      zoneList: [
        {
          floorName: 'Zone 0.A1',
          zoneSubList: [
                  {
                value: 'S.002.1',
                className: "JH_0_A1-1",
                isSelected: false
              },
              {
                value: 'S.002',
                className: "JH_0_A1-2",
                isSelected: false
              },
              {
                value: 'S.002.2',
                className: "JH_0_A1-3",
                isSelected: false
              },
              {
                value: 'S.004.4',
                className: "JH_0_A1-4",
                isSelected: false
              },
              {
                value: 'S.004.3',
                className: "JH_0_A1-5",
                isSelected: false
              },
              {
                value: 'S.004.2',
                className: "JH_0_A1-6",
                isSelected: false
              },
              {
                value: 'SK01',
                className: "JH_0_A1-7",
                isSelected: false
              },
              {
                value: 'ZONE 0.A1',
                className: "JH_0_A1-8",
                isSelected: false
              },
              {
                value: 'TR02',
                className: "JH_0_A1-9",
                isSelected: false
              },
              {
                value: 'EL01',
                className: "JH_0_A1-10",
                isSelected: false
              },
              {
                value: 'S.006',
                className: "JH_0_A1-11",
                isSelected: false
              },
              {
                value: 'S.006.1',
                className: "JH_0_A1-12",
                isSelected: false
              },
              {
                value: 'SK01',
                className: "JH_0_A1-13",
                isSelected: false
              },
              {
                value: 'ZONE 0.A1',
                className: "JH_0_A1-14",
                isSelected: false
              },
          ]
        },
        {
          floorName: 'Zone 0.A2',
          zoneSubList: [
            {
              value: '0073AT001',
              className: "JH_0_A2-1",
              isSelected: false
            },
            {
              value: '0073BT001',
              className: "JH_0_A2-2",
              isSelected: false
            },
            {
              value: 'Storage tanks-4',
              className: "JH_0_A2-3",
              isSelected: false
            },
            {
              value: '0072AT001',
              className: "JH_0_A2-4",
              isSelected: false
            },
            {
              value: '0072BT001',
              className: "JH_0_A2-5",
              isSelected: false
            },
            {
              value: 'PAU-0072C-01',
              className: "JH_0_A2-6",
              isSelected: false
            },
            {
              value: 'S.004',
              className: "JH_0_A2-7",
              isSelected: false
            },
            {
              value: 'PAU-0072Z-01',
              className: "JH_0_A2-8",
              isSelected: false
            },
            {
              value: 'PAU-0092Z-01',
              className: "JH_0_A2-9",
              isSelected: false
            },
            {
              value: 'PAU-0074Z-01',
              className: "JH_0_A2-10",
              isSelected: false
            },
            {
              value: 'PAU-0073Z-01',
              className: "JH_0_A2-11",
              isSelected: false
            },
            {
              value: 'PAU-0071Z-01',
              className: "JH_0_A2-12",
              isSelected: false
            },
            {
              value: 'S.004.1',
              className: "JH_0_A2-13",
              isSelected: false
            },
            {
              value: 'S.003-A',
              className: "JH_0_A2-14",
              isSelected: false
            },
            {
              value: 'ZONE 0.A2',
              className: "JH_0_A2-15",
              isSelected: false
            },
            {
              value: 'Storage tanks-2',
              className: "JH_0_A2-16",
              isSelected: false
            },
            {
              value: '0074AT001',
              className: "JH_0_A2-17",
              isSelected: false
            },
            {
              value: '0074BT001',
              className: "JH_0_A2-18",
              isSelected: false
            },
            {
              value: 'Storage tanks-1',
              className: "JH_0_A2-19",
              isSelected: false
            },
            {
              value: '0092AT001',
              className: "JH_0_A2-20",
              isSelected: false
            },
            {
              value: '0092BT001',
              className: "JH_0_A2-21",
              isSelected: false
            },
    
          ]
        },
        {
          floorName: 'Zone 0.B1',
          zoneSubList: [
             {
                value: 'ZONE 0.B1',
                className: "JH_0_B1-1",
                isSelected: false
              },
              {
                value: 'S.005',
                className: "JH_0_B1-2",
                isSelected: false
              },
              {
                value: 'TR01',
                className: "JH_0_B1-3",
                isSelected: false
              },
              {
                value: 'S.005.1',
                className: "JH_0_B1-4",
                isSelected: false
              },
          ]
        },
        {
          floorName: 'Zone 0.B2',
          zoneSubList: [
                {
                  value: 'PAU-0082Z-01',
                  className: "JH_0_B2-1",
                  isSelected: false
                },
                {
                  value: 'PAU-0081Z-01',
                  className: "JH_0_B2-2",
                  isSelected: false
                },
                {
                  value: 'S.003.1',
                  className: "JH_0_B2-3",
                  isSelected: false
                },
                {
                  value: '0082AT001',
                  className: "JH_0_B2-4",
                  isSelected: false
                },
                {
                  value: '0082BT001',
                  className: "JH_0_B2-5",
                  isSelected: false
                },
                {
                  value: 'Storage tanks-5',
                  className: "JH_0_B2-6",
                  isSelected: false
                },
                {
                  value: 'ZONE 0.B2',
                  className: "JH_0_B2-7",
                  isSelected: false
                },
                {
                  value: 'S.003-B',
                  className: "JH_0_B2-8",
                  isSelected: false
                },
                {
                  value: 'S.005.2',
                  className: "JH_0_B2-9",
                  isSelected: false
                },
                {
                  value: 'Storage tanks-3',
                  className: "JH_0_B2-10",
                  isSelected: false
                },
                {
                  value: '0081AT001',
                  className: "JH_0_B2-11",
                  isSelected: false
                },
                {
                  value: '0082BT001',
                  className: "JH_0_B2-12",
                  isSelected: false
                },
          ]
        },
      ]
    },

    // JH - 1st Floor

    {
      buiildingId: "17",
      planType: "JH - 1st Floor",
      zoneList: [
        {
          floorName: 'Zone 1.A1',
          zoneSubList: [
              {
                value: '1.002',
                className: "JH_1_A1-1",
                isSelected: false
              },
              {
                value: 'ZONE 1.A1',
                className: "JH_1_A1-2",
                isSelected: false
              },
              {
                value: 'EL01',
                className: "JH_1_A1-3",
                isSelected: false
              },
              {
                value: 'TR02',
                className: "JH_1_A1-4",
                isSelected: false
              },
              {
                value: '1.006',
                className: "JH_1_A1-5",
                isSelected: false
              },
              {
                value: 'SK02',
                className: "JH_1_A1-6",
                isSelected: false
              },
          ]
        },
        {
          floorName: 'Zone 1.A2',
          zoneSubList: [
            {
              value: '0073AT001',
              className: "JH_1_A2-1",
              isSelected: false
            },
            {
              value: '0073BT001',
              className: "JH_1_A2-2",
              isSelected: false
            },
            {
              value: 'Storage tanks-4',
              className: "JH_1_A2-3",
              isSelected: false
            },
            {
              value: '0072AT001',
              className: "JH_1_A2-4",
              isSelected: false
            },
            {
              value: '0072BT001',
              className: "JH_1_A2-5",
              isSelected: false
            },
            {
              value: '1.002.2',
              className: "JH_1_A2-6",
              isSelected: false
            },
            {
              value: 'ZONE 1.A2',
              className: "JH_1_A2-7",
              isSelected: false
            },
            {
              value: '1.003.A',
              className: "JH_1_A2-8",
              isSelected: false
            },
            {
              value: 'Storage tanks-2',
              className: "JH_1_A2-9",
              isSelected: false
            },
            {
              value: '0074AT001',
              className: "JH_1_A2-10",
              isSelected: false
            },
            {
              value: '0074BT001',
              className: "JH_1_A2-11",
              isSelected: false
            },
            {
              value: 'Storage tanks-1',
              className: "JH_1_A2-12",
              isSelected: false
            },
            {
              value: '0092AT001',
              className: "JH_1_A2-13",
              isSelected: false
            },
            {
              value: '0092BT001',
              className: "JH_1_A2-14",
              isSelected: false
            },
    
          ]
        },
        {
          floorName: 'Zone 1.A3',
          zoneSubList: [
              {
                value: 'ZONE 1.A3',
                className: "JH_1_A3-1",
                isSelected: false
              },
              {
                value: '1.002.1',
                className: "JH_1_A3-2",
                isSelected: false
              },
          ]
        },
        {
          floorName: 'Zone 1.B1',
          zoneSubList: [
                {
                  value: 'TR01',
                  className: "JH_1_B1-1",
                  isSelected: false
                },
                {
                  value: '1.005',
                  className: "JH_1_B1-2",
                  isSelected: false
                },
                {
                  value: 'ZONE 1.B1',
                  className: "JH_1_B1-3",
                  isSelected: false
                },
          ]
        },
        {
          floorName: 'Zone 1.B2',
          zoneSubList: [
                {
                  value: '0082AT001',
                  className: "JH_1_B2-1",
                  isSelected: false
                },
                {
                  value: '0082BT001',
                  className: "JH_1_B2-2",
                  isSelected: false
                },
                {
                  value: 'Storage tanks-5',
                  className: "JH_1_B2-3",
                  isSelected: false
                },
                {
                  value: '1.003.1',
                  className: "JH_1_B2-4",
                  isSelected: false
                },
                {
                  value: '1.003-B',
                  className: "JH_1_B2-5",
                  isSelected: false
                },
                {
                  value: 'ZONE 1.B2',
                  className: "JH_1_B2-6",
                  isSelected: false
                },
                {
                  value: '134ZT001',
                  className: "JH_1_B2-7",
                  isSelected: false
                },
                {
                  value: '134YT001',
                  className: "JH_1_B2-8",
                  isSelected: false
                },
                {
                  value: 'Air Reciever-4',
                  className: "JH_1_B2-9",
                  isSelected: false
                },
                {
                  value: 'Storage tanks-3',
                  className: "JH_1_B2-10",
                  isSelected: false
                },
                {
                  value: '0081AT001',
                  className: "JH_1_B2-11",
                  isSelected: false
                },
                {
                  value: '0082BT001',
                  className: "JH_1_B2-12",
                  isSelected: false
                },
          ]
        },
        {
          floorName: 'Zone 1.B3',
          zoneSubList: [
                {
                  value: '1.003.2',
                  className: "JH_1_B3-1",
                  isSelected: false
                },
                {
                  value: '1.003.3',
                  className: "JH_1_B3-2",
                  isSelected: false
                },
                {
                  value: 'ZONE 1.B3',
                  className: "JH_1_B3-3",
                  isSelected: false
                },
          ]
        },

      ]
    },

    // JH Mezzanine Floor

    {
      buiildingId: "17",
      planType: "JH - Mezzanine Floor",
      zoneList: [
        {
          floorName: 'Zone M.A1',
          zoneSubList: [
              {
                value: 'S.104-A',
                className: "JH_M_A1-1",
                isSelected: false
              },
              {
                value: 'TR02',
                className: "JH_M_A1-2",
                isSelected: false
              },
              {
                value: 'EL01',
                className: "JH_M_A1-3",
                isSelected: false
              },
              {
                value: 'ZONE M.A1',
                className: "JH_M_A1-4",
                isSelected: false
              },
              {
                value: 'S.006',
                className: "JH_M_A1-5",
                isSelected: false
              },
              {
                value: 'S.108.1',
                className: "JH_M_A1-6",
                isSelected: false
              },
              {
                value: 'S.108',
                className: "JH_M_A1-7",
                isSelected: false
              },
          ]
        },
        {
          floorName: 'Zone M.A2',
          zoneSubList: [
            {
              value: 'S.102',
              className: "JH_M_A2-1",
              isSelected: false
            },
            {
              value: 'S.102.1',
              className: "JH_M_A2-2",
              isSelected: false
            },
            {
              value: 'S.104.1',
              className: "JH_M_A2-3",
              isSelected: false
            },
            {
              value: 'ZONE M.A2',
              className: "JH_M_A2-4",
              isSelected: false
            },
            {
              value: 'S.004-B',
              className: "JH_M_A2-5",
              isSelected: false
            },
    
          ]
        },
        {
          floorName: 'Zone M.A3',
          zoneSubList: [
              {
                value: 'ZONE M.A3',
                className: "JH_M_A3-1",
                isSelected: false
              },
              {
                value: 'S.104.2',
                className: "JH_M_A3-2",
                isSelected: false
              },
          ]
        },
      ]
    },

    // JH Roof Floor

    {
      buiildingId: "17",
      planType: "JH - Roof Plan",
      zoneList: [
        {
          floorName: 'Zone R_West',
          zoneSubList: [
              {
                value: 'TR01',
                className: "JH_R_West-1",
                isSelected: false
              },
              {
                value: 'R_West',
                className: "JH_R_West-2",
                isSelected: false
              },
          ]
        },
        {
          floorName: 'Zone R_East',
          zoneSubList: [
            {
              value: 'TR02',
              className: "JH_R_East-1",
              isSelected: false
            },
            {
              value: 'R_East',
              className: "JH_R_East-2",
              isSelected: false
            },
        
          ]
        },
      ]
    },
  

    ]
    return this.bulidingFloorData;
  }

  generateBulidFloorData() {
    this.bulidingFloorData = [
      {
        planType: "JF - Ground Floor",
        zoneList: [
          {
            floorName: 'ZONE A',
            zoneSubList: [
              {
                value: 'S.102',
                className: "zoneA-1",
                isSelected: false
              },
              {
                value: 'S.106',
                className: "zoneA-2",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'ZONE B',
            zoneSubList: [
              {
                value: 'TR02.S',
                className: "zoneB-1",
                isSelected: false,
              },
              {
                value: 'EL02.S',
                className: "zoneB-2",
                isSelected: false,
              },
              {
                value: 'S.218',
                className: "zoneB-3",
                isSelected: false,
              },
              {
                value: 'S.216',
                className: "zoneB-4",
                isSelected: false,
              },
              {
                value: 'S.214',
                className: "zoneB-5",
                isSelected: false,
              },
              {
                value: 'S.212',
                className: "zoneB-6",
                isSelected: false,
              },
              {
                value: 'S.210',
                className: "zoneB-7",
                isSelected: false,
              },
              {
                value: 'S.208',
                className: "zoneB-8",
                isSelected: false,
              },
              {
                value: 'S.207',
                className: "zoneB-9",
                isSelected: false,
              },
              {
                value: 'S.206',
                className: "zoneB-10",
                isSelected: false,
              },
              {
                value: 'S.204',
                className: "zoneB-11",
                isSelected: false,
              },
              {
                value: 'S.552',
                className: "zoneB-12",
                isSelected: false,
              },
              {
                value: 'S.202',
                className: "zoneB-13",
                isSelected: false,
              },
              {
                value: 'TR01.S',
                className: "zoneB-14",
                isSelected: false,
              },
              {
                value: 'S.550',
                className: "zoneB-15",
                isSelected: false,
              },
              {
                value: 'EL01.S',
                className: "zoneB-16",
                isSelected: false,
              },
              {
                value: 'S.201',
                className: "zoneB-17",
                isSelected: false,
              }

            ]
          },
          {
            floorName: 'ZONE C',
            zoneSubList: [
              {
                value: 'PAU-301-06',
                className: "zoneC-1",
                isSelected: false,
              },
              {
                value: 'PAU-301-05',
                className: "zoneC-2",
                isSelected: false,
              },
              {
                value: 'PAU-301-04',
                className: "zoneC-3",
                isSelected: false,
              },
              {
                value: 'PAU-301-03',
                className: "zoneC-4",
                isSelected: false,
              },
              {
                value: 'PAU-301-02',
                className: "zoneC-5",
                isSelected: false,
              },
              {
                value: 'S.540',
                className: "zoneC-6",
                isSelected: false,
              },
              {
                value: 'S.542',
                className: "zoneC-7",
                isSelected: false,
              },
              {
                value: 'S.554',
                className: "zoneC-8",
                isSelected: false,
              },
              {
                value: 'S.546',
                className: "zoneC-9",
                isSelected: false,
              },
              {
                value: 'S.556',
                className: "zoneC-10",
                isSelected: false,
              },
              {
                value: 'S.558',
                className: "zoneC-11",
                isSelected: false,
              },
              {
                value: 'S.560',
                className: "zoneC-12",
                isSelected: false,
              },
              {
                value: 'S.562',
                className: "zoneC-13",
                isSelected: false,
              },
              {
                value: 'S.501',
                className: "zoneC-14",
                isSelected: false,
              },
              {
                value: 'PAU-292-01',
                className: "zoneC-15",
                isSelected: false,
              },
              {
                value: 'PAU-251-01',
                className: "zoneC-16",
                isSelected: false,
              },
              {
                value: 'PAU-241-01',
                className: "zoneC-17",
                isSelected: false,
              },
              {
                value: 'PAU-231-01',
                className: "zoneC-18",
                isSelected: false,
              },
              {
                value: 'PAU-291-01',
                className: "zoneC-19",
                isSelected: false,
              },
              {
                value: 'PAU-153-01',
                className: "zoneC-20",
                isSelected: false,
              },
              {
                value: 'PAU-221-01',
                className: "zoneC-21",
                isSelected: false,
              }
            ]
          },
          {
            floorName: 'ZONE D',
            zoneSubList: [
              {
                value: 'TR03.S',
                className: "zoneD-1",
                isSelected: false
              },
              {
                value: 'S.336',
                className: "zoneD-2",
                isSelected: false
              },
              {
                value: 'S.334',
                className: "zoneD-3",
                isSelected: false
              },
              {
                value: 'S.330',
                className: "zoneD-4",
                isSelected: false
              },
              {
                value: 'S.332',
                className: "zoneD-5",
                isSelected: false
              },
              {
                value: 'S.322',
                className: "zoneD-6",
                isSelected: false
              },
              {
                value: 'S.324',
                className: "zoneD-7",
                isSelected: false
              },
              {
                value: 'S.320',
                className: "zoneD-8",
                isSelected: false
              },
              {
                value: 'S.316',
                className: "zoneD-9",
                isSelected: false
              },
              {
                value: 'S.314',
                className: "zoneD-10",
                isSelected: false
              },
              {
                value: 'S.315',
                className: "zoneD-11",
                isSelected: false
              },
              {
                value: 'S.312',
                className: "zoneD-12",
                isSelected: false
              },
              {
                value: 'S.310.1',
                className: "zoneD-13",
                isSelected: false
              },
              {
                value: 'S.310',
                className: "zoneD-14",
                isSelected: false
              },
              {
                value: 'S.306',
                className: "zoneD-15",
                isSelected: false
              },
              {
                value: 'S.302',
                className: "zoneD-16",
                isSelected: false
              },
              {
                value: 'S.304',
                className: "zoneD-17",
                isSelected: false
              },
              {
                value: 'S.304.4',
                className: "zoneD-18",
                isSelected: false
              },
              {
                value: 'S.304.3',
                className: "zoneD-19",
                isSelected: false
              },
              {
                value: 'S.304.2',
                className: "zoneD-20",
                isSelected: false,
              },
              {
                value: 'S.304.1',
                className: "zoneD-21",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'ZONE E',
            zoneSubList: [
              {
                value: '111X',
                className: "zoneE-1",
                isSelected: false
              },
              {
                value: 'PAU-112-01',
                className: "zoneE-2",
                isSelected: false
              },
              {
                value: 'S.512',
                className: "zoneE-3",
                isSelected: false
              },
              {
                value: 'S.510',
                className: "zoneE-4",
                isSelected: false
              },
              {
                value: 'PAU-312-01',
                className: "zoneE-5",
                isSelected: false
              },
              {
                value: 'PAU-312-02',
                className: "zoneE-6",
                isSelected: false
              },
              {
                value: 'PAU-312-03',
                className: "zoneE-7",
                isSelected: false
              },
              {
                value: '312F',
                className: "zoneE-8",
                isSelected: false
              },
              {
                value: '312G',
                className: "zoneE-9",
                isSelected: false
              },
              {
                value: 'PAU-312-04',
                className: "zoneE-10",
                isSelected: false
              },
              {
                value: 'PAU-313-02',
                className: "zoneE-11",
                isSelected: false
              },
              {
                value: 'PAU-313-01',
                className: "zoneE-12",
                isSelected: false
              },
              {
                value: 'S.528',
                className: "zoneE-13",
                isSelected: false
              },
              {
                value: 'S.530',
                className: "zoneE-14",
                isSelected: false
              },
              {
                value: 'S.532',
                className: "zoneE-15",
                isSelected: false
              },
              {
                value: 'S.534',
                className: "zoneE-16",
                isSelected: false
              },
              {
                value: 'S.536',
                className: "zoneE-17",
                isSelected: false
              },
              {
                value: 'S.537',
                className: "zoneE-18",
                isSelected: false
              },
              {
                value: 'S.539',
                className: "zoneE-19",
                isSelected: false
              },
              {
                value: 'S.538',
                className: "zoneE-20",
                isSelected: false
              },
              {
                value: 'PAU-311-02',
                className: "zoneE-21",
                isSelected: false
              },
              {
                value: 'PAU-311-01',
                className: "zoneE-22",
                isSelected: false
              },
              {
                value: 'PAU-191-01',
                className: "zoneE-23",
                isSelected: false
              },
              {
                value: 'PAU-061-02',
                className: "zoneE-24",
                isSelected: false
              },
              {
                value: '063/064-01',
                className: "zoneE-25",
                isSelected: false
              },
              {
                value: '105C',
                className: "zoneE-26",
                isSelected: false
              },
              {
                value: 'PAU-392-01',
                className: "zoneE-27",
                isSelected: false
              },
              {
                value: 'PAU-391-01',
                className: "zoneE-28",
                isSelected: false
              },
              {
                value: 'PAU-105-01',
                className: "zoneE-29",
                isSelected: false
              },
              {
                value: 'PAU-301-01',
                className: "zoneE-30",
                isSelected: false
              }


            ]
          },
          {
            floorName: 'ZONE F1',
            zoneSubList: [
              {
                value: 'S.404',
                className: "zoneF1-1",
                isSelected: false
              },
              {
                value: 'S.406',
                className: "zoneF1-2",
                isSelected: false
              },
              {
                value: 'S.412.1',
                className: "zoneF1-3",
                isSelected: false
              },
              {
                value: 'S.338',
                className: "zoneF1-4",
                isSelected: false
              },
              {
                value: 'S.504',
                className: "zoneF1-5",
                isSelected: false
              },
              {
                value: 'S.503',
                className: "zoneF1-6",
                isSelected: false
              },
              {
                value: 'S.507',
                className: "zoneF1-7",
                isSelected: false
              },
              {
                value: 'S.509',
                className: "zoneF1-8",
                isSelected: false
              },


            ]
          },
          {
            floorName: 'ZONE F2',
            zoneSubList: [
              {
                value: 'TR05.S',
                className: "zoneF2-1",
                isSelected: false
              },
              {
                value: 'S.602',
                className: "zoneF2-2",
                isSelected: false
              },
              {
                value: 'S.606',
                className: "zoneF2-3",
                isSelected: false
              },
              {
                value: 'S.604',
                className: "zoneF2-4",
                isSelected: false
              },
              {
                value: 'S.608',
                className: "zoneF2-5",
                isSelected: false
              },
              {
                value: 'EL03.S',
                className: "zoneF2-6",
                isSelected: false
              },
              {
                value: 'TR06.S',
                className: "zoneF2-7",
                isSelected: false
              },
              {
                value: 'S.402',
                className: "zoneF2-8",
                isSelected: false
              },
              {
                value: 'S.410',
                className: "zoneF2-9",
                isSelected: false
              },
              {
                value: 'S.408',
                className: "zoneF2-10",
                isSelected: false
              },
              {
                value: 'S.412.1',
                className: "zoneF2-11",
                isSelected: false
              },
              {
                value: 'S.411',
                className: "zoneF2-12",
                isSelected: false
              }

            ]
          },
        ]
      },
      {
        planType: "JF - 1st Floor",
        zoneList: [
          {
            floorName: 'ZONE A',
            zoneSubList: [
              {
                value: '1.104',
                className: "first-zoneA-1",
                isSelected: false
              },
              {
                value: '1.102',
                className: "first-zoneA-2",
                isSelected: false
              },
              {
                value: '1.105',
                className: "first-zoneA-3",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE B',
            zoneSubList: [
              {
                value: 'TR02.1',
                className: "first-zoneB-1",
                isSelected: false
              },
              {
                value: '1.220',
                className: "first-zoneB-2",
                isSelected: false
              },
              {
                value: 'EL02.1',
                className: "first-zoneB-3",
                isSelected: false
              },
              {
                value: '1.228',
                className: "first-zoneB-4",
                isSelected: false
              },
              {
                value: '1.226',
                className: "first-zoneB-5",
                isSelected: false
              },
              {
                value: '1.224',
                className: "first-zoneB-6",
                isSelected: false
              },
              {
                value: '1.222',
                className: "first-zoneB-7",
                isSelected: false
              },
              {
                value: '1.218',
                className: "first-zoneB-8",
                isSelected: false
              },
              {
                value: '1.218.4',
                className: "first-zoneB-9",
                isSelected: false
              },
              {
                value: '1.218.3',
                className: "first-zoneB-10",
                isSelected: false
              },
              {
                value: '1.218.2',
                className: "first-zoneB-11",
                isSelected: false
              },
              {
                value: '1.218.1',
                className: "first-zoneB-12",
                isSelected: false
              },
              {
                value: '1.210',
                className: "first-zoneB-13",
                isSelected: false
              },
              // {
              //   value: 'TR01.S',
              //   className: "first-zoneB-14",
              //   isSelected: false
              // },
              {
                value: '1.208',
                className: "first-zoneB-14",
                isSelected: false
              },
              {
                value: '1.552',
                className: "first-zoneB-15",
                isSelected: false
              },
              {
                value: '1.206',
                className: "first-zoneB-16",
                isSelected: false
              },
              {
                value: '1.550',
                className: "first-zoneB-17",
                isSelected: false
              },
              {
                value: 'TR01.1',
                className: "first-zoneB-18",
                isSelected: false
              },
              {
                value: '1.204',
                className: "first-zoneB-19",
                isSelected: false
              },
              {
                value: 'EL01.1',
                className: "first-zoneB-20",
                isSelected: false
              },
              {
                value: '1.202',
                className: "first-zoneB-21",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE C',
            zoneSubList: [
              {
                value: '1.544',
                className: "first-zoneC-1",
                isSelected: false
              },
              {
                value: '1.540',
                className: "first-zoneC-2",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'ZONE D',
            zoneSubList: [
              {
                value: 'TR03.1',
                className: "first-zoneD-1",
                isSelected: false
              },
              {
                value: '1.328',
                className: "first-zoneD-2",
                isSelected: false
              },
              {
                value: '1.326',
                className: "first-zoneD-3",
                isSelected: false
              },
              {
                value: '1.320',
                className: "first-zoneD-4",
                isSelected: false
              },
              {
                value: '1.324',
                className: "first-zoneD-5",
                isSelected: false
              },
              {
                value: '1.323',
                className: "first-zoneD-6",
                isSelected: false
              },
              {
                value: '1.322',
                className: "first-zoneD-7",
                isSelected: false
              },
              {
                value: '1.316',
                className: "first-zoneD-8",
                isSelected: false
              },
              {
                value: '1.314',
                className: "first-zoneD-9",
                isSelected: false
              },
              {
                value: '1.310',
                className: "first-zoneD-10",
                isSelected: false
              },
              {
                value: '1.312',
                className: "first-zoneD-11",
                isSelected: false
              },
              {
                value: '1.308',
                className: "first-zoneD-12",
                isSelected: false
              },
              {
                value: '1.307',
                className: "first-zoneD-13",
                isSelected: false
              },
              {
                value: '1.306',
                className: "first-zoneD-14",
                isSelected: false
              },
              {
                value: '1.305',
                className: "first-zoneD-15",
                isSelected: false
              },
              {
                value: '1.220',
                className: "first-zoneD-16",
                isSelected: false
              },
              {
                value: '1.302',
                className: "first-zoneD-17",
                isSelected: false
              },
              {
                value: '1.304',
                className: "first-zoneD-18",
                isSelected: false
              },
              {
                value: '1.302.2',
                className: "first-zoneD-19",
                isSelected: false
              },
              {
                value: '1.302.1',
                className: "first-zoneD-20",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE E',
            zoneSubList: [
              {
                value: '1.532',
                className: "first-zoneE-1",
                isSelected: false
              },
              {
                value: '1.530',
                className: "first-zoneE-2",
                isSelected: false
              },
              {
                value: 'PAU-313',
                className: "first-zoneE-3",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE F1',
            zoneSubList: [
              {
                value: '1.338',
                className: "first-zoneF1-1",
                isSelected: false
              },
              {
                value: '1.502',
                className: "first-zoneF1-2",
                isSelected: false
              },
              {
                value: '1.504',
                className: "first-zoneF1-3",
                isSelected: false
              },
              {
                value: 'TR04.1',
                className: "first-zoneF1-4",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE F2',
            zoneSubList: [
              {
                value: 'TR05.1',
                className: "first-zoneF2-1",
                isSelected: false
              },
              {
                value: '1.616',
                className: "first-zoneF2-2",
                isSelected: false
              },
              {
                value: 'EL03.1',
                className: "first-zoneF2-3",
                isSelected: false
              },
              {
                value: ' TR06._',
                className: "first-zoneF2-4",
                isSelected: false
              },
              {
                value: '1.602',
                className: "first-zoneF2-5",
                isSelected: false
              },
              {
                value: '1.404',
                className: "first-zoneF2-6",
                isSelected: false
              },
              {
                value: '1.402',
                className: "first-zoneF2-7",
                isSelected: false
              },
              {
                value: '1.604',
                className: "first-zoneF2-8",
                isSelected: false
              },
              {
                value: '1.606',
                className: "first-zoneF2-9",
                isSelected: false
              },
              {
                value: '1.410',
                className: "first-zoneF2-10",
                isSelected: false
              },
              {
                value: '1.608',
                className: "first-zoneF2-11",
                isSelected: false
              },
              {
                value: '1.610',
                className: "first-zoneF2-12",
                isSelected: false
              },
              {
                value: '1.412',
                className: "first-zoneF2-13",
                isSelected: false
              },
              {
                value: '1.414',
                className: "first-zoneF2-14",
                isSelected: false
              },
              {
                value: '1.614',
                className: "first-zoneF2-15",
                isSelected: false
              }
            ]
          },
        ]
      },
      {
        planType: "JF- 2nd Floor",
        zoneList: [
          {
            floorName: 'ZONE A',
            zoneSubList: [
              {
                value: 'ZONE A',
                className: "second-zoneA",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'ZONE B',
            zoneSubList: [
              {
                value: ' TR02.2',
                className: "second-zoneB-1",
                isSelected: false
              },
              {
                value: 'EL02.2',
                className: "second-zoneB-2",
                isSelected: false
              },
              {
                value: 'JF5743',
                className: "second-zoneB-3",
                isSelected: false
              },
              {
                value: '2.202',
                className: "second-zoneB-4",
                isSelected: false
              },
              {
                value: 'JF5745',
                className: "second-zoneB-5",
                isSelected: false
              },
              {
                value: 'JF5744',
                className: "second-zoneB-6",
                isSelected: false
              },
              {
                value: 'TR01.2',
                className: "second-zoneB-7",
                isSelected: false
              },
              {
                value: 'EL01.2',
                className: "second-zoneB-8",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE C',
            zoneSubList: [
              {
                value: '2.501',
                className: "second-zoneC-1",
                isSelected: false
              },
              {
                value: '2.550',
                className: "second-zoneC-2",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE D',
            zoneSubList: [
              {
                value: 'TR03.2',
                className: "second-zoneD-1",
                isSelected: false
              },
              {
                value: 'JF5741',
                className: "second-zoneD-2",
                isSelected: false
              },
              {
                value: 'JF5746',
                className: "second-zoneD-3",
                isSelected: false
              },
              {
                value: 'JF5742',
                className: "second-zoneD-4",
                isSelected: false
              },
              {
                value: '2.302',
                className: "second-zoneD-5",
                isSelected: false
              },
              {
                value: '2.300',
                className: "second-zoneD-6",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE E',
            zoneSubList: [
              {
                value: '2.501',
                className: "second-zoneE-1",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'ZONE F1',
            zoneSubList: [
              {
                value: '2.402',
                className: "second-zoneF1-1",
                isSelected: false
              },
              {
                value: '2.502',
                className: "second-zoneF1-2",
                isSelected: false
              },
              {
                value: 'TR04.2',
                className: "second-zoneF1-3",
                isSelected: false
              },
              {
                value: '2.503',
                className: "second-zoneF1-4",
                isSelected: false
              },
              {
                value: '2.509',
                className: "second-zoneF1-5",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'ZONE F2',
            zoneSubList: [
              {
                value: 'TR05.2',
                className: "second-zoneF2-1",
                isSelected: false
              },
              {
                value: '2.602',
                className: "second-zoneF2-2",
                isSelected: false
              },
              {
                value: 'JF5740',
                className: "second-zoneF2-3",
                isSelected: false
              },
              {
                value: '2.402',
                className: "second-zoneF2-4",
                isSelected: false
              },
              {
                value: '2.410',
                className: "second-zoneF2-5",
                isSelected: false
              },
              {
                value: '2.606',
                className: "second-zoneF2-6",
                isSelected: false
              },
              {
                value: '2.612',
                className: "second-zoneF2-7",
                isSelected: false
              },
              {
                value: '2.608',
                className: "second-zoneF2-8",
                isSelected: false
              },
              {
                value: 'EL03.2',
                className: "second-zoneF2-9",
                isSelected: false
              },
              {
                value: 'TR06.1',
                className: "second-zoneF2-10",
                isSelected: false
              },
              {
                value: '2.610',
                className: "second-zoneF2-11",
                isSelected: false
              },
              {
                value: '2.604',
                className: "second-zoneF2-12",
                isSelected: false
              },
              {
                value: '2.601',
                className: "second-zoneF2-13",
                isSelected: false
              },
              {
                value: '2.411',
                className: "second-zoneF2-14",
                isSelected: false
              },
              {
                value: '2.415',
                className: "second-zoneF2-15",
                isSelected: false
              }
            ]
          },
        ]
      },
      {
        planType: "JF - Roof Plan",
        zoneList: [
          {
            floorName: 'ZONE A',
            zoneSubList: [
              {
                value: 'ZONE A',
                className: "roof-zoneA",
                isSelected: false
              },
            ]
          },
          {
            floorName: 'ZONE B',
            zoneSubList: [
              {
                value: 'ZONE B',
                className: "roof-zoneB",
                isSelected: false
              },
              {
                value: 'DT-3.TR01.3.EXT',
                className: "roof-zoneB-1",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'ZONE C',
            zoneSubList: [
              {
                value: 'ZONE C',
                className: "roof-zoneC",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'ZONE D',
            zoneSubList: [
              {
                value: 'ZONE D',
                className: "roof-zoneD",
                isSelected: false
              },
            ]
          },
          {
            floorName: 'ZONE E',
            zoneSubList: [
              {
                value: 'ZONE E',
                className: "roof-zoneE",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'ZONE F1',
            zoneSubList: [
              {
                value: 'ZONE F1',
                className: "roof-zoneF1",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'ZONE F2',
            zoneSubList: [
              {
                value: 'ZONE F2',
                className: "roof-zoneF2",
                isSelected: false
              },
            ]
          },
        ]
      },
      {
        planType: "External Areas",
        zoneList: [
          {
            floorName: 'JE',
            zoneSubList: [
              {
                value: 'Area JE/1',
                className: "external-areas-je-1",
                isSelected: false
              },
              {
                value: 'Area JE/2',
                className: "external-areas-je-2",
                isSelected: false
              },
              {
                value: 'Area JE/3',
                className: "external-areas-je-3",
                isSelected: false
              },
              {
                value: 'Area JE/4',
                className: "external-areas-je-4",
                isSelected: false
              },
              {
                value: 'Area JE/5',
                className: "external-areas-je-5",
                isSelected: false
              },
              {
                value: 'Area JE/6',
                className: "external-areas-je-6",
                isSelected: false
              },
              {
                value: 'Area JE/7',
                className: "external-areas-je-7",
                isSelected: false
              },
              {
                value: 'Area JE/8',
                className: "external-areas-je-8",
                isSelected: false
              },
              {
                value: 'Area JE/9',
                className: "external-areas-je-9",
                isSelected: false
              },
              {
                value: 'Area JE/10',
                className: "external-areas-je-10",
                isSelected: false
              },
              {
                value: 'Area JE/11',
                className: "external-areas-je-11",
                isSelected: false
              },
              {
                value: 'JE-Zone 1',
                className: "external-areas-je-12",
                isSelected: false
              },
              {
                value: 'JE-Zone 2',
                className: "external-areas-je-13",
                isSelected: false
              },
              {
                value: 'JE-Zone 3',
                className: "external-areas-je-14",
                isSelected: false
              },
              {
                value: 'JE-Zone 4',
                className: "external-areas-je-15",
                isSelected: false
              },
              {
                value: 'JE-Zone 5',
                className: "external-areas-je-16",
                isSelected: false
              },
      
            ]
          },
          {
            floorName: 'JF',
            zoneSubList: [
              {
                value: 'Area JF/2',
                className: "external-areas-jf-1",
                isSelected: false
              },
              {
                value: 'Area JF/3',
                className: "external-areas-jf-2",
                isSelected: false
              },
              {
                value: 'Area JF/4',
                className: "external-areas-jf-3",
                isSelected: false
              },
              {
                value: 'Area JF/5',
                className: "external-areas-jf-4",
                isSelected: false
              },
              {
                value: 'Area JF/6',
                className: "external-areas-jf-5",
                isSelected: false
              },
              {
                value: 'Area JF/7',
                className: "external-areas-jf-6",
                isSelected: false
              },
              {
                value: 'Area JF/8',
                className: "external-areas-jf-7",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'JG',
            zoneSubList: [
              {
                value: 'Area JG/3',
                className: "external-areas-jg-1",
                isSelected: false
              },

              {
                value: 'Area JG/4',
                className: "external-areas-jg-2",
                isSelected: false
              },
              {
                value: 'Area JG/5',
                className: "external-areas-jg-3",
                isSelected: false
              },
              {
                value: 'Area JG/6',
                className: "external-areas-jg-4",
                isSelected: false
              },
              {
                value: 'Area JG/7',
                className: "external-areas-jg-5",
                isSelected: false
              },
              {
                value: 'Area JG/8',
                className: "external-areas-jg-6",
                isSelected: false
              },
              {
                value: 'Area JG/9',
                className: "external-areas-jg-7",
                isSelected: false
              },
              {
                value: 'Area JG/10',
                className: "external-areas-jg-8",
                isSelected: false
              },
            ]
          },
          {
            floorName: 'MR',
            zoneSubList: [
              {
                value: 'Area MR/1',
                className: "external-areas-mr-1",
                isSelected: false
              },

              {
                value: 'Area MR/2',
                className: "external-areas-mr-2",
                isSelected: false
              },
              {
                value: 'Area MR/3',
                className: "external-areas-mr-3",
                isSelected: false
              },
              {
                value: 'Area MR/4',
                className: "external-areas-mr-4",
                isSelected: false
              },
              {
                value: 'Area MR/5',
                className: "external-areas-mr-5",
                isSelected: false
              },
              {
                value: 'Area MR/6',
                className: "external-areas-mr-6",
                isSelected: false
              },
              {
                value: 'Area MR/7',
                className: "external-areas-mr-7",
                isSelected: false
              },
              {
                value: 'Area MR/8',
                className: "external-areas-mr-8",
                isSelected: false
              },
            ]
          },
          {
            floorName: 'JH-JX-JS',
            zoneSubList: [
              {
                value: 'Area N2/1',
                className: "external-areas-jh-jx-js-1",
                isSelected: false
              },
      
              {
                value: 'Area N2/2',
                className: "external-areas-jh-jx-js-2",
                isSelected: false
              },
      
              {
                value: 'Area JH/1',
                className: "external-areas-jh-jx-js-3",
                isSelected: false
              },
              {
                value: 'Area JH/2',
                className: "external-areas-jh-jx-js-4",
                isSelected: false
              },
              {
                value: 'Area JH/3',
                className: "external-areas-jh-jx-js-5",
                isSelected: false
              },
              {
                value: 'Area JH/4',
                className: "external-areas-jh-jx-js-6",
                isSelected: false
              },
              {
                value: 'Area JH/5',
                className: "external-areas-jh-jx-js-7",
                isSelected: false
              },
              {
                value: 'Area JX/1',
                className: "external-areas-jh-jx-js-8",
                isSelected: false
              },
              {
                value: 'Area JX/2',
                className: "external-areas-jh-jx-js-9",
                isSelected: false
              },
              {
                value: 'Area JX/3',
                className: "external-areas-jh-jx-js-10",
                isSelected: false
              },
              {
                value: 'N2',
                className: "external-areas-jh-jx-js-11",
                isSelected: false
              },
              {
                value: 'JH-Zone1',
                className: "external-areas-jh-jx-js-12",
                isSelected: false
              },
              {
                value: 'JH-Zone2',
                className: "external-areas-jh-jx-js-13",
                isSelected: false
              },
              {
                value: 'JX',
                className: "external-areas-jh-jx-js-14",
                isSelected: false
              },
              {
                value: 'JS',
                className: "external-areas-jh-jx-js-15",
                isSelected: false
              },
          
            ]
          },
          {
            floorName: 'JJ',
            zoneSubList: [
              {
                value: 'Area JJ/1',
                className: "external-areas-jj-1",
                isSelected: false
              },

              {
                value: 'Area JJ/2',
                className: "external-areas-jj-2",
                isSelected: false
              },

              {
                value: 'Area JJ/3',
                className: "external-areas-jj-3",
                isSelected: false
              },

              {
                value: 'JJ-Zone 1',
                className: "external-areas-jj-4",
                isSelected: false
              },

              {
                value: 'JJ-Zone 2',
                className: "external-areas-jj-5",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'MP',
            zoneSubList: [
              {
                value: 'Area MP/1',
                className: "external-areas-mp-1",
                isSelected: false
              },
              {
                value: 'Area MP/2',
                className: "external-areas-mp-2",
                isSelected: false
              },
              {
                value: 'Area MP/3',
                className: "external-areas-mp-3",
                isSelected: false
              },
              {
                value: 'Area MP/4',
                className: "external-areas-mp-4",
                isSelected: false
              },
              {
                value: 'Area MP/5',
                className: "external-areas-mp-5",
                isSelected: false
              },
      
              {
                value: 'MP-Tank Farm',
                className: "external-areas-mp-6",
                isSelected: false
              },
              {
                value: 'MP',
                className: "external-areas-mp-7",
                isSelected: false
              },
              {
                value: 'Pump Station',
                className: "external-areas-mp-8",
                isSelected: false
              },
      

            ]
          },

          {
            floorName: 'JK-JM',
            zoneSubList: [
              {
                value: 'Area JK-JM',
                className: "external-areas-jk-jm-1",
                isSelected: false
              },
              {
                value: 'Area JM/1',
                className: "external-areas-jk-jm-2",
                isSelected: false
              },
            ]
          },

          {
            floorName: 'NH3-KF-MF',
            zoneSubList: [
              {
                value: 'Area MF/1',
                className: "external-areas-nh3-kf-mf-1",
                isSelected: false
              },

              {
                value: 'Area MF/2',
                className: "external-areas-nh3-kf-mf-2",
                isSelected: false
              },

              {
                value: 'Area NH3/1',
                className: "external-areas-nh3-kf-mf-3",
                isSelected: false
              },
              {
                value: 'Area NH3/2',
                className: "external-areas-nh3-kf-mf-4",
                isSelected: false
              },
              {
                value: 'Area KF/0',
                className: "external-areas-nh3-kf-mf-5",
                isSelected: false
              },
              {
                value: 'Area KF/1',
                className: "external-areas-nh3-kf-mf-6",
                isSelected: false
              },
              {
                value: 'Area KF/2',
                className: "external-areas-nh3-kf-mf-7",
                isSelected: false
              },
              {
                value: 'Area KF/3',
                className: "external-areas-nh3-kf-mf-8",
                isSelected: false
              },
              {
                value: 'Area KF/4',
                className: "external-areas-nh3-kf-mf-9",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Roads',
            zoneSubList: [
              {
                value: 'Road JF-North/1',
                className: "external-areas-roads-1",
                isSelected: false
              },
              {
                value: 'Road JF-North/2',
                className: "external-areas-roads-2",
                isSelected: false
              },
              {
                value: 'Road JF-West',
                className: "external-areas-roads-3",
                isSelected: false
              },
              {
                value: 'Road JG-West',
                className: "external-areas-roads-4",
                isSelected: false
              },
              {
                value: 'Junction JF',
                className: "external-areas-roads-5",
                isSelected: false
              },
              {
                value: 'Road JF-South',
                className: "external-areas-roads-6",
                isSelected: false
              },
              {
                value: 'Junction JH',
                className: "external-areas-roads-7",
                isSelected: false
              },

              {
                value: 'Road JG-South',
                className: "external-areas-roads-8",
                isSelected: false
              },
              {
                value: 'Bus Stop',
                className: "external-areas-roads-9",
                isSelected: false
              },
              {
                value: 'Road JH-South',
                className: "external-areas-roads-10",
                isSelected: false
              },
              {
                value: 'Junction JX',
                className: "external-areas-roads-11",
                isSelected: false
              },
              {
                value: 'Road JG-East',
                className: "external-areas-roads-12",
                isSelected: false
              },

              {
                value: 'Road MR-West',
                className: "external-areas-roads-13",
                isSelected: false
              },
              {
                value: 'Road MR-South',
                className: "external-areas-roads-14",
                isSelected: false
              },
              {
                value: 'Road MP-South',
                className: "external-areas-roads-15",
                isSelected: false
              },

              {
                value: 'Junction KF',
                className: "external-areas-roads-16",
                isSelected: false
              },
              {
                value: 'Road KF',
                className: "external-areas-roads-17",
                isSelected: false
              },
              {
                value: 'Road MR-East',
                className: "external-areas-roads-18",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Welfare',
            zoneSubList: [
              {
                value: 'Area WFC/3',
                className: "external-areas-welfare-1",
                isSelected: false
              },
              {
                value: 'Area WFC/1',
                className: "external-areas-welfare-2",
                isSelected: false
              },
              {
                value: 'Area WFC/2',
                className: "external-areas-welfare-3",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'CM',
            zoneSubList: [
              {
                value: 'Area CM/1',
                className: "external-areas-cm-1",
                isSelected: false
              },
              {
                value: 'Area CM/2',
                className: "external-areas-cm-2",
                isSelected: false
              },
              {
                value: 'Area CM/3',
                className: "external-areas-cm-3",
                isSelected: false
              },
              {
                value: 'Area CM/4',
                className: "external-areas-cm-4",
                isSelected: false
              },
              {
                value: 'Area JF/5',
                className: "external-areas-cm-5",
                isSelected: false
              },
              {
                value: 'Area CM/6',
                className: "external-areas-cm-6",
                isSelected: false
              },
              {
                value: 'Area CM/7',
                className: "external-areas-cm-7",
                isSelected: false
              },
              {
                value: 'Area CM/8',
                className: "external-areas-cm-8",
                isSelected: false
              },
              {
                value: 'Area CM/9',
                className: "external-areas-cm-9",
                isSelected: false
              },
              {
                value: 'Area CM/10',
                className: "external-areas-cm-10",
                isSelected: false
              },
            ]
          },
        ]
      },
      // mr ground floor plans

      {
        planType: "MR - Ground Floor",
        zoneList: [
          {
            floorName: 'Zone 0.1_N',
            zoneSubList: [
              {
                value: 'S.044',
                className: "mr-zone0_1_N-1",
                isSelected: false
              },
              {
                value: 'TR02',
                className: "mr-zone0_1_N-2",
                isSelected: false
              },
              {
                value: 'S.048',
                className: "mr-zone0_1_N-3",
                isSelected: false
              },
              {
                value: 'S.050',
                className: "mr-zone0_1_N-4",
                isSelected: false
              },
              {
                value: 'S.052',
                className: "mr-zone0_1_N-5",
                isSelected: false
              },
              {
                value: 'S.054',
                className: "mr-zone0_1_N-6",
                isSelected: false
              },
              {
                value: 'S.056',
                className: "mr-zone0_1_N-7",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 0.1_S',
            zoneSubList: [
              {
                value: 'S.051',
                className: "mr-zone0_1_S-1",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 0.2_N',
            zoneSubList: [
              {
                value: 'TR01',
                className: "mr-zone0_2_N-1",
                isSelected: false
              },
              {
                value: '0172BP001',
                className: "mr-zone0_2_N-2",
                isSelected: false
              },
              {
                value: '0172BP002',
                className: "mr-zone0_2_N-3",
                isSelected: false
              },
              {
                value: '0172BK001',
                className: "mr-zone0_2_N-4",
                isSelected: false
              },
              {
                value: '0172CP001',
                className: "mr-zone0_2_N-5",
                isSelected: false
              },
              {
                value: '0172CP002',
                className: "mr-zone0_2_N-6",
                isSelected: false
              },
              {
                value: 'S.016',
                className: "mr-zone0_2_N-7",
                isSelected: false
              },
              {
                value: '0172CK001',
                className: "mr-zone0_2_N-8",
                isSelected: false
              },
              {
                value: '0172DP002',
                className: "mr-zone0_2_N-9",
                isSelected: false
              },
              {
                value: '0172DP001',
                className: "mr-zone0_2_N-10",
                isSelected: false
              },
              {
                value: '0172CK001',
                className: "mr-zone0_2_N-11",
                isSelected: false
              },
              {
                value: '0172EP001',
                className: "mr-zone0_2_N-12",
                isSelected: false
              },
              {
                value: '0172EP002',
                className: "mr-zone0_2_N-13",
                isSelected: false
              },
              {
                value: 'S.034',
                className: "mr-zone0_2_N-14",
                isSelected: false
              },
              {
                value: '0172EK001',
                className: "mr-zone0_2_N-15",
                isSelected: false
              }
              ,
              {
                value: '0172FP002',
                className: "mr-zone0_2_N-16",
                isSelected: false
              },
              {
                value: '0172FP001',
                className: "mr-zone0_2_N-17",
                isSelected: false
              },
              {
                value: '0172FK001',
                className: "mr-zone0_2_N-18",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 0.2_S',
            zoneSubList: [
              {
                value: 'TR03',
                className: "mr-zone0_2_S-1",
                isSelected: false
              },
              {
                value: 'EL01',
                className: "mr-zone0_2_S-2",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'Zone 0.3_N',
            zoneSubList: [
              {
                value: 'S.004',
                className: "mr-zone0_3_N-1",
                isSelected: false
              },
              {
                value: '0173AP001',
                className: "mr-zone0_3_N-2",
                isSelected: false
              },
              {
                value: '0172AW001',
                className: "mr-zone0_3_N-3",
                isSelected: false
              },
              {
                value: '0172AX001',
                className: "mr-zone0_3_N-4",
                isSelected: false
              },
              {
                value: '0173AP002',
                className: "mr-zone0_3_N-5",
                isSelected: false
              },
              {
                value: '0173AP003',
                className: "mr-zone0_3_N-6",
                isSelected: false
              },
              {
                value: '0172AX002',
                className: "mr-zone0_3_N-7",
                isSelected: false
              },
              {
                value: '0172AX003',
                className: "mr-zone0_3_N-8",
                isSelected: false
              },
              {
                value: 'S.002',
                className: "mr-zone0_3_N-9",
                isSelected: false
              },
              {
                value: '0170AH001',
                className: "mr-zone0_3_N-10",
                isSelected: false
              },
              {
                value: '0170AH002',
                className: "mr-zone0_3_N-11",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 0.3_S',
            zoneSubList: [
              {
                value: '0172TK001',
                className: "mr-zone0_3_S-1",
                isSelected: false
              },
              {
                value: '0172TP002',
                className: "mr-zone0_3_S-2",
                isSelected: false
              },
              {
                value: '0172TP001',
                className: "mr-zone0_3_S-3",
                isSelected: false
              },
              {
                value: 'S.055',
                className: "mr-zone0_3_S-4",
                isSelected: false
              },
              {
                value: '0172SK001',
                className: "mr-zone0_3_S-5",
                isSelected: false
              },
              {
                value: '0172SP002',
                className: "mr-zone0_3_S-6",
                isSelected: false
              },
              {
                value: '0172SP001',
                className: "mr-zone0_3_S-7",
                isSelected: false
              },
              {
                value: '0172RK001',
                className: "mr-zone0_3_S-8",
                isSelected: false
              },
              {
                value: '0172RP001',
                className: "mr-zone0_3_S-9",
                isSelected: false
              },
              {
                value: '0172RP002',
                className: "mr-zone0_3_S-10",
                isSelected: false
              },
              {
                value: 'S.065',
                className: "mr-zone0_3_S-11",
                isSelected: false
              },
              {
                value: '0172QK001',
                className: "mr-zone0_3_S-12",
                isSelected: false
              },
              {
                value: '0172QP002',
                className: "mr-zone0_3_S-13",
                isSelected: false
              }
              ,
              {
                value: '0172QP001',
                className: "mr-zone0_3_S-14",
                isSelected: false
              }
              ,
              {
                value: '0172PK001',
                className: "mr-zone0_3_S-15",
                isSelected: false
              }
              ,
              {
                value: '0172PP002',
                className: "mr-zone0_3_S-16",
                isSelected: false
              }
              ,
              {
                value: '0172PP001',
                className: "mr-zone0_3_S-17",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 0.4_N',
            zoneSubList: [
              {
                value: '0174AK001',
                className: "mr-zone0_4_N-1",
                isSelected: false
              },
              {
                value: '0174BK001',
                className: "mr-zone0_4_N-2",
                isSelected: false
              },
              {
                value: '0174AP002',
                className: "mr-zone0_4_N-3",
                isSelected: false
              },
              {
                value: '0174AP001',
                className: "mr-zone0_4_N-4",
                isSelected: false
              },
              {
                value: 'S.001',
                className: "mr-zone0_4_N-5",
                isSelected: false
              },
              {
                value: '0174BP002',
                className: "mr-zone0_4_N-6",
                isSelected: false
              },
              {
                value: '0174BP001',
                className: "mr-zone0_4_N-7",
                isSelected: false
              },
              {
                value: '0174CP002',
                className: "mr-zone0_4_N-8",
                isSelected: false
              },
              {
                value: '0174CP001',
                className: "mr-zone0_4_N-9",
                isSelected: false
              },
              {
                value: '0174DP002',
                className: "mr-zone0_4_N-10",
                isSelected: false
              },
              {
                value: '0174DP001',
                className: "mr-zone0_4_N-11",
                isSelected: false
              },
              {
                value: 'S.007',
                className: "mr-zone0_4_N-12",
                isSelected: false
              },
              {
                value: '0174CK001',
                className: "mr-zone0_4_N-13",
                isSelected: false
              },
              {
                value: '0174DK001',
                className: "mr-zone0_4_N-14",
                isSelected: false
              },
              {
                value: 'S.013',
                className: "mr-zone0_4_N-15",
                isSelected: false
              },
              {
                value: '0168AK001',
                className: "mr-zone0_4_N-16",
                isSelected: false
              },
              {
                value: '0168DK001',
                className: "mr-zone0_4_N-17",
                isSelected: false
              },
              {
                value: 'S.015',
                className: "mr-zone0_4_N-18",
                isSelected: false
              },
              {
                value: '0168EK001',
                className: "mr-zone0_4_N-19",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 0.4_S',
            zoneSubList: [
              {
                value: '0170CH002',
                className: "mr-zone0_4_S-1",
                isSelected: false
              },
              {
                value: '0170CH001',
                className: "mr-zone0_4_S-2",
                isSelected: false
              },
              {
                value: 'S.077',
                className: "mr-zone0_4_S-3",
                isSelected: false
              },
              {
                value: '0173CP001',
                className: "mr-zone0_4_S-4",
                isSelected: false
              },
              {
                value: '0173CP003',
                className: "mr-zone0_4_S-5",
                isSelected: false
              },
              {
                value: '0173CP002',
                className: "mr-zone0_4_S-6",
                isSelected: false
              },
              {
                value: '0172NW001',
                className: "mr-zone0_4_S-7",
                isSelected: false
              },
              {
                value: '0172NX001',
                className: "mr-zone0_4_S-8",
                isSelected: false
              },
              {
                value: '0172NX002',
                className: "mr-zone0_4_S-9",
                isSelected: false
              },
              {
                value: '0172NX003',
                className: "mr-zone0_4_S-10",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 0.5_N',
            zoneSubList: [
              {
                value: '0171AW001',
                className: "mr-zone0_5_N-1",
                isSelected: false
              },
              {
                value: '0171AX001',
                className: "mr-zone0_5_N-2",
                isSelected: false
              },
              {
                value: '0171AX002',
                className: "mr-zone0_5_N-3",
                isSelected: false
              },
              {
                value: '0171AX003',
                className: "mr-zone0_5_N-4",
                isSelected: false
              },
              {
                value: '0168AX001',
                className: "mr-zone0_5_N-5",
                isSelected: false
              },
              {
                value: '0168AW001',
                className: "mr-zone0_5_N-6",
                isSelected: false
              },
              {
                value: '0168AX002',
                className: "mr-zone0_5_N-7",
                isSelected: false
              },
              {
                value: '0168AX003',
                className: "mr-zone0_5_N-8",
                isSelected: false
              },
              {
                value: '0166AW001',
                className: "mr-zone0_5_N-9",
                isSelected: false
              },
              {
                value: '0166AX001',
                className: "mr-zone0_5_N-10",
                isSelected: false
              },
              {
                value: '0166AX002',
                className: "mr-zone0_5_N-11",
                isSelected: false
              },
              {
                value: '0166AX003',
                className: "mr-zone0_5_N-12",
                isSelected: false
              },
              {
                value: '0174AX001',
                className: "mr-zone0_5_N-13",
                isSelected: false
              },
              {
                value: '0174AW001',
                className: "mr-zone0_5_N-14",
                isSelected: false
              },
              {
                value: '0174AX002',
                className: "mr-zone0_5_N-15",
                isSelected: false
              },
              {
                value: '0174AX003',
                className: "mr-zone0_5_N-16",
                isSelected: false
              },
              {
                value: '0180AX001',
                className: "mr-zone0_5_N-17",
                isSelected: false
              },
              {
                value: '0180AW001',
                className: "mr-zone0_5_N-18",
                isSelected: false
              },
              {
                value: '0180AX002',
                className: "mr-zone0_5_N-19",
                isSelected: false
              },
              {
                value: '0180AX003',
                className: "mr-zone0_5_N-20",
                isSelected: false
              },
              {
                value: '0180AP002',
                className: "mr-zone0_5_N-21",
                isSelected: false
              },
              {
                value: '0180AP001',
                className: "mr-zone0_5_N-22",
                isSelected: false
              },
              {
                value: '0180BP002',
                className: "mr-zone0_5_N-23",
                isSelected: false
              },
              {
                value: '0180BP001',
                className: "mr-zone0_5_N-24",
                isSelected: false
              },
              {
                value: '0180EP001',
                className: "mr-zone0_5_N-25",
                isSelected: false
              },
              {
                value: '0180EP002',
                className: "mr-zone0_5_N-26",
                isSelected: false
              },
              {
                value: '0180EP003',
                className: "mr-zone0_5_N-27",
                isSelected: false
              },
              {
                value: '0174EP003',
                className: "mr-zone0_5_N-28",
                isSelected: false
              },
              {
                value: '0174EP002',
                className: "mr-zone0_5_N-29",
                isSelected: false
              },
              {
                value: '0174EP001',
                className: "mr-zone0_5_N-30",
                isSelected: false
              },
              {
                value: '0166CP003',
                className: "mr-zone0_5_N-31",
                isSelected: false
              },
              {
                value: '0166CP002',
                className: "mr-zone0_5_N-32",
                isSelected: false
              },
              {
                value: '0166CP001',
                className: "mr-zone0_5_N-33",
                isSelected: false
              },
              {
                value: '0168CP001',
                className: "mr-zone0_5_N-34",
                isSelected: false
              },
              {
                value: '0168CP002',
                className: "mr-zone0_5_N-35",
                isSelected: false
              },
              {
                value: '0168CP003',
                className: "mr-zone0_5_N-36",
                isSelected: false
              },
              {
                value: '0168DP002',
                className: "mr-zone0_5_N-37",
                isSelected: false
              },
              {
                value: '0168DP001',
                className: "mr-zone0_5_N-38",
                isSelected: false
              },
              {
                value: '0168AP002',
                className: "mr-zone0_5_N-39",
                isSelected: false
              },
              {
                value: '0168AP001',
                className: "mr-zone0_5_N-40",
                isSelected: false
              },
              {
                value: '0168EP002',
                className: "mr-zone0_5_N-41",
                isSelected: false
              },
              {
                value: '0168EP001',
                className: "mr-zone0_5_N-42",
                isSelected: false
              },
              {
                value: 'S.017',
                className: "mr-zone0_5_N-43",
                isSelected: false
              },
              {
                value: '0171AP003',
                className: "mr-zone0_5_N-44",
                isSelected: false
              },
              {
                value: '0171AP002',
                className: "mr-zone0_5_N-45",
                isSelected: false
              },
              {
                value: '0171AP001',
                className: "mr-zone0_5_N-46",
                isSelected: false
              },
              {
                value: '180DP001',
                className: "mr-zone0_5_N-47",
                isSelected: false
              },
              {
                value: '180DP002',
                className: "mr-zone0_5_N-48",
                isSelected: false
              },
              {
                value: '180CP001',
                className: "mr-zone0_5_N-49",
                isSelected: false
              },
              {
                value: '180CP002',
                className: "mr-zone0_5_N-50",
                isSelected: false
              },
            ]
          },
          {
            floorName: 'Zone 0.5_S',
            zoneSubList: [
              {
                value: 'S.078',
                className: "mr-zone0_5_S-1",
                isSelected: false
              },
              {
                value: '0170BH001',
                className: "mr-zone0_5_S-2",
                isSelected: false
              },

              {
                value: '0170BH002',
                className: "mr-zone0_5_S-3",
                isSelected: false
              },
              {
                value: 'S.080',
                className: "mr-zone0_5_S-4",
                isSelected: false
              },
              {
                value: '0173BP003',
                className: "mr-zone0_5_S-5",
                isSelected: false
              },

              {
                value: '0173BP002',
                className: "mr-zone0_5_S-6",
                isSelected: false
              },

              {
                value: '0173BP001',
                className: "mr-zone0_5_S-7",
                isSelected: false
              },

              {
                value: '0172GW001',
                className: "mr-zone0_5_S-8",
                isSelected: false
              },

              {
                value: '0172GX001',
                className: "mr-zone0_5_S-9",
                isSelected: false
              },

              {
                value: '0172GX002',
                className: "mr-zone0_5_S-10",
                isSelected: false
              },

              {
                value: '0172GX003',
                className: "mr-zone0_5_S-11",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 0.6_N',
            zoneSubList: [
              {
                value: 'S.033',
                className: "mr-zone0_6_N-1",
                isSelected: false
              },
              {
                value: '0180BK001',
                className: "mr-zone0_6_N-2",
                isSelected: false
              },
              {
                value: '0180DK001',
                className: "mr-zone0_6_N-3",
                isSelected: false
              },
              {
                value: 'S.037',
                className: "mr-zone0_6_N-4",
                isSelected: false
              },
              {
                value: '0180AK001',
                className: "mr-zone0_6_N-5",
                isSelected: false
              },
              {
                value: '0180CK001',
                className: "mr-zone0_6_N-6",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 0.6_S',
            zoneSubList: [
              {
                value: 'CORP',
                className: "mr-zone0_6_S-1",
                isSelected: false
              },
              {
                value: 'PS-NET',
                className: "mr-zone0_6_S-2",
                isSelected: false
              },
              {
                value: 'JAN',
                className: "mr-zone0_6_S-3",
                isSelected: false
              },
              {
                value: '0172MP001',
                className: "mr-zone0_6_S-4",
                isSelected: false
              },
              {
                value: '0172MP002',
                className: "mr-zone0_6_S-5",
                isSelected: false
              },
              {
                value: '0172MK001',
                className: "mr-zone0_6_S-6",
                isSelected: false
              },
              {
                value: 'S.058',
                className: "mr-zone0_6_S-7",
                isSelected: false
              },
              {
                value: '0172LP002',
                className: "mr-zone0_6_S-8",
                isSelected: false
              },
              {
                value: '0172LP001',
                className: "mr-zone0_6_S-9",
                isSelected: false
              },
              {
                value: '0172LK001',
                className: "mr-zone0_6_S-10",
                isSelected: false
              },
              {
                value: '0172KP001',
                className: "mr-zone0_6_S-11",
                isSelected: false
              },
              {
                value: '0172KP002',
                className: "mr-zone0_6_S-12",
                isSelected: false
              },
              {
                value: '0172KK001',
                className: "mr-zone0_6_S-13",
                isSelected: false
              },
              {
                value: 'S.066',
                className: "mr-zone0_6_S-14",
                isSelected: false
              },
              {
                value: '0172JP002',
                className: "mr-zone0_6_S-15",
                isSelected: false
              },
              {
                value: '0172JP001',
                className: "mr-zone0_6_S-16",
                isSelected: false
              },
              {
                value: '0172JK001',
                className: "mr-zone0_6_S-17",
                isSelected: false
              },
              {
                value: '0172HP002',
                className: "mr-zone0_6_S-18",
                isSelected: false
              },
              {
                value: '0172HP001',
                className: "mr-zone0_6_S-19",
                isSelected: false
              },
              {
                value: '0172HK001',
                className: "mr-zone0_6_S-20",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 0.7_N',
            zoneSubList: [
              {
                value: 'S.043.1',
                className: "mr-zone0_7_N-1",
                isSelected: false
              },
              {
                value: 'S.041',
                className: "mr-zone0_7_N-2",
                isSelected: false
              },
              {
                value: 'S.043',
                className: "mr-zone0_7_N-3",
                isSelected: false
              },
              {
                value: 'S.045',
                className: "mr-zone0_7_N-4",
                isSelected: false
              },
              {
                value: 'S.047',
                className: "mr-zone0_7_N-5",
                isSelected: false
              },
              {
                value: 'S.049',
                className: "mr-zone0_7_N-6",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 0.P1_N',
            zoneSubList: [
              {
                value: 'S.003',
                className: "mr-zone0_P1_N-1",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 0.P2_S',
            zoneSubList: [
              {
                value: 'S.003',
                className: "mr-zone0_P2_S-1",
                isSelected: false
              }
            ]
          },
        ]
      },

      // mr first floor plan
      {
        planType: "MR - 1st Floor",
        zoneList: [
          {
            floorName: 'Zone 1.1_N',
            zoneSubList: [
              {
                value: '1.044',
                className: "mr-zone1_1_N-1",
                isSelected: false
              },
              {
                value: '1.046',
                className: "mr-zone1_1_N-2",
                isSelected: false
              },
              {
                value: 'TR02',
                className: "mr-zone1_1_N-3",
                isSelected: false
              },
              {
                value: '1.048.1',
                className: "mr-zone1_1_N-4",
                isSelected: false
              },
              {
                value: '1.048',
                className: "mr-zone1_1_N-5",
                isSelected: false
              },
              {
                value: '1.050',
                className: "mr-zone1_1_N-6",
                isSelected: false
              },
              {
                value: '1.052',
                className: "mr-zone1_1_N-7",
                isSelected: false
              },
              {
                value: '1.054',
                className: "mr-zone1_1_N-8",
                isSelected: false
              },
              {
                value: 'ELCP',
                className: "mr-zone1_1_N-9",
                isSelected: false
              },
              {
                value: 'UPS-LPDB',
                className: "mr-zone1_1_N-10",
                isSelected: false
              },
              {
                value: 'L&P-DB',
                className: "mr-zone1_1_N-11",
                isSelected: false
              },
              {
                value: 'UPS-2',
                className: "mr-zone1_1_N-12",
                isSelected: false
              },
              {
                value: 'UPS-1',
                className: "mr-zone1_1_N-13",
                isSelected: false
              },
              {
                value: 'SWITCH 1',
                className: "mr-zone1_1_N-14",
                isSelected: false
              },
              {
                value: 'SWITCH 2',
                className: "mr-zone1_1_N-15",
                isSelected: false
              },

            ]
          },
          {
            floorName: 'Zone 1.1_S',
            zoneSubList: [
              {
                value: '1.051',
                className: "mr-zone1_1_S-1",
                isSelected: false
              },
              {
                value: 'LPDB-6',
                className: "mr-zone1_1_S-2",
                isSelected: false
              },
              {
                value: '6-LCA',
                className: "mr-zone1_1_S-3",
                isSelected: false
              },
              {
                value: '6-LC',
                className: "mr-zone1_1_S-4",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.2_N',
            zoneSubList: [
              {
                value: 'MR000712FC001',
                className: "mr-zone1_2_N-1",
                isSelected: false
              },
              {
                value: 'MR000711FC001',
                className: "mr-zone1_2_N-2",
                isSelected: false
              },
              {
                value: 'MR000712FC002',
                className: "mr-zone1_2_N-3",
                isSelected: false
              },
              {
                value: '1.038',
                className: "mr-zone1_2_N-4",
                isSelected: false
              },
              {
                value: 'SK05',
                className: "mr-zone1_2_N-5",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.2_S',
            zoneSubList: [
              {
                value: '1.053.1',
                className: "mr-zone1_2_S-1",
                isSelected: false
              },
              {
                value: 'TR03',
                className: "mr-zone1_2_S-2",
                isSelected: false
              },
              {
                value: 'EL01',
                className: "mr-zone1_2_S-3",
                isSelected: false
              },
              {
                value: '1.053',
                className: "mr-zone1_2_S-4",
                isSelected: false
              },
              {
                value: '1.053.2',
                className: "mr-zone1_2_S-5",
                isSelected: false
              },
              {
                value: '1.053.3',
                className: "mr-zone1_2_S-6",
                isSelected: false
              },
              {
                value: '1.053.4',
                className: "mr-zone1_2_S-7",
                isSelected: false
              },
              {
                value: 'SK08',
                className: "mr-zone1_2_S-8",
                isSelected: false
              },
              {
                value: '1.057.1',
                className: "mr-zone1_2_S-9",
                isSelected: false
              },
              {
                value: '1.057.2',
                className: "mr-zone1_2_S-10",
                isSelected: false
              },
              {
                value: '1.057.3',
                className: "mr-zone1_2_S-11",
                isSelected: false
              },
              {
                value: '1.057',
                className: "mr-zone1_2_S-12",
                isSelected: false
              },
              {
                value: '1.059',
                className: "mr-zone1_2_S-13",
                isSelected: false
              },
              {
                value: '1.055',
                className: "mr-zone1_2_S-14",
                isSelected: false
              },
              {
                value: '1.059',
                className: "mr-zone1_2_S-15",
                isSelected: false
              },
              {
                value: '1.065.1',
                className: "mr-zone1_2_S-16",
                isSelected: false
              },
              {
                value: '1.065.3',
                className: "mr-zone1_2_S-17",
                isSelected: false
              },
              {
                value: '1.065.4',
                className: "mr-zone1_2_S-18",
                isSelected: false
              },
              {
                value: '1.065',
                className: "mr-zone1_2_S-19",
                isSelected: false
              },
              {
                value: '1.067',
                className: "mr-zone1_2_S-20",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.3_N',
            zoneSubList: [
              {
                value: '1.034',
                className: "mr-zone1_3_N-1",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.3_S',
            zoneSubList: [
              {
                value: '1.061',
                className: "mr-zone1_3_S-1",
                isSelected: false
              },
              {
                value: '1.063.1',
                className: "mr-zone1_3_S-2",
                isSelected: false
              },
              {
                value: '1.069',
                className: "mr-zone1_3_S-3",
                isSelected: false
              },
              {
                value: '1.063',
                className: "mr-zone1_3_S-4",
                isSelected: false
              },
              {
                value: '1.063.2',
                className: "mr-zone1_3_S-5",
                isSelected: false
              },
              {
                value: '1.063.3',
                className: "mr-zone1_3_S-6",
                isSelected: false
              },
              {
                value: '1.063.4',
                className: "mr-zone1_3_S-7",
                isSelected: false
              },
              {
                value: '1.071',
                className: "mr-zone1_3_S-8",
                isSelected: false
              },
              {
                value: '1.063.5',
                className: "mr-zone1_3_S-9",
                isSelected: false
              },
              {
                value: '1.079',
                className: "mr-zone1_3_S-10",
                isSelected: false
              },
              {
                value: 'SK09',
                className: "mr-zone1_3_S-11",
                isSelected: false
              },
              {
                value: '1.075',
                className: "mr-zone1_3_S-12",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.4_N',
            zoneSubList: [
              {
                value: '1.024',
                className: "mr-zone1_4_N-0",
                isSelected: false
              },
              {
                value: '0130CK001',
                className: "mr-zone1_4_N-1",
                isSelected: false
              },
              {
                value: '0130AK001',
                className: "mr-zone1_4_N-2",
                isSelected: false
              },
              {
                value: '0130FT001',
                className: "mr-zone1_4_N-3",
                isSelected: false
              },
              {
                value: '0130FT002',
                className: "mr-zone1_4_N-4",
                isSelected: false
              },
              {
                value: '0130BK001',
                className: "mr-zone1_4_N-5",
                isSelected: false
              },
              {
                value: '0130BK001',
                className: "mr-zone1_4_N-6",
                isSelected: false
              },
              {
                value: '0130BK001',
                className: "mr-zone1_4_N-7",
                isSelected: false
              },
              {
                value: 'SK04',
                className: "mr-zone1_4_N-8",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.4_S',
            zoneSubList: [
              {
                value: '1.073',
                className: "mr-zone1_4_S-1",
                isSelected: false
              },
              {
                value: '1.077',
                className: "mr-zone1_4_S-2",
                isSelected: false
              },
              {
                value: '1.081.1',
                className: "mr-zone1_4_S-3",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.5_N',
            zoneSubList: [
              {
                value: '1.016',
                className: "mr-zone1_5_N-1",
                isSelected: false
              },
              {
                value: '1.018',
                className: "mr-zone1_5_N-2",
                isSelected: false
              },
              {
                value: '1.020',
                className: "mr-zone1_5_N-3",
                isSelected: false
              },
              {
                value: 'TR01',
                className: "mr-zone1_5_N-4",
                isSelected: false
              },
              {
                value: 'LPDB-5',
                className: "mr-zone1_5_N-5",
                isSelected: false
              },
              {
                value: '1.022',
                className: "mr-zone1_5_N-6",
                isSelected: false
              },
              {
                value: '3-FEA',
                className: "mr-zone1_5_N-7",
                isSelected: false
              },
              {
                value: '3-FE',
                className: "mr-zone1_5_N-8",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.5_S',
            zoneSubList: [
              {
                value: 'MR000719FC005',
                className: "mr-zone1_5_S-1",
                isSelected: false
              },
              {
                value: 'MR000719FC005',
                className: "mr-zone1_5_S-2",
                isSelected: false
              },
              {
                value: '1.081',
                className: "mr-zone1_5_S-3",
                isSelected: false
              },
              {
                value: 'SK11',
                className: "mr-zone1_5_S-4",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.6_N',
            zoneSubList: [
              {
                value: 'MR000709P001/MR000709P500',
                className: "mr-zone1_6_N-1",
                isSelected: false
              },
              {
                value: 'MR000708P001/MR000708P500',
                className: "mr-zone1_6_N-2",
                isSelected: false
              },
              {
                value: 'MR000719FC002',
                className: "mr-zone1_6_N-3",
                isSelected: false
              },
              {
                value: '1.002',
                className: "mr-zone1_6_N-4",
                isSelected: false
              }
              ,
              {
                value: 'MR00075P011/MR000715P511',
                className: "mr-zone1_6_N-5",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.6_S',
            zoneSubList: [
              {
                value: '110V_DC',
                className: "mr-zone1_6_S-1",
                isSelected: false
              },
              {
                value: '1.083',
                className: "mr-zone1_6_S-2",
                isSelected: false
              },
              {
                value: 'MR1-1',
                className: "mr-zone1_6_S-3",
                isSelected: false
              },
              {
                value: 'MR1-2',
                className: "mr-zone1_6_S-4",
                isSelected: false
              },
              {
                value: 'MR1-3',
                className: "mr-zone1_6_S-5",
                isSelected: false
              },
              {
                value: 'MR1-4',
                className: "mr-zone1_6_S-6",
                isSelected: false
              },
              {
                value: 'MR1-5',
                className: "mr-zone1_6_S-7",
                isSelected: false
              },
              {
                value: 'MR1-6',
                className: "mr-zone1_6_S-8",
                isSelected: false
              },
              {
                value: 'MR1-7',
                className: "mr-zone1_6_S-9",
                isSelected: false
              },
              {
                value: 'MR2-1',
                className: "mr-zone1_6_S-10",
                isSelected: false
              },
              {
                value: 'MR2-2',
                className: "mr-zone1_6_S-11",
                isSelected: false
              },
              {
                value: 'MR2-3',
                className: "mr-zone1_6_S-12",
                isSelected: false
              },
              {
                value: 'MR2-4',
                className: "mr-zone1_6_S-13",
                isSelected: false
              },
              {
                value: 'MR2-5',
                className: "mr-zone1_6_S-14",
                isSelected: false
              },
              {
                value: 'MR2-6',
                className: "mr-zone1_6_S-15",
                isSelected: false
              },
              {
                value: 'MR3-1',
                className: "mr-zone1_6_S-16",
                isSelected: false
              },
              {
                value: 'MR3-2',
                className: "mr-zone1_6_S-17",
                isSelected: false
              },
              {
                value: 'MR3-3',
                className: "mr-zone1_6_S-18",
                isSelected: false
              },
              {
                value: 'MR3-4',
                className: "mr-zone1_6_S-19",
                isSelected: false
              },
              {
                value: 'MR3-5',
                className: "mr-zone1_6_S-20",
                isSelected: false
              },
              {
                value: 'MR3-6',
                className: "mr-zone1_6_S-21",
                isSelected: false
              },
              {
                value: 'MR3-7',
                className: "mr-zone1_6_S-22",
                isSelected: false
              },
              {
                value: 'MR4-1',
                className: "mr-zone1_6_S-23",
                isSelected: false
              },
              {
                value: 'MR4-2',
                className: "mr-zone1_6_S-24",
                isSelected: false
              },
              {
                value: 'MR4-3',
                className: "mr-zone1_6_S-25",
                isSelected: false
              },
              {
                value: 'MR4-4',
                className: "mr-zone1_6_S-26",
                isSelected: false
              },
              {
                value: 'MR4-5',
                className: "mr-zone1_6_S-27",
                isSelected: false
              },
              {
                value: 'MR4-6',
                className: "mr-zone1_6_S-28",
                isSelected: false
              },
              {
                value: 'MR5-1',
                className: "mr-zone1_6_S-29",
                isSelected: false
              },
              {
                value: 'MR5-2',
                className: "mr-zone1_6_S-30",
                isSelected: false
              },
              {
                value: 'MR5-3',
                className: "mr-zone1_6_S-31",
                isSelected: false
              },
              {
                value: 'MR5-4',
                className: "mr-zone1_6_S-32",
                isSelected: false
              },
              {
                value: 'MR5-5',
                className: "mr-zone1_6_S-33",
                isSelected: false
              },
              {
                value: 'MR5-6',
                className: "mr-zone1_6_S-34",
                isSelected: false
              },
              {
                value: 'MR5-7',
                className: "mr-zone1_6_S-35",
                isSelected: false
              },
              {
                value: 'MR6-1',
                className: "mr-zone1_6_S-36",
                isSelected: false
              },
              {
                value: 'MR6-2',
                className: "mr-zone1_6_S-37",
                isSelected: false
              },
              {
                value: 'MR6-3',
                className: "mr-zone1_6_S-38",
                isSelected: false
              },
              {
                value: 'MR6-4',
                className: "mr-zone1_6_S-39",
                isSelected: false
              },
              {
                value: 'MR6-5',
                className: "mr-zone1_6_S-40",
                isSelected: false
              },
              {
                value: 'MR6-6',
                className: "mr-zone1_6_S-41",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.7_N',
            zoneSubList: [
              {
                value: '4-GGA',
                className: "mr-zone1_7_N-1",
                isSelected: false
              },
              {
                value: '4-GG',
                className: "mr-zone1_7_N-2",
                isSelected: false
              },
              {
                value: 'LPDB-4',
                className: "mr-zone1_7_N-3",
                isSelected: false
              },
              {
                value: '1.013',
                className: "mr-zone1_7_N-4",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.7_S',
            zoneSubList: [
              {
                value: 'SK10',
                className: "mr-zone1_7_S-1",
                isSelected: false
              },
              {
                value: 'MR6-M',
                className: "mr-zone1_7_S-2",
                isSelected: false
              },
              {
                value: 'MR5-J',
                className: "mr-zone1_7_S-3",
                isSelected: false
              },
              {
                value: 'MR4-H',
                className: "mr-zone1_7_S-4",
                isSelected: false
              },
              {
                value: '1.076',
                className: "mr-zone1_7_S-5",
                isSelected: false
              },
              {
                value: 'MR3-E',
                className: "mr-zone1_7_S-6",
                isSelected: false
              },
              {
                value: 'MR2-D',
                className: "mr-zone1_7_S-7",
                isSelected: false
              },
              {
                value: 'MR1-A',
                className: "mr-zone1_7_S-8",
                isSelected: false
              },
              {
                value: '1.015',
                className: "mr-zone1_7_S-9",
                isSelected: false
              },
              {
                value: 'SK02',
                className: "mr-zone1_7_S-10",
                isSelected: false
              },
              {
                value: 'SK03',
                className: "mr-zone1_7_S-11",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.8_N',
            zoneSubList: [
              {
                value: 'SK01',
                className: "mr-zone1_8_N-1",
                isSelected: false
              },
              {
                value: '0166AP001',
                className: "mr-zone1_8_N-2",
                isSelected: false
              },
              {
                value: '0166BP001',
                className: "mr-zone1_8_N-3",
                isSelected: false
              },
              {
                value: '0166BP002',
                className: "mr-zone1_8_N-4",
                isSelected: false
              },
              {
                value: '0168BP001',
                className: "mr-zone1_8_N-5",
                isSelected: false
              },
              {
                value: '0166BP002',
                className: "mr-zone1_8_N-6",
                isSelected: false
              },
              {
                value: '0166AH001',
                className: "mr-zone1_8_N-7",
                isSelected: false
              },
              {
                value: '0166BH001',
                className: "mr-zone1_8_N-8",
                isSelected: false
              },
              {
                value: '0166BH002',
                className: "mr-zone1_8_N-9",
                isSelected: false
              },
              {
                value: '0166BH001',
                className: "mr-zone1_8_N-10",
                isSelected: false
              },
              {
                value: '0166BH002',
                className: "mr-zone1_8_N-11",
                isSelected: false
              },
              {
                value: '1.017',
                className: "mr-zone1_8_N-12",
                isSelected: false
              },
              {
                value: '0170DH001',
                className: "mr-zone1_8_N-13",
                isSelected: false
              },
              {
                value: '0170DH002',
                className: "mr-zone1_8_N-14",
                isSelected: false
              },
              {
                value: '0170DH003',
                className: "mr-zone1_8_N-15",
                isSelected: false
              },
              {
                value: '0170DH004',
                className: "mr-zone1_8_N-16",
                isSelected: false
              },
              {
                value: 'SK03',
                className: "mr-zone1_8_N-17",
                isSelected: false
              },
              {
                value: 'SK03.1',
                className: "mr-zone1_8_N-18",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.8_S',
            zoneSubList: [
              {
                value: 'MR6-M',
                className: "mr-zone1_8_S-1",
                isSelected: false
              },
              {
                value: 'MR5-J',
                className: "mr-zone1_8_S-2",
                isSelected: false
              },
              {
                value: 'MR4-H',
                className: "mr-zone1_8_S-3",
                isSelected: false
              },
              {
                value: '1.078',
                className: "mr-zone1_8_S-4",
                isSelected: false
              },
              {
                value: 'MR3-E',
                className: "mr-zone1_8_S-5",
                isSelected: false
              },
              {
                value: '1.076',
                className: "mr-zone1_8_S-6",
                isSelected: false
              },
              {
                value: 'MR2-D',
                className: "mr-zone1_8_S-7",
                isSelected: false
              },
              {
                value: 'MR1-A',
                className: "mr-zone1_8_S-8",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.9_N',
            zoneSubList: [
              {
                value: '1.029',
                className: "mr-zone1_9_N-1",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.9_S',
            zoneSubList: [
              {
                value: '1.015',
                className: "mr-zone1_9_S-1",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 1.10_N',
            zoneSubList: [
              {
                value: 'MR000711P001/MR000711P500',
                className: "mr-zone1_10_N-1",
                isSelected: false
              },

              {
                value: '1.033',
                className: "mr-zone1_10_N-2",
                isSelected: false
              },

              {
                value: '1.037',
                className: "mr-zone1_10_N-3",
                isSelected: false
              },

              {
                value: 'MR000712P001/MR000712P500',
                className: "mr-zone1_10_N-4",
                isSelected: false
              },
              {
                value: 'SK06',
                className: "mr-zone1_10_N-5",
                isSelected: false
              },
              {
                value: ' SK06.1',
                className: "mr-zone1_10_N-6",
                isSelected: false
              },


            ]
          },
          {
            floorName: 'Zone 1.10_S',
            zoneSubList: [
              {
                value: 'MR6-L',
                className: "mr-zone1_10_S-1",
                isSelected: false
              },
              {
                value: 'MR5-K',
                className: "mr-zone1_10_S-2",
                isSelected: false
              },

              {
                value: 'MR4-G',
                className: "mr-zone1_10_S-3",
                isSelected: false
              },
              {
                value: '1.058',
                className: "mr-zone1_10_S-4",
                isSelected: false
              },
              {
                value: 'MR3-F',
                className: "mr-zone1_10_S-5",
                isSelected: false
              },
              {
                value: 'MR2-C',
                className: "mr-zone1_10_S-6",
                isSelected: false
              },
              {
                value: 'MR1-B',
                className: "mr-zone1_10_S-7",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.11_S',
            zoneSubList: [
              {
                value: 'SK07.1',
                className: "mr-zone1_11_S-1",
                isSelected: false
              },
              {
                value: 'SK07',
                className: "mr-zone1_11_S-2",
                isSelected: false
              },
              {
                value: 'MR6-L',
                className: "mr-zone1_11_S-3",
                isSelected: false
              },
              {
                value: 'MR5-K',
                className: "mr-zone1_11_S-4",
                isSelected: false
              },
              {
                value: 'MR4-G',
                className: "mr-zone1_11_S-5",
                isSelected: false
              },
              {
                value: '1.056',
                className: "mr-zone1_11_S-6",
                isSelected: false
              },
              {
                value: 'MR3-F',
                className: "mr-zone1_11_S-7",
                isSelected: false
              },
              {
                value: 'MR2-C',
                className: "mr-zone1_11_S-8",
                isSelected: false
              },
              {
                value: 'MR1-B',
                className: "mr-zone1_11_S-9",
                isSelected: false
              },
              {
                value: 'SK01',
                className: "mr-zone1_11_S-10",
                isSelected: false
              },
              {
                value: 'SK02',
                className: "mr-zone1_11_S-11",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.P1_N',
            zoneSubList: [

              {
                value: 'ZONE 1.P1_N',
                className: "mr-zone1-P1_N-1",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 1.P2_S',
            zoneSubList: [
              {
                value: '1.015',
                className: "mr-zone1_P2_S-1",
                isSelected: false
              }
            ]
          },
        ]
      },

       // mr SECOND floor

       {
        planType: "MR - 2nd Floor",
        zoneList: [
          {
            floorName: 'Zone 2.1_N',
            zoneSubList: [
              {
                value: '2.044',
                className: "mr-zone2_1_N-1",
                isSelected: false
              },
              {
                value: 'TR02',
                className: "mr-zone2_1_N-2",
                isSelected: false
              },
              {
                value: '2.019',
                className: "mr-zone2_1_N-3",
                isSelected: false
              },
              {
                value: '2.048',
                className: "mr-zone2_1_N-4",
                isSelected: false
              },
              {
                value: '2.050',
                className: "mr-zone2_1_N-5",
                isSelected: false
              },
              {
                value: '2.052',
                className: "mr-zone2_1_N-6",
                isSelected: false
              }
      
            ]
          },
          {
            floorName: 'Zone 2.1_S',
            zoneSubList: [
              {
                value: '2.053',
                className: "mr-zone2_1_S-1",
                isSelected: false
              },
              {
                value: 'TR03',
                className: "mr-zone2_1_S-2",
                isSelected: false
              },
              {
                value: 'EL01',
                className: "mr-zone2_1_S-3",
                isSelected: false
              },
              {
                value: '2.051',
                className: "mr-zone2_1_S-4",
                isSelected: false
              },
              {
                value: '2.019',
                className: "mr-zone2_1_S-5",
                isSelected: false
              }
      
            ]
          },
          {
            floorName: 'Zone 2.2_N',
            zoneSubList: [
              {
                value: 'MR000719FC007',
                className: "mr-zone2_2_N-1",
                isSelected: false
              },
              {
                value: 'MR000718P001',
                className: "mr-zone2_2_N-2",
                isSelected: false
              },
              {
                value: 'MR000701P010/MR000701P510',
                className: "mr-zone2_2_N-3",
                isSelected: false
              },
              {
                value: 'MR000701P001/MR000701P510',
                className: "mr-zone2_2_N-4",
                isSelected: false
              },
              {
                value: 'MR000701P030',
                className: "mr-zone2_2_N-5",
                isSelected: false
              },
              {
                value: ' 2.018',
                className: "mr-zone2_2_N-6",
                isSelected: false
              },
              {
                value: 'MR000717P001/002',
                className: "mr-zone2_2_N-7",
                isSelected: false
              },
              {
                value: 'MR000702P030',
                className: "mr-zone2_2_N-8",
                isSelected: false
              },
              {
                value: 'MR000702P010/MR000702P510',
                className: "mr-zone2_2_N-9",
                isSelected: false
              },
              {
                value: 'MR000702P001/MR000702P500',
                className: "mr-zone2_2_N-10",
                isSelected: false
              }
      
            ]
          },
          {
            floorName: 'Zone 2.2_S',
            zoneSubList: [
              {
                value: 'MR000709P510/MR000706P010',
                className: "mr-zone2_2_S-1",
                isSelected: false
              },
              {
                value: 'MR000706P001/MR000706P500',
                className: "mr-zone2_2_S-2",
                isSelected: false
              },
              {
                value: '2.057',
                className: "mr-zone2_2_S-3",
                isSelected: false
              },
              {
                value: '2.059',
                className: "mr-zone2_2_S-4",
                isSelected: false
              },
              {
                value: 'MR000705P030',
                className: "mr-zone2_2_S-5",
                isSelected: false
              },
              {
                value: 'MR000705P001/MR000705P500',
                className: "mr-zone2_2_S-6",
                isSelected: false
              },
              {
                value: 'MR000713P001/MR000713P500',
                className: "mr-zone2_2_S-7",
                isSelected: false
              },
              {
                value: '2.075',
                className: "mr-zone2_2_S-8",
                isSelected: false
              },
              {
                value: 'MR000719FC009',
                className: "mr-zone2_2_S-9",
                isSelected: false
              },
              {
                value: 'MR000705P010/MR000705P510',
                className: "mr-zone2_2_S-10",
                isSelected: false
              },
              {
                value: '2.087',
                className: "mr-zone2_2_S-11",
                isSelected: false
              },
              {
                value: '2.089',
                className: "mr-zone2_2_S-12",
                isSelected: false
              }
      
            ]
          },
          {
            floorName: 'Zone 2.3_N',
            zoneSubList: [
              {
                value: '2.014',
                className: "mr-zone2_3_N-1",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 2.3_S',
            zoneSubList: [
              {
                value: '2.085',
                className: "mr-zone2_3_S-1",
                isSelected: false
              }

            ]
          },
          {
            floorName: 'Zone 2.4_N',
            zoneSubList: [
              {
                value: '2.001',
                className: "mr-zone2_4_N-1",
                isSelected: false
              },
              {
                value: '2.002',
                className: "mr-zone2_4_N-2",
                isSelected: false
              },
              {
                value: '2.007',
                className: "mr-zone2_4_N-3",
                isSelected: false
              },
              {
                value: 'TR01',
                className: "mr-zone2_4_N-4",
                isSelected: false
              }
      
            ]
          },
          {
            floorName: 'Zone 2.4_S',
            zoneSubList: [
              {
                value: 'MR000719FC004',
                className: "mr-zone2_4_S-1",
                isSelected: false
              },
              {
                value: 'MR000703P001/MR000703P500',
                className: "mr-zone2_4_S-2",
                isSelected: false
              },
              {
                value: 'MR000703P010/MR000703P510',
                className: "mr-zone2_4_S-3",
                isSelected: false
              },
              {
                value: 'MR000715P040/MR000715P540',
                className: "mr-zone2_4_S-4",
                isSelected: false
              },
              {
                value: '2.054',
                className: "mr-zone2_4_S-5",
                isSelected: false
              },
              {
                value: 'MR000704P001/MR000704P500',
                className: "mr-zone2_4_S-6",
                isSelected: false
              },
              {
                value: 'MR000704P030',
                className: "mr-zone2_4_S-7",
                isSelected: false
              },
              {
                value: 'MR000715P041/MR000715P541',
                className: "mr-zone2_4_S-8",
                isSelected: false
              },
              {
                value: 'MR000704P510/MR000704P010',
                className: "mr-zone2_4_S-9",
                isSelected: false
              },
              {
                value: 'MR000719FC003',
                className: "mr-zone2_4_S-10",
                isSelected: false
              },
              {
                value: '2.074',
                className: "mr-zone2_4_S-11",
                isSelected: false
              },
              {
                value: 'MR000715P535',
                className: "mr-zone2_4_S-12",
                isSelected: false
              },
              {
                value: 'MR000715P536',
                className: "mr-zone2_4_S-13",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 2.5_N',
            zoneSubList: [
              {
                value: '2.015',
                className: "mr-zone2_5_N-1",
                isSelected: false
              },
              {
                value: 'MR000708P010/MR000708P510',
                className: "mr-zone2_5_N-2",
                isSelected: false
              },
              {
                value: '2.032',
                className: "mr-zone2_5_N-3",
                isSelected: false
              },
              {
                value: 'MR000715P526',
                className: "mr-zone2_5_N-4",
                isSelected: false
              },
              {
                value: 'MR000707P001/MR000707P500',
                className: "mr-zone2_5_N-5",
                isSelected: false
              },
              {
                value: '2.027',
                className: "mr-zone2_5_N-6",
                isSelected: false
              }
      
            ]
          },
          {
            floorName: 'Zone 2.6_N',
            zoneSubList: [
              {
                value: '2.031',
                className: "mr-zone2_6_N-1",
                isSelected: false
              },
              {
                value: 'MR000714P001/MR000714P500',
                className: "mr-zone2_6_N-2",
                isSelected: false
              },
              {
                value: '2.017',
                className: "mr-zone2_6_N-3",
                isSelected: false
              },
              {
                value: '2.043',
                className: "mr-zone2_6_N-4",
                isSelected: false
              },
              {
                value: 'MR000710P001/MR000710P500',
                className: "mr-zone2_6_N-5",
                isSelected: false
              },
              {
                value: 'MR000719FC008',
                className: "mr-zone2_6_N-6",
                isSelected: false
              },
              {
                value: '2.049',
                className: "mr-zone2_6_N-7",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 2.P1_N',
            zoneSubList: [
              {
                value: '2.019',
                className: "mr-zone2_P1_N-1",
                isSelected: false
              }
            ]
          },
          {
            floorName: 'Zone 2.P2_S',
            zoneSubList: [
              {
                value: '2.019',
                className: "mr-zone2_P2_S-1",
                isSelected: false
              }
    
            ]
          },
         
        ]
      },

    // mr roof floor
   
    {
      planType: "MR - Roof Plan",
      zoneList: [
        {
          floorName: 'Zone R1',
          zoneSubList: [
            {
              value: 'TR01',
              className: "mr-zoneR1-1",
              isSelected: false
            },
            {
              value: 'zoneR1',
              className: "mr-zoneR1-2",
              isSelected: false
             }
    
          ]
        },
        {
          floorName: 'Zone R2',
          zoneSubList: [
            {
              value: 'zoneR2',
              className: "mr-zoneR2-1",
              isSelected: false
            }
    
          ]
        },
        {
          floorName: 'Zone R3',
          zoneSubList: [
            {
              value: 'zoneR3',
              className: "mr-zoneR3-1",
              isSelected: false
            }
     
          ]
        },
        {
          floorName: 'Zone R4',
          zoneSubList: [
            {
              value: 'zoneR4',
              className: "mr-zoneR4-1",
              isSelected: false
            }
          ]
        },
        {
          floorName: 'Zone R5',
          zoneSubList: [
            {
              value: 'zoneR5',
              className: "mr-zoneR5-1",
              isSelected: false
            }

          ]
        },
        {
          floorName: 'Zone R6',
          zoneSubList: [
            {
              value: 'zoneR6',
              className: "mr-zoneR6-1",
              isSelected: false
            }
          ]
        },
        {
          floorName: 'Zone R7',
          zoneSubList: [
            {
              value: 'zoneR7',
              className: "mr-zoneR7-1",
              isSelected: false
            }
          ]
        },
        {
          floorName: 'Zone R8',
          zoneSubList: [
            {
              value: 'TR03',
              className: "mr-zoneR8-1",
              isSelected: false
            },
            {
              value: 'zoneR8',
              className: "mr-zoneR8-2",
              isSelected: false
             }
    
          ]
        },
        {
          floorName: 'Zone R9',
          zoneSubList: [
            {
              value: 'zoneR9',
              className: "mr-zoneR9-1",
              isSelected: false
            }
          ]
        },
        {
          floorName: 'Zone R10',
          zoneSubList: [
            {
              value: 'zoneR10',
              className: "mr-zoneR10-1",
              isSelected: false
            }
    
          ]
        },
        {
          floorName: 'Zone R11',
          zoneSubList: [
            {
              value: 'zoneR11',
              className: "mr-zoneR11-1",
              isSelected: false
              }
  
          ]
        },
        {
          floorName: 'Zone R12',
          zoneSubList: [
            {
              value: 'zoneR12',
              className: "mr-zoneR12-1",
              isSelected: false
              }
          ]
        },
        {
          floorName: 'Zone R13',
          zoneSubList: [
            
          {
            value: 'zoneR13',
            className: "mr-zoneR13-1",
            isSelected: false
            }
          ]
        },
       
      ]
    },

    // jg start ground floor

    {
      planType: "JG - Ground Floor",
      zoneList: [
        {
          floorName: 'Zone S.0XX',
          zoneSubList: [
            {
              value: 'S.0XX-EL02',
              className: "S_0XX-1",
              isSelected: false
            },
            {
              value: 'S.0XX-S.004.3',
              className: "S_0XX-2",
              isSelected: false
            },
            {
              value: 'S.0XX-TR02',
              className: "S_0XX-3",
              isSelected: false
            },
            {
              value: 'S.0XX-S.004.4',
              className: "S_0XX-4",
              isSelected: false
            },
            {
              value: 'S.0XX-S.K02',
              className: "S_0XX-5",
              isSelected: false
            },
            {
              value: 'S.0XX-S.008.4',
              className: "S_0XX-6",
              isSelected: false
            },
            {
              value: 'S.0XX-S.002.5',
              className: "S_0XX-7",
              isSelected: false
            },
            {
              value: 'S.0XX-S.004.2',
              className: "S_0XX-8",
              isSelected: false
            },
            {
              value: 'S.0XX-S.002.4',
              className: "S_0XX-9 ",
              isSelected: false
            },
            {
              value: 'S.0XX-S.002.3',
              className: "S_0XX-10 ",
              isSelected: false
            },
            {
              value: 'S.0XX-S.002.6',
              className: "S_0XX-11 ",
              isSelected: false
            },
            {
              value: 'S.0XX-S.002.2',
              className: "S_0XX-12 ",
              isSelected: false
            },
            {
              value: 'S.0XX-S.002',
              className: "S_0XX-13 ",
              isSelected: false
            },
            {
              value: 'S.0XX-S.004',
              className: "S_0XX-14 ",
              isSelected: false
            },
            {
              value: 'S.0XX-S.001.3',
              className: "S_0XX-15",
              isSelected: false
            },
            {
              value: 'S.0XX-S.001.2',
              className: "S_0XX-16",
              isSelected: false
            },
            {
              value: 'S.0XX-S.001.1',
              className: "S_0XX-17",
              isSelected: false
            },
            {
              value: 'S.0XX-S.008.3',
              className: "S_0XX-18",
              isSelected: false
            },
            {
              value: 'S.0XX-S.008.2',
              className: "S_0XX-19",
              isSelected: false
            },
            {
              value: 'S.0XX-S.008.1',
              className: "S_0XX-20",
              isSelected: false
            },
            {
              value: 'S.0XX-S.008',
              className: "S_0XX-21",
              isSelected: false
            },
            {
              value: 'S.0XX-S.007.3',
              className: "S_0XX-22",
              isSelected: false
            },
            {
              value: 'S.0XX-S.001',
              className: "S_0XX-23",
              isSelected: false
            },
            {
              value: 'S.0XX-S.007.2',
              className: "S_0XX-24",
              isSelected: false
            },
            {
              value: 'S.0XX-S.007',
              className: "S_0XX-25",
              isSelected: false
            },
            {
              value: 'S.0XX-S.003.1',
              className: "S_0XX-26",
              isSelected: false
            },
            {
              value: 'S.0XX-SK01',
              className: "S_0XX-27",
              isSelected: false
            },
            {
              value: 'S.0XX-EL01',
              className: "S_0XX-28",
              isSelected: false
            },
            {
              value: 'S.0XX-S.003',
              className: "S_0XX-29",
              isSelected: false
            },
            {
              value: 'S.0XX-TR01',
              className: "S_0XX-30",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone S.1XX',
          zoneSubList: [
            {
              value: 'S.1XX-S.120',
              className: "S_1XX-1",
              isSelected: false
            },
            {
              value: 'S.1XX-TR04',
              className: "S_1XX-2",
              isSelected: false
            },
            {
              value: 'S.1XX-S.112',
              className: "S_1XX-3",
              isSelected: false
            },
            {
              value: 'S.1XX-S.128',
              className: "S_1XX-4",
              isSelected: false
            },
            {
              value: 'S.1XX-S.111-Line3',
              className: "S_1XX-5",
              isSelected: false
            },
            {
              value: 'S.1XX-S.111-Line2',
              className: "S_1XX-6",
              isSelected: false
            },
            {
              value: 'S.1XX-S.111-Line1',
              className: "S_1XX-7",
              isSelected: false
            },
            {
              value: 'S.1XX-S.111.1',
              className: "S_1XX-8",
              isSelected: false
            },
            {
              value: 'S.1XX-S.127',
              className: "S_1XX-9",
              isSelected: false
            },
            {
              value: 'S.1XX-EL03',
              className: "S_1XX-10",
              isSelected: false
            },
            {
              value: 'S.1XX-S.117',
              className: "S_1XX-11",
              isSelected: false
            },
            {
              value: 'S.1XX-TR03',
              className: "S_1XX-12",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone S.2XX',
          zoneSubList: [
            {
              value: 'S.2XX-TR06',
              className: "S_2XX-1",
              isSelected: false
            },
            {
              value: 'S.2XX-S.242',
              className: "S_2XX-2",
              isSelected: false
            },
            {
              value: 'S.2XX-EL04',
              className: "S_2XX-3",
              isSelected: false
            },
            {
              value: 'S.2XX-S.240',
              className: "S_2XX-4",
              isSelected: false
            },
            {
              value: 'S.2XX-S.231-Line3',
              className: "S_2XX-5",
              isSelected: false
            },
            {
              value: 'S.2XX-S.231-Line2',
              className: "S_2XX-6",
              isSelected: false
            },
            {
              value: 'S.2XX-S.231-Line1',
              className: "S_2XX-7",
              isSelected: false
            },
            {
              value: 'S.2XX-S.239',
              className: "S_2XX-8",
              isSelected: false
            },
            {
              value: 'S.2XX-S.241',
              className: "S_2XX-9",
              isSelected: false
            },
            {
              value: 'S.2XX-TR05',
              className: "S_2XX-10",
              isSelected: false
            },
            {
              value: 'S.2XX-S.229',
              className: "S_2XX-11",
              isSelected: false
            },
          ]
        },

        {
          floorName: 'Zone S.3XX',
          zoneSubList: [
            {
              value: 'S.3XX-TR08',
              className: "S_3XX-1",
              isSelected: false
            },
            {
              value: 'S.3XX-S.358.2',
              className: "S_3XX-2",
              isSelected: false
            },
            {
              value: 'S.3XX-SK05',
              className: "S_3XX-3",
              isSelected: false
            },
            {
              value: 'S.3XX-SK04',
              className: "S_3XX-4",
              isSelected: false
            },
            {
              value: 'S.3XX-S.360.2',
              className: "S_3XX-5",
              isSelected: false
            },
            {
              value: 'S.3XX-S.350.4',
              className: "S_3XX-6",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354',
              className: "S_3XX-7",
              isSelected: false
            },
            {
              value: 'S.3XX-S.350.3',
              className: "S_3XX-8",
              isSelected: false
            },
            {
              value: 'S.3XX-S.352.2',
              className: "S_3XX-9",
              isSelected: false
            },
            {
              value: 'S.3XX-S.352.1',
              className: "S_3XX-10",
              isSelected: false
            },
            {
              value: 'S.3XX-S.350.2',
              className: "S_3XX-11",
              isSelected: false
            },
            {
              value: 'S.3XX-S.350.1',
              className: "S_3XX-12",
              isSelected: false
            },
            {
              value: 'S.3XX-S.350',
              className: "S_3XX-13",
              isSelected: false
            },
            {
              value: 'S.3XX-S.352',
              className: "S_3XX-14",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354.5',
              className: "S_3XX-15",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354.7',
              className: "S_3XX-16",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354.6',
              className: "S_3XX-17",
              isSelected: false
            },
            {
              value: 'S.3XX-EL06',
              className: "S_3XX-18",
              isSelected: false
            },
            {
              value: 'S.3XX-S.356',
              className: "S_3XX-19",
              isSelected: false
            },
            {
              value: 'S.3XX-S.358.1',
              className: "S_3XX-20",
              isSelected: false
            },
            {
              value: 'S.3XX-EL09',
              className: "S_3XX-21",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354.4',
              className: "S_3XX-22",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354.2',
              className: "S_3XX-23",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354.3',
              className: "S_3XX-24",
              isSelected: false
            },
            {
              value: 'S.3XX-S.358',
              className: "S_3XX-25",
              isSelected: false
            },
            {
              value: 'S.3XX-S.360',
              className: "S_3XX-26",
              isSelected: false
            },
            {
              value: 'S.3XX-S.357.6',
              className: "S_3XX-27",
              isSelected: false
            },
            {
              value: 'S.3XX-S.354.1',
              className: "S_3XX-28",
              isSelected: false
            },
            {
              value: 'S.3XX-S.349.4',
              className: "S_3XX-29",
              isSelected: false
            },
            {
              value: 'S.3XX-S.351.1',
              className: "S_3XX-30",
              isSelected: false
            },
            {
              value: 'S.3XX-S.347',
              className: "S_3XX-31",
              isSelected: false
            },
            {
              value: 'S.3XX-S.347.2',
              className: "S_3XX-32",
              isSelected: false
            },
            {
              value: 'S.3XX-S.347.1',
              className: "S_3XX-33",
              isSelected: false
            },
            {
              value: 'S.3XX-S.349',
              className: "S_3XX-34",
              isSelected: false
            },
            {
              value: 'S.3XX-S.349.3',
              className: "S_3XX-35",
              isSelected: false
            },
            {
              value: 'S.3XX-S.349.2',
              className: "S_3XX-36",
              isSelected: false
            },
            {
              value: 'S.3XX-S.349.1',
              className: "S_3XX-37",
              isSelected: false
            },
            {
              value: 'S.3XX-S.351',
              className: "S_3XX-38",
              isSelected: false
            },
            {
              value: 'S.3XX-S.353',
              className: "S_3XX-39",
              isSelected: false
            },
            {
              value: 'S.3XX-S.349.5',
              className: "S_3XX-40",
              isSelected: false
            },
            {
              value: 'S.3XX-EL05',
              className: "S_3XX-41",
              isSelected: false
            },
            {
              value: 'S.3XX-S.353.1',
              className: "S_3XX-42",
              isSelected: false
            },
            {
              value: 'S.3XX-S.353.4',
              className: "S_3XX-43",
              isSelected: false
            },
            {
              value: 'S.3XX-S.353.2',
              className: "S_3XX-44",
              isSelected: false
            },
            {
              value: 'S.3XX-S.353.3',
              className: "S_3XX-45",
              isSelected: false
            },
            {
              value: 'S.3XX-EL08',
              className: "S_3XX-46",
              isSelected: false
            },
            {
              value: 'S.3XX-S.357.2',
              className: "S_3XX-47",
              isSelected: false
            },
            {
              value: 'S.3XX-S.357.1',
              className: "S_3XX-48",
              isSelected: false
            },
            {
              value: 'S.3XX-S.357',
              className: "S_3XX-49",
              isSelected: false
            },
            {
              value: 'S.3XX-SK03',
              className: "S_3XX-50",
              isSelected: false
            },
            {
              value: 'S.3XX-S.357.3',
              className: "S_3XX-51",
              isSelected: false
            },
            {
              value: 'S.3XX-S.357.4',
              className: "S_3XX-52",
              isSelected: false
            },
            {
              value: 'S.3XX-TR07',
              className: "S_3XX-53",
              isSelected: false
            },
            {
              value: 'S.3XX-S.357.5',
              className: "S_3XX-54",
              isSelected: false
            },
            {
              value: 'S.3XX-EL07',
              className: "S_3XX-55",
              isSelected: false
            },
          ]
        },


      ]
    },

    // jg end ground floor

    // jg first floor start
    {
      planType: "JG - 1st Floor",
      zoneList: [
        {
          floorName: 'Zone 1.0XX',
          zoneSubList: [
            {
              value: '1.0XX-EL02',
              className: "S_1_0XX-1",
              isSelected: false
            },
            {
              value: '1.0XX-1.004.1',
              className: "S_1_0XX-2",
              isSelected: false
            },
            {
              value: '1.0XX-TR02',
              className: "S_1_0XX-3",
              isSelected: false
            },
            {
              value: '1.0XX-SK02',
              className: "S_1_0XX-4",
              isSelected: false
            },
            {
              value: '1.0XX-1.002',
              className: "S_1_0XX-5",
              isSelected: false
            },
            {
              value: '1.0XX-1.002.1',
              className: "S_1_0XX-6",
              isSelected: false
            },
            {
              value: '1.0XX-1.004',
              className: "S_1_0XX-7",
              isSelected: false
            },
            {
              value: '1.0XX-1.008',
              className: "S_1_0XX-8",
              isSelected: false
            },
            {
              value: '1.0XX-SK06',
              className: "S_1_0XX-9",
              isSelected: false
            },
            {
              value: '1.0XX-1.004.2',
              className: "S_1_0XX-10",
              isSelected: false
            },
            {
              value: '1.0XX-1.003.2',
              className: "S_1_0XX-11",
              isSelected: false
            },
            {
              value: '1.0XX-1.003.4',
              className: "S_1_0XX-12",
              isSelected: false
            },
            {
              value: '1.0XX-1.003.3',
              className: "S_1_0XX-13",
              isSelected: false
            },
            {
              value: '1.0XX-1.003',
              className: "S_1_0XX-14",
              isSelected: false
            },
            {
              value: '1.0XX-1.003.9',
              className: "S_1_0XX-15",
              isSelected: false
            },
            {
              value: '1.0XX-1.003.10',
              className: "S_1_0XX-16",
              isSelected: false
            },
            {
              value: '1.0XX-1.005.2',
              className: "S_1_0XX-17",
              isSelected: false
            },
            {
              value: '1.0XX-1.007.1',
              className: "S_1_0XX-18",
              isSelected: false
            },
            {
              value: '1.0XX-1.007.3',
              className: "S_1_0XX-19",
              isSelected: false
            },
            {
              value: '1.0XX-1.007.5',
              className: "S_1_0XX-20",
              isSelected: false
            },
            {
              value: '1.0XX-1.007',
              className: "S_1_0XX-21",
              isSelected: false
            },
            {
              value: '1.0XX-1.003.5',
              className: "S_1_0XX-22",
              isSelected: false
            },
            {
              value: '1.0XX-1.005.1',
              className: "S_1_0XX-23",
              isSelected: false
            },
            {
              value: '1.0XX-1.007.2',
              className: "S_1_0XX-24",
              isSelected: false
            },
            {
              value: '1.0XX-1.001',
              className: "S_1_0XX-25",
              isSelected: false
            },
            {
              value: '1.0XX-EL01',
              className: "S_1_0XX-26",
              isSelected: false
            },
            {
              value: '1.0XX-1.003.1',
              className: "S_1_0XX-27",
              isSelected: false
            },
            {
              value: '1.0XX-SK01',
              className: "S_1_0XX-28",
              isSelected: false
            },
            {
              value: '1.0XX-TR01',
              className: "S_1_0XX-29",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 1.1XX',
          zoneSubList: [
            {
              value: '1.1XX-1.118',
              className: "S_1_1XX-1",
              isSelected: false
            },
            {
              value: '1.1XX-1.120',
              className: "S_1_1XX-2",
              isSelected: false
            },
            {
              value: '1.1XX-TR04',
              className: "S_1_1XX-3",
              isSelected: false
            },
            {
              value: '1.1XX-1.112.1',
              className: "S_1_1XX-4",
              isSelected: false
            },
            {
              value: '1.1XX-1.128',
              className: "S_1_1XX-5",
              isSelected: false
            },
            {
              value: '1.1XX-1.111-Line3',
              className: "S_1_1XX-6",
              isSelected: false
            },
            {
              value: '1.1XX-1.111-Line2',
              className: "S_1_1XX-7",
              isSelected: false
            },
            {
              value: '1.1XX-1.111-Line1',
              className: "S_1_1XX-8",
              isSelected: false
            },
            {
              value: '1.1XX-1.109',
              className: "S_1_1XX-9",
              isSelected: false
            },
            {
              value: '1.1XX-1.130',
              className: "S_1_1XX-10",
              isSelected: false
            },
            {
              value: '1.1XX-EL03',
              className: "S_1_1XX-11",
              isSelected: false
            },
            {
              value: '1.1XX-1.119',
              className: "S_1_1XX-12",
              isSelected: false
            },
            {
              value: '1.1XX-TR03',
              className: "S_1_1XX-13",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 1.2XX',
          zoneSubList: [
            {
              value: '1.2XX-TR06',
              className: "S_1_2XX-1",
              isSelected: false
            },
            {
              value: '1.2XX-1.242',
              className: "S_1_2XX-2",
              isSelected: false
            },
            {
              value: '1.2XX-EL04',
              className: "S_1_2XX-3",
              isSelected: false
            },
            {
              value: '1.2XX-1.231-Line3',
              className: "S_1_2XX-4",
              isSelected: false
            },
            {
              value: '1.2XX-1.231-Line2',
              className: "S_1_2XX-5",
              isSelected: false
            },
            {
              value: '1.2XX-1.231-Line1',
              className: "S_1_2XX-6",
              isSelected: false
            },
            {
              value: '1.2XX-1.130',
              className: "S_1_2XX-7",
              isSelected: false
            },
            {
              value: '1.2XX-TR05',
              className: "S_1_2XX-8",
              isSelected: false
            },
            {
              value: '1.2XX-1.241',
              className: "S_1_2XX-9",
              isSelected: false
            },
            {
              value: '1.2XX-1.243',
              className: "S_1_2XX-10 ",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 1.3XX',
          zoneSubList: [
            {
              value: '1.3XX-TR08',
              className: "S_1_3XX-1",
              isSelected: false
            },
            {
              value: '1.3XX-1.358',
              className: "S_1_3XX-2",
              isSelected: false
            },
            {
              value: '1.3XX-SK05',
              className: "S_1_3XX-3",
              isSelected: false
            },
            {
              value: '1.3XX-SK04',
              className: "S_1_3XX-4",
              isSelected: false
            },
            {
              value: '1.3XX-1.350',
              className: "S_1_3XX-5",
              isSelected: false
            },
            {
              value: '1.3XX-1.350.4',
              className: "S_1_3XX-6",
              isSelected: false
            },
            {
              value: '1.3XX-1.350.5',
              className: "S_1_3XX-7",
              isSelected: false
            },
            {
              value: '1.3XX-1.350.3',
              className: "S_1_3XX-8",
              isSelected: false
            },
            {
              value: '1.3XX-1.350.2',
              className: "S_1_3XX-9",
              isSelected: false
            },
            {
              value: '1.3XX-SK10',
              className: "S_1_3XX-10",
              isSelected: false
            },
            {
              value: '1.3XX-1.354.2',
              className: "S_1_3XX-11",
              isSelected: false
            },
            {
              value: '1.3XX-1.354.1',
              className: "S_1_3XX-12",
              isSelected: false
            },
            {
              value: '1.3XX-EL06',
              className: "S_1_3XX-13",
              isSelected: false
            },
            {
              value: '1.3XX-SK12',
              className: "S_1_3XX-14",
              isSelected: false
            },
            {
              value: '1.3XX-EL09',
              className: "S_1_3XX-15",
              isSelected: false
            },
            {
              value: '1.3XX-SK11',
              className: "S_1_3XX-16",
              isSelected: false
            },
            {
              value: '1.3XX-1.352',
              className: "S_1_3XX-17",
              isSelected: false
            },
            {
              value: '1.3XX-1.347',
              className: "S_1_3XX-18",
              isSelected: false
            },
            {
              value: '1.3XX-1.349.5',
              className: "S_1_3XX-19",
              isSelected: false
            },
            {
              value: '1.3XX-1.349.6',
              className: "S_1_3XX-20",
              isSelected: false
            },
            {
              value: '1.3XX-1.349.4',
              className: "S_1_3XX-21",
              isSelected: false
            },
            {
              value: '1.3XX-1.351.1',
              className: "S_1_3XX-22",
              isSelected: false
            },
            {
              value: '1.3XX-1.354',
              className: "S_1_3XX-23",
              isSelected: false
            },
            {
              value: '1.3XX-1.349.3',
              className: "S_1_3XX-24",
              isSelected: false
            },
            {
              value: '1.3XX-1.349.2',
              className: "S_1_3XX-25",
              isSelected: false
            },
            {
              value: '1.3XX-1.349.1',
              className: "S_1_3XX-26",
              isSelected: false
            },
            {
              value: '1.3XX-1.351',
              className: "S_1_3XX-27",
              isSelected: false
            },
            {
              value: '1.3XX-1.353',
              className: "S_1_3XX-28",
              isSelected: false
            },
            {
              value: '1.3XX-EL05',
              className: "S_1_3XX-29",
              isSelected: false
            },
            {
              value: '1.3XX-1.355',
              className: "S_1_3XX-30",
              isSelected: false
            },
            {
              value: '1.3XX-SK09',
              className: "S_1_3XX-31",
              isSelected: false
            },
            {
              value: '1.3XX-EL08',
              className: "S_1_3XX-32",
              isSelected: false
            },
            {
              value: '1.3XX-SK08',
              className: "S_1_3XX-33",
              isSelected: false
            },
            {
              value: '1.3XX-1.357.1',
              className: "S_1_3XX-34",
              isSelected: false
            },
            {
              value: '1.3XX-1.349',
              className: "S_1_3XX-35",
              isSelected: false
            },
            {
              value: '1.3XX-SK03',
              className: "S_1_3XX-36",
              isSelected: false
            },
            {
              value: '1.3XX-TR07',
              className: "S_1_3XX-37",
              isSelected: false
            },
            {
              value: '1.3XX-1.357',
              className: "S_1_3XX-38",
              isSelected: false
            },
            {
              value: '1.3XX-EL07',
              className: "S_1_3XX-39",
              isSelected: false
            },
          ]
        },
      ]
    },

    // jg first floor end

    //jg second floor start
    {
      planType: "JG - 2nd Floor",
      zoneList: [
        {
          floorName: 'Zone 2.0XX',
          zoneSubList: [
            {
              value: '2.0XX-EL02',
              className: "JG_2_0XX-1",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.8',
              className: "JG_2_0XX-2",
              isSelected: false
            },
            {
              value: '2.0XX-TR02',
              className: "JG_2_0XX-3",
              isSelected: false
            },
            {
              value: '2.0XX-SK02',
              className: "JG_2_0XX-4",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.2',
              className: "JG_2_0XX-5",
              isSelected: false
            },
            {
              value: '2.0XX-2.006.1',
              className: "JG_2_0XX-6",
              isSelected: false
            },
            {
              value: '2.0XX-2.006.2',
              className: "JG_2_0XX-7",
              isSelected: false
            },
            {
              value: '2.0XX-2.010',
              className: "JG_2_0XX-8",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.1',
              className: "JG_2_0XX-9",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.6',
              className: "JG_2_0XX-10",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.7',
              className: "JG_2_0XX-11",
              isSelected: false
            },
            {
              value: '2.0XX-2.004',
              className: "JG_2_0XX-12",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.4',
              className: "JG_2_0XX-13",
              isSelected: false
            },
            {
              value: '2.0XX-SK06',
              className: "JG_2_0XX-14",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.5',
              className: "JG_2_0XX-15",
              isSelected: false
            },
            {
              value: '2.0XX-2.008.1',
              className: "JG_2_0XX-16",
              isSelected: false
            },
            {
              value: '2.0XX-2.004.3',
              className: "JG_2_0XX-17",
              isSelected: false
            },
            {
              value: '2.0XX-2.006',
              className: "JG_2_0XX-18",
              isSelected: false
            },
            {
              value: '2.0XX-2.008',
              className: "JG_2_0XX-19",
              isSelected: false
            },
            {
              value: '2.0XX-2.001',
              className: "JG_2_0XX-20",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.6',
              className: "JG_2_0XX-21",
              isSelected: false
            },
            {
              value: '2.0XX-2.005',
              className: "JG_2_0XX-22",
              isSelected: false
            },
            {
              value: '2.0XX-2.005.4',
              className: "JG_2_0XX-23",
              isSelected: false
            },
            {
              value: '2.0XX-2.007.2',
              className: "JG_2_0XX-24",
              isSelected: false
            },
            {
              value: '2.0XX-2.009.2',
              className: "JG_2_0XX-25",
              isSelected: false
            },
            {
              value: '2.0XX-2.005.3',
              className: "JG_2_0XX-26",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.7',
              className: "JG_2_0XX-27",
              isSelected: false
            },
            {
              value: '2.0XX-2.005.2',
              className: "JG_2_0XX-28",
              isSelected: false
            },
            {
              value: '2.0XX-2.009.1',
              className: "JG_2_0XX-29",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.5',
              className: "JG_2_0XX-30",
              isSelected: false
            },
            {
              value: '2.0XX-2.005.1',
              className: "JG_2_0XX-31",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.8',
              className: "JG_2_0XX-32",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.4',
              className: "JG_2_0XX-33",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.3',
              className: "JG_2_0XX-34",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.1',
              className: "JG_2_0XX-35",
              isSelected: false
            },
            {
              value: '2.0XX-2.009',
              className: "JG_2_0XX-36",
              isSelected: false
            },
            {
              value: '2.0XX-EL01',
              className: "JG_2_0XX-37",
              isSelected: false
            },
            {
              value: '2.0XX-2.003',
              className: "JG_2_0XX-38",
              isSelected: false
            },
            {
              value: '2.0XX-2.003.11',
              className: "JG_2_0XX-39",
              isSelected: false
            },
            {
              value: '2.0XX-SK01',
              className: "JG_2_0XX-40",
              isSelected: false
            },
            {
              value: '2.0XX-TR01',
              className: "JG_2_0XX-41",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 2.1XX',
          zoneSubList: [
            {
              value: '2.1XX-SK17',
              className: "JG_2_1XX-1",
              isSelected: false
            },
            {
              value: '2.1XX-SK21',
              className: "JG_2_1XX-2",
              isSelected: false
            },
            {
              value: '2.1XX-2.118',
              className: "JG_2_1XX-3",
              isSelected: false
            },
            {
              value: '2.1XX-2.120',
              className: "JG_2_1XX-4",
              isSelected: false
            },
            {
              value: '2.1XX-TR04',
              className: "JG_2_1XX-5",
              isSelected: false
            },
            {
              value: '2.1XX-SK25',
              className: "JG_2_1XX-6",
              isSelected: false
            },
            {
              value: '2.1XX-SK29',
              className: "JG_2_1XX-7",
              isSelected: false
            },
            {
              value: '2.1XX-SK33',
              className: "JG_2_1XX-8",
              isSelected: false
            },
            {
              value: '2.1XX-2.111-LINE_3',
              className: "JG_2_1XX-9",
              isSelected: false
            },
            {
              value: '2.1XX-SK16',
              className: "JG_2_1XX-10",
              isSelected: false
            },
            {
              value: '2.1XX-SK20',
              className: "JG_2_1XX-11",
              isSelected: false
            },
            {
              value: '2.1XX-SK24',
              className: "JG_2_1XX-12",
              isSelected: false
            },
            {
              value: '2.1XX-SK28',
              className: "JG_2_1XX-13",
              isSelected: false
            },
            {
              value: '2.1XX-SK32',
              className: "JG_2_1XX-14",
              isSelected: false
            },
            {
              value: '2.1XX-2.111-LINE-2',
              className: "JG_2_1XX-15",
              isSelected: false
            },
            {
              value: '2.1XX-SK15',
              className: "JG_2_1XX-16",
              isSelected: false
            },
            {
              value: '2.1XX-SK19',
              className: "JG_2_1XX-17",
              isSelected: false
            },
            {
              value: '2.1XX-SK23',
              className: "JG_2_1XX-18",
              isSelected: false
            },
            {
              value: '2.1XX-SK27',
              className: "JG_2_1XX-19",
              isSelected: false
            },
            {
              value: '2.1XX-SK31',
              className: "JG_2_1XX-20",
              isSelected: false
            },
            {
              value: '2.1XX-2.111-LINE-2',
              className: "JG_2_1XX-21",
              isSelected: false
            },
            {
              value: '2.1XX-SK14',
              className: "JG_2_1XX-22",
              isSelected: false
            },
            {
              value: '2.1XX-SK18',
              className: "JG_2_1XX-23",
              isSelected: false
            },
            {
              value: '2.1XX-SK22',
              className: "JG_2_1XX-24",
              isSelected: false
            },
            {
              value: '2.1XX-SK26',
              className: "JG_2_1XX-25",
              isSelected: false
            },
            {
              value: '2.1XX-SK30',
              className: "JG_2_1XX-26",
              isSelected: false
            },
            {
              value: '2.1XX-EL03',
              className: "JG_2_1XX-27",
              isSelected: false
            },
            {
              value: '2.1XX-2.119',
              className: "JG_2_1XX-28",
              isSelected: false
            },
            {
              value: '2.1XX-TR03',
              className: "JG_2_1XX-29",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 2.2XX',
          zoneSubList: [
            {
              value: '2.2XX-SK37',
              className: "JG_2_2XX-1",
              isSelected: false
            },
            {
              value: '2.2XX-SK41',
              className: "JG_2_2XX-2",
              isSelected: false
            },
            {
              value: '2.2XX-SK45',
              className: "JG_2_2XX-3",
              isSelected: false
            },
            {
              value: '2.2XX-TR06',
              className: "JG_2_2XX-4",
              isSelected: false
            },
            {
              value: '2.2XX-2.242',
              className: "JG_2_2XX-5",
              isSelected: false
            },
            {
              value: '2.2XX-EL04',
              className: "JG_2_2XX-6",
              isSelected: false
            },
            {
              value: '2.2XX-2.231-LINE_3',
              className: "JG_2_2XX-7",
              isSelected: false
            },
            {
              value: '2.2XX-SK36',
              className: "JG_2_2XX-8",
              isSelected: false
            },
            {
              value: '2.2XX-SK40',
              className: "JG_2_2XX-9",
              isSelected: false
            },
            {
              value: '2.2XX-SK44',
              className: "JG_2_2XX-10",
              isSelected: false
            },
            {
              value: '2.2XX-2.231-LINE_2',
              className: "JG_2_2XX-11",
              isSelected: false
            },
            {
              value: '2.2XX-SK35',
              className: "JG_2_2XX-12",
              isSelected: false
            },
            {
              value: '2.2XX-SK39',
              className: "JG_2_2XX-13",
              isSelected: false
            },
            {
              value: '2.2XX-SK43',
              className: "JG_2_2XX-14",
              isSelected: false
            },
            {
              value: '2.2XX-2.231-LINE_1',
              className: "JG_2_2XX-15",
              isSelected: false
            },
            {
              value: '2.2XX-SK34',
              className: "JG_2_2XX-16",
              isSelected: false
            },
            {
              value: '2.2XX-SK38',
              className: "JG_2_2XX-17",
              isSelected: false
            },
            {
              value: '2.2XX-SK42',
              className: "JG_2_2XX-18",
              isSelected: false
            },
            {
              value: '2.2XX-TR05',
              className: "JG_2_2XX-19",
              isSelected: false
            },
            {
              value: '2.2XX-2.241',
              className: "JG_2_2XX-20",
              isSelected: false
            },
            {
              value: '2.2XX-2.243',
              className: "JG_2_2XX-21",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 2.3XX',
          zoneSubList: [
            {
              value: '2.3XX-TR08',
              className: "JG_2_3XX-1",
              isSelected: false
            },
            {
              value: '2.3XX-2.358',
              className: "JG_2_3XX-2",
              isSelected: false
            },
            {
              value: '2.3XX-SK05',
              className: "JG_2_3XX-3",
              isSelected: false
            },
            {
              value: '2.3XX-SK04',
              className: "JG_2_3XX-4",
              isSelected: false
            },
            {
              value: '2.3XX-2.350.4',
              className: "JG_2_3XX-5",
              isSelected: false
            },
            {
              value: '2.3XX-2.350.5',
              className: "JG_2_3XX-6",
              isSelected: false
            },
            {
              value: '2.3XX-SK10',
              className: "JG_2_3XX-7",
              isSelected: false
            },
            {
              value: '2.3XX-2.354.2',
              className: "JG_2_3XX-8",
              isSelected: false
            },
            {
              value: '2.3XX-2.354.1',
              className: "JG_2_3XX-9",
              isSelected: false
            },
            {
              value: '2.3XX-EL06',
              className: "JG_2_3XX-10",
              isSelected: false
            },
            {
              value: '2.3XX-SK12',
              className: "JG_2_3XX-11",
              isSelected: false
            },
            {
              value: '2.3XX-EL09',
              className: "JG_2_3XX-12",
              isSelected: false
            },
            {
              value: '2.3XX-SK11',
              className: "JG_2_3XX-13",
              isSelected: false
            },
            {
              value: '2.3XX-2.358.1',
              className: "JG_2_3XX-14",
              isSelected: false
            },
            {
              value: '2.3XX-2.352.1',
              className: "JG_2_3XX-15",
              isSelected: false
            },
            {
              value: '2.3XX-2.350.3',
              className: "JG_2_3XX-16",
              isSelected: false
            },
            {
              value: '2.3XX-2.350.1',
              className: "JG_2_3XX-17",
              isSelected: false
            },
            {
              value: '2.3XX-2.352',
              className: "JG_2_3XX-18",
              isSelected: false
            },
            {
              value: '2.3XX-2.354',
              className: "JG_2_3XX-19",
              isSelected: false
            },
            {
              value: '2.3XX-2.356',
              className: "JG_2_3XX-20",
              isSelected: false
            },
            {
              value: '2.3XX-SK47',
              className: "JG_2_3XX-21",
              isSelected: false
            },
            {
              value: '2.3XX-2.356.2',
              className: "JG_2_3XX-22",
              isSelected: false
            },
            {
              value: '2.3XX-2.356.1',
              className: "JG_2_3XX-23",
              isSelected: false
            },
            {
              value: '2.3XX-2.350',
              className: "JG_2_3XX-24",
              isSelected: false
            },
            {
              value: '2.3XX-2.347',
              className: "JG_2_3XX-25",
              isSelected: false
            },
            {
              value: '2.3XX-2.349.3',
              className: "JG_2_3XX-26",
              isSelected: false
            },
            {
              value: '2.3XX-2.353',
              className: "JG_2_3XX-27",
              isSelected: false
            },
            {
              value: '2.3XX-2.359',
              className: "JG_2_3XX-28",
              isSelected: false
            },
            {
              value: '2.3XX-2.349.2',
              className: "JG_2_3XX-29",
              isSelected: false
            },
            {
              value: '2.3XX-2.349.5',
              className: "JG_2_3XX-30",
              isSelected: false
            },
            {
              value: '2.3XX-2.349.4',
              className: "JG_2_3XX-31",
              isSelected: false
            },
            {
              value: '2.3XX-2.351.1',
              className: "JG_2_3XX-32",
              isSelected: false
            },
            {
              value: '2.3XX-SK46',
              className: "JG_2_3XX-33",
              isSelected: false
            },
            {
              value: '2.3XX-2.349.1',
              className: "JG_2_3XX-34",
              isSelected: false
            },
            {
              value: '2.3XX-2.351',
              className: "JG_2_3XX-35",
              isSelected: false
            },
            {
              value: '2.3XX-EL05',
              className: "JG_2_3XX-36",
              isSelected: false
            },
            {
              value: '2.3XX-SK09',
              className: "JG_2_3XX-37",
              isSelected: false
            },
            {
              value: '2.3XX-EL08',
              className: "JG_2_3XX-38",
              isSelected: false
            },
            {
              value: '2.3XX-SK08',
              className: "JG_2_3XX-39",
              isSelected: false
            },
            {
              value: '2.3XX-2.349',
              className: "JG_2_3XX-40",
              isSelected: false
            },
            {
              value: '2.3XX-SK03',
              className: "JG_2_3XX-41",
              isSelected: false
            },
            {
              value: '2.3XX-TR07',
              className: "JG_2_3XX-42",
              isSelected: false
            },
            {
              value: '2.3XX-EL07',
              className: "JG_2_3XX-43",
              isSelected: false
            },
          ]
        },
      ]
    },

    // jg second floor end

    // jg third floor start
    {
      planType: "JG - 3rd Floor",
      zoneList: [
        {
          floorName: 'Zone 3.0XX',
          zoneSubList: [
            {
              value: '3.0XX-EL02',
              className: "JG_3_0XX-1",
              isSelected: false
            },
            {
              value: '3.0XX-3.0041',
              className: "JG_3_0XX-2",
              isSelected: false
            },
            {
              value: '3.0XX-TR02',
              className: "JG_3_0XX-3",
              isSelected: false
            },
            {
              value: '3.0XX-3.006.1',
              className: "JG_3_0XX-4",
              isSelected: false
            },
            {
              value: '3.0XX-SK02',
              className: "JG_3_0XX-5",
              isSelected: false
            },
            {
              value: '3.0XX-3.004',
              className: "JG_3_0XX-6",
              isSelected: false
            },
            {
              value: '3.0XX-3.004.2',
              className: "JG_3_0XX-7",
              isSelected: false
            },
            {
              value: '3.0XX-3.002.1',
              className: "JG_3_0XX-8",
              isSelected: false
            },
            {
              value: '3.0XX-3.004.3',
              className: "JG_3_0XX-9",
              isSelected: false
            },
            {
              value: '3.0XX-SK06',
              className: "JG_3_0XX-10",
              isSelected: false
            },
            {
              value: '3.0XX-3.010',
              className: "JG_3_0XX-11",
              isSelected: false
            },
            {
              value: '3.0XX-3.002',
              className: "JG_3_0XX-12",
              isSelected: false
            },
            {
              value: '3.0XX-3.008.1',
              className: "JG_3_0XX-13",
              isSelected: false
            },
            {
              value: '3.0XX-3.008.2',
              className: "JG_3_0XX-14",
              isSelected: false
            },
            {
              value: '3.0XX-3.008.4',
              className: "JG_3_0XX-15",
              isSelected: false
            },
            {
              value: '3.0XX-3.004.4',
              className: "JG_3_0XX-16",
              isSelected: false
            },
            {
              value: '3.0XX-3.006',
              className: "JG_3_0XX-17",
              isSelected: false
            },
            {
              value: '3.0XX-3.008.3',
              className: "JG_3_0XX-18",
              isSelected: false
            },
            {
              value: '3.0XX-3.109',
              className: "JG_3_0XX-19",
              isSelected: false
            },
            {
              value: '3.0XX-3.001',
              className: "JG_3_0XX-20",
              isSelected: false
            },
            {
              value: '3.0XX-3.003.4',
              className: "JG_3_0XX-21",
              isSelected: false
            },
            {
              value: '3.0XX-3.003.2',
              className: "JG_3_0XX-22",
              isSelected: false
            },
            {
              value: '3.0XX-3.005',
              className: "JG_3_0XX-23",
              isSelected: false
            },
            {
              value: '3.0XX-3.009',
              className: "JG_3_0XX-24",
              isSelected: false
            },
            {
              value: '3.0XX-3.003',
              className: "JG_3_0XX-25",
              isSelected: false
            },
            {
              value: '3.0XX-EL01',
              className: "JG_3_0XX-26",
              isSelected: false
            },
            {
              value: '3.0XX-3.003.1',
              className: "JG_3_0XX-27",
              isSelected: false
            },
            {
              value: '3.0XX-TR01',
              className: "JG_3_0XX-28",
              isSelected: false
            },
            {
              value: '3.0XX-SK01',
              className: "JG_3_0XX-29",
              isSelected: false
            },
            {
              value: '3.0XX-3.008',
              className: "JG_3_0XX-30",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 3.3XX',
          zoneSubList: [
            {
              value: '3.3XX-TR08',
              className: "JG_3_3XX-1",
              isSelected: false
            },
            {
              value: '3.3XX-3.358.2',
              className: "JG_3_3XX-2",
              isSelected: false
            },
            {
              value: '3.3XX-SK05',
              className: "JG_3_3XX-3",
              isSelected: false
            },
            {
              value: '3.3XX-SK04',
              className: "JG_3_3XX-4",
              isSelected: false
            },
            {
              value: '3.3XX-3.350.4',
              className: "JG_3_3XX-5",
              isSelected: false
            },
            {
              value: '3.3XX-3.348.1',
              className: "JG_3_3XX-6",
              isSelected: false
            },
            {
              value: '3.3XX-3.350.5',
              className: "JG_3_3XX-7",
              isSelected: false
            },
            {
              value: '3.3XX-3.354',
              className: "JG_3_3XX-8",
              isSelected: false
            },
            {
              value: '3.3XX-3.350.3',
              className: "JG_3_3XX-9",
              isSelected: false
            },
            {
              value: '3.3XX-SK10',
              className: "JG_3_3XX-10",
              isSelected: false
            },
            {
              value: '3.3XX-3.354.1',
              className: "JG_3_3XX-11",
              isSelected: false
            },
            {
              value: '3.3XX-3.354.2',
              className: "JG_3_3XX-12",
              isSelected: false
            },
            {
              value: '3.3XX-SK12',
              className: "JG_3_3XX-13",
              isSelected: false
            },
            {
              value: '3.3XX-EL06',
              className: "JG_3_3XX-14",
              isSelected: false
            },
            {
              value: '3.3XX-EL09',
              className: "JG_3_3XX-15",
              isSelected: false
            },
            {
              value: '3.3XX-SK11',
              className: "JG_3_3XX-16",
              isSelected: false
            },
            {
              value: '3.3XX-3.360',
              className: "JG_3_3XX-17",
              isSelected: false
            },
            {
              value: '3.3XX-3.350.2',
              className: "JG_3_3XX-18",
              isSelected: false
            },
            {
              value: '3.3XX-3.354.3',
              className: "JG_3_3XX-19",
              isSelected: false
            },
            {
              value: '3.3XX-3.356',
              className: "JG_3_3XX-20",
              isSelected: false
            },
            {
              value: '3.3XX-3.356.3',
              className: "JG_3_3XX-21",
              isSelected: false
            },
            {
              value: '3.3XX-3.354.5',
              className: "JG_3_3XX-22",
              isSelected: false
            },
            {
              value: '3.3XX-3.356.1',
              className: "JG_3_3XX-23",
              isSelected: false
            },
            {
              value: '3.3XX-SK47',
              className: "JG_3_3XX-24",
              isSelected: false
            },
            {
              value: '3.3XX-3.358',
              className: "JG_3_3XX-25",
              isSelected: false
            },
            {
              value: '3.3XX-3.350',
              className: "JG_3_3XX-26",
              isSelected: false
            },
            {
              value: '3.3XX-3.354.6',
              className: "JG_3_3XX-27",
              isSelected: false
            },
            {
              value: '3.3XX-3.356.2',
              className: "JG_3_3XX-28",
              isSelected: false
            },
            {
              value: '3.3XX-3.356.4',
              className: "JG_3_3XX-29",
              isSelected: false
            },
            {
              value: '3.3XX-3.358.1',
              className: "JG_3_3XX-30",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.10',
              className: "JG_3_3XX-31",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.11',
              className: "JG_3_3XX-32",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.9',
              className: "JG_3_3XX-33",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.8',
              className: "JG_3_3XX-34",
              isSelected: false
            },
            {
              value: '3.3XX-3.351',
              className: "JG_3_3XX-35",
              isSelected: false
            },
            {
              value: '3.3XX-3.353',
              className: "JG_3_3XX-36",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.7',
              className: "JG_3_3XX-37",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.6',
              className: "JG_3_3XX-38",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.4',
              className: "JG_3_3XX-39",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.5',
              className: "JG_3_3XX-40",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.3',
              className: "JG_3_3XX-41",
              isSelected: false
            },
            {
              value: '3.3XX-3.347.1',
              className: "JG_3_3XX-42",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.2',
              className: "JG_3_3XX-43",
              isSelected: false
            },
            {
              value: '3.3XX-3.349.1',
              className: "JG_3_3XX-44",
              isSelected: false
            },
            {
              value: '3.3XX-3.349',
              className: "JG_3_3XX-45",
              isSelected: false
            },
            {
              value: '3.3XX-SK46',
              className: "JG_3_3XX-46",
              isSelected: false
            },
            {
              value: '3.3XX-3.353.1',
              className: "JG_3_3XX-47",
              isSelected: false
            },
            {
              value: '3.3XX-EL05',
              className: "JG_3_3XX-48",
              isSelected: false
            },
            {
              value: '3.3XX-3.357',
              className: "JG_3_3XX-49",
              isSelected: false
            },
            {
              value: '3.3XX-SK09',
              className: "JG_3_3XX-50",
              isSelected: false
            },
            {
              value: '3.3XX-EL08',
              className: "JG_3_3XX-51",
              isSelected: false
            },
            {
              value: '3.3XX-SK08',
              className: "JG_3_3XX-52",
              isSelected: false
            },
            {
              value: '3.3XX-3.357.1',
              className: "JG_3_3XX-53",
              isSelected: false
            },
            {
              value: '3.3XX-3.359',
              className: "JG_3_3XX-54",
              isSelected: false
            },
            {
              value: '3.3XX-3.352',
              className: "JG_3_3XX-55",
              isSelected: false
            },
            {
              value: '3.3XX-3.347',
              className: "JG_3_3XX-56",
              isSelected: false
            },
            {
              value: '3.3XX-SK03',
              className: "JG_3_3XX-57",
              isSelected: false
            },
            {
              value: '3.3XX-TR07',
              className: "JG_3_3XX-58",
              isSelected: false
            },
            {
              value: '3.3XX-EL07',
              className: "JG_3_3XX-59",
              isSelected: false
            },
            {
              value: '3.3XX-3.350.1',
              className: "JG_3_3XX-60",
              isSelected: false
            },
            {
              value: '3.3XX-3.347.2',
              className: "JG_3_3XX-61",
              isSelected: false
            },
            {
              value: '3.3XX-3.346',
              className: "JG_3_3XX-62",
              isSelected: false
            }
          ]
        },
      ]
    },

    // jg third floor end

    //jg 4th floor start

    {
      planType: "JG - 4th Floor",
      zoneList: [
        {
          floorName: 'Zone 4.0XX',
          zoneSubList: [
            {
              value: '4.0XX-4.002',
              className: "JG_4_0XX-1",
              isSelected: false
            },
            {
              value: '4.0XX-TR02',
              className: "JG_4_0XX-2",
              isSelected: false
            },
            {
              value: '4.0XX-4.004',
              className: "JG_4_0XX-3",
              isSelected: false
            },
            {
              value: '4.0XX-4.015',
              className: "JG_4_0XX-4",
              isSelected: false
            },
            {
              value: '4.0XX-4.003.3',
              className: "JG_4_0XX-5",
              isSelected: false
            },
            {
              value: '4.0XX-4.001.1',
              className: "JG_4_0XX-6",
              isSelected: false
            },
            {
              value: '4.0XX-4.003.2',
              className: "JG_4_0XX-7",
              isSelected: false
            },
            {
              value: '4.0XX-4.005',
              className: "JG_4_0XX-8",
              isSelected: false
            },
            {
              value: '4.0XX-4.003',
              className: "JG_4_0XX-9",
              isSelected: false
            },
            {
              value: '4.0XX-SK01',
              className: "JG_4_0XX-10",
              isSelected: false
            },
            {
              value: '4.0XX-EL01',
              className: "JG_4_0XX-11",
              isSelected: false
            },
            {
              value: '4.0XX-4.003.1',
              className: "JG_4_0XX-12",
              isSelected: false
            },
            {
              value: '4.0XX-TR01',
              className: "JG_4_0XX-13",
              isSelected: false
            },
            {
              value: '4.0XX-HVAC Floor 0',
              className: "JG_4_0XX-14",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 4.1XX',
          zoneSubList: [
            {
              value: '4.1XX-4.118',
              className: "JG_4_1XX-1",
              isSelected: false
            },
            {
              value: '4.1XX-4.120',
              className: "JG_4_1XX-2",
              isSelected: false
            },
            {
              value: '4.1XX-TR04',
              className: "JG_4_1XX-3",
              isSelected: false
            },
            {
              value: '4.1XX-4.118.1',
              className: "JG_4_1XX-4",
              isSelected: false
            },
            {
              value: '4.1XX-4.114.1',
              className: "JG_4_1XX-5",
              isSelected: false
            },
            {
              value: '4.1XX-4.128',
              className: "JG_4_1XX-6",
              isSelected: false
            },
            {
              value: '4.1XX-4.114',
              className: "JG_4_1XX-7",
              isSelected: false
            },
            {
              value: '4.1XX-4.130',
              className: "JG_4_1XX-8",
              isSelected: false
            },
            {
              value: '4.1XX-4.118.2',
              className: "JG_4_1XX-9",
              isSelected: false
            },
            {
              value: '4.1XX-4.248',
              className: "JG_4_1XX-10",
              isSelected: false
            },
            {
              value: '4.1XX-4.128.2',
              className: "JG_4_1XX-11",
              isSelected: false
            },
            {
              value: '4.1XX-4.113',
              className: "JG_4_1XX-12",
              isSelected: false
            },
            {
              value: '4.1XX-4.129',
              className: "JG_4_1XX-13",
              isSelected: false
            },
            {
              value: '4.1XX-4.127',
              className: "JG_4_1XX-14",
              isSelected: false
            },
            {
              value: '4.1XX-4.113.2',
              className: "JG_4_1XX-15",
              isSelected: false
            },
            {
              value: '4.1XX-EL03',
              className: "JG_4_1XX-16",
              isSelected: false
            },
            {
              value: '4.1XX-4.119',
              className: "JG_4_1XX-17",
              isSelected: false
            },
            {
              value: '4.1XX-TR03',
              className: "JG_4_1XX-18",
              isSelected: false
            },
            {
              value: '4.1XX-HVAC Floor 1',
              className: "JG_4_1XX-19",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 4.2XX',
          zoneSubList: [
            {
              value: '4.2XX-TR06',
              className: "JG_4_2XX-1",
              isSelected: false
            },
            {
              value: '4.2XX-4.242',
              className: "JG_4_2XX-2",
              isSelected: false
            },
            {
              value: '4.2XX-EL04',
              className: "JG_4_2XX-3",
              isSelected: false
            },
            {
              value: '4.2XX-4.234',
              className: "JG_4_2XX-4",
              isSelected: false
            },
            {
              value: '4.2XX-4.238',
              className: "JG_4_2XX-5",
              isSelected: false
            },
            {
              value: '4.2XX-4.240',
              className: "JG_4_2XX-6",
              isSelected: false
            },
            {
              value: '4.2XX-4.240.1',
              className: "JG_4_2XX-7",
              isSelected: false
            },
            {
              value: '4.2XX-4.234.1',
              className: "JG_4_2XX-8",
              isSelected: false
            },
            {
              value: '4.2XX-4.232.2',
              className: "JG_4_2XX-9",
              isSelected: false
            },
            {
              value: '4.2XX-4.239',
              className: "JG_4_2XX-10",
              isSelected: false
            },
            {
              value: '4.2XX-4.237',
              className: "JG_4_2XX-11",
              isSelected: false
            },
            {
              value: '4.2XX-4.237.2',
              className: "JG_4_2XX-12",
              isSelected: false
            },
            {
              value: '4.2XX-TR05',
              className: "JG_4_2XX-13",
              isSelected: false
            },
            {
              value: '4.2XX-4.241',
              className: "JG_4_2XX-14",
              isSelected: false
            },
            {
              value: '4.2XX-4.243',
              className: "JG_4_2XX-15",
              isSelected: false
            },
            {
              value: '4.2XX-HVAC Floor 2',
              className: "JG_4_2XX-16",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 4.3XX',
          zoneSubList: [
            {
              value: '4.3XX-TR08',
              className: "JG_4_3XX-1",
              isSelected: false
            },
            {
              value: '4.3XX-4.358.1',
              className: "JG_4_3XX-2",
              isSelected: false
            },
            {
              value: '4.3XX-SK05',
              className: "JG_4_3XX-3",
              isSelected: false
            },
            {
              value: '4.3XX-4.356.1',
              className: "JG_4_3XX-4",
              isSelected: false
            },
            {
              value: '4.3XX-4.354',
              className: "JG_4_3XX-5",
              isSelected: false
            },
            {
              value: '4.3XX-SK04',
              className: "JG_4_3XX-6",
              isSelected: false
            },
            {
              value: '4.3XX-4.356',
              className: "JG_4_3XX-7",
              isSelected: false
            },
            {
              value: '4.3XX-4.358',
              className: "JG_4_3XX-8",
              isSelected: false
            },
            {
              value: '4.3XX-4.352',
              className: "JG_4_3XX-9",
              isSelected: false
            },
            {
              value: '4.3XX-SK47',
              className: "JG_4_3XX-10",
              isSelected: false
            },
            {
              value: '4.3XX-4.351.1',
              className: "JG_4_3XX-11",
              isSelected: false
            },
            {
              value: '4.3XX-SK46',
              className: "JG_4_3XX-12",
              isSelected: false
            },
            {
              value: '4.3XX-4.351',
              className: "JG_4_3XX-13",
              isSelected: false
            },
            {
              value: '4.3XX-4.345',
              className: "JG_4_3XX-14",
              isSelected: false
            },
            {
              value: '4.3XX-4.355',
              className: "JG_4_3XX-15",
              isSelected: false
            },
            {
              value: '4.3XX-SK03',
              className: "JG_4_3XX-16",
              isSelected: false
            },
            {
              value: '4.3XX-TR07',
              className: "JG_4_3XX-17",
              isSelected: false
            },
            {
              value: '4.3XX-4.357',
              className: "JG_4_3XX-18",
              isSelected: false
            },
            {
              value: '4.3XX-EL07',
              className: "JG_4_3XX-19",
              isSelected: false
            },
            {
              value: '4.3XX-HVAC Floor 3',
              className: "JG_4_3XX-20",
              isSelected: false
            },
          ]
        },

      ]
    },

    // jg 4th floor end

    // jg roof floor start

    {
      planType: "JG - Roof Plan",
      zoneList: [
        {
          floorName: 'Zone 5.0XX',
          zoneSubList: [
            {
              value: '5.0XX-5.002',
              className: "JG_5_0XX-1",
              isSelected: false
            },
            {
              value: '5.0XX-TR02',
              className: "JG_5_0XX-2",
              isSelected: false
            },
            {
              value: '5.0XX-5.004',
              className: "JG_5_0XX-3",
              isSelected: false
            },
            {
              value: '5.0XX-5.001',
              className: "JG_5_0XX-4",
              isSelected: false
            },
            {
              value: '5.0XX-EL01',
              className: "JG_5_0XX-5",
              isSelected: false
            },
            {
              value: '5.0XX-5.003',
              className: "JG_5_0XX-6",
              isSelected: false
            },
            {
              value: '5.0XX-TR01',
              className: "JG_5_0XX-7",
              isSelected: false
            },
            {
              value: '5.0XX-North',
              className: "JG_5_0XX-8",
              isSelected: false
            },
          ]
        },
        {
          floorName: 'Zone 5.1XX',
          zoneSubList: [
            {
              value: '5.1XX-5.118',
              className: "JG_5_1XX-1",
              isSelected: false
            },
            {
              value: '5.1XX-TR04',
              className: "JG_5_1XX-2",
              isSelected: false
            },
            {
              value: '5.1XX-EL03',
              className: "JG_5_1XX-3",
              isSelected: false
            },
            {
              value: '5.1XX-5.119',
              className: "JG_5_1XX-4",
              isSelected: false
            },
            {
              value: '5.1XX-TR03',
              className: "JG_5_1XX-5",
              isSelected: false
            },
            {
              value: '5.1XX-5.119.1',
              className: "JG_5_1XX-6",
              isSelected: false
            },
            {
              value: '5.1XX-Fermentation 1',
              className: "JG_5_1XX-7",
              isSelected: false
            }
          ]
        },
        {
          floorName: 'Zone 5.2XX',
          zoneSubList: [
            {
              value: '5.2XX-5.242.1',
              className: "JG_5_2XX-1",
              isSelected: false
            },
            {
              value: '5.2XX-TR06',
              className: "JG_5_2XX-2",
              isSelected: false
            },
            {
              value: '5.2XX-5.242',
              className: "JG_5_2XX-3",
              isSelected: false
            },
            {
              value: '5.2XX-EL04',
              className: "JG_5_2XX-4",
              isSelected: false
            },
            {
              value: '5.2XX-TR05',
              className: "JG_5_2XX-5",
              isSelected: false
            },
            {
              value: '5.2XX-5.241',
              className: "JG_5_2XX-6",
              isSelected: false
            },
            {
              value: '5.2XX-Fermentation 2',
              className: "JG_5_2XX-7",
              isSelected: false
            },
    
          ]
        },
        {
          floorName: 'Zone 5.3XX',
          zoneSubList: [
            {
              value: '5.3XX-TR08',
              className: "JG_5_3XX-1",
              isSelected: false
            },
            {
              value: '5.3XX-5.358',
              className: "JG_5_3XX-2",
              isSelected: false
            },
            {
              value: '5.3XX-TR07',
              className: "JG_5_3XX-3",
              isSelected: false
            },
            {
              value: '5.3XX-5.357',
              className: "JG_5_3XX-4",
              isSelected: false
            },
            {
              value: '5.3XX-5.357.1',
              className: "JG_5_3XX-5",
              isSelected: false
            },
            {
              value: '5.3XX-EL07',
              className: "JG_5_3XX-6",
              isSelected: false
            },
            {
              value: '5.3XX-South',
              className: "JG_5_3XX-7",
              isSelected: false
            },
    
          ]
        },
      ]
    },

    // jg roof floor end
        // JH - Ground Floor
   
    {
      planType: "JH - Ground Floor",
      zoneList: [
        {
          floorName: 'Zone 0.A1',
          zoneSubList: [
                  {
                value: 'S.002.1',
                className: "JH_0_A1-1",
                isSelected: false
              },
              {
                value: 'S.002',
                className: "JH_0_A1-2",
                isSelected: false
              },
              {
                value: 'S.002.2',
                className: "JH_0_A1-3",
                isSelected: false
              },
              {
                value: 'S.004.4',
                className: "JH_0_A1-4",
                isSelected: false
              },
              {
                value: 'S.004.3',
                className: "JH_0_A1-5",
                isSelected: false
              },
              {
                value: 'S.004.2',
                className: "JH_0_A1-6",
                isSelected: false
              },
              {
                value: 'SK01',
                className: "JH_0_A1-7",
                isSelected: false
              },
              {
                value: 'ZONE 0.A1',
                className: "JH_0_A1-8",
                isSelected: false
              },
              {
                value: 'TR02',
                className: "JH_0_A1-9",
                isSelected: false
              },
              {
                value: 'EL01',
                className: "JH_0_A1-10",
                isSelected: false
              },
              {
                value: 'S.006',
                className: "JH_0_A1-11",
                isSelected: false
              },
              {
                value: 'S.006.1',
                className: "JH_0_A1-12",
                isSelected: false
              },
              {
                value: 'SK01',
                className: "JH_0_A1-13",
                isSelected: false
              },
              {
                value: 'ZONE 0.A1',
                className: "JH_0_A1-14",
                isSelected: false
              },
          ]
        },
        {
          floorName: 'Zone 0.A2',
          zoneSubList: [
            {
              value: '0073AT001',
              className: "JH_0_A2-1",
              isSelected: false
            },
            {
              value: '0073BT001',
              className: "JH_0_A2-2",
              isSelected: false
            },
            {
              value: 'Storage tanks-4',
              className: "JH_0_A2-3",
              isSelected: false
            },
            {
              value: '0072AT001',
              className: "JH_0_A2-4",
              isSelected: false
            },
            {
              value: '0072BT001',
              className: "JH_0_A2-5",
              isSelected: false
            },
            {
              value: 'PAU-0072C-01',
              className: "JH_0_A2-6",
              isSelected: false
            },
            {
              value: 'S.004',
              className: "JH_0_A2-7",
              isSelected: false
            },
            {
              value: 'PAU-0072Z-01',
              className: "JH_0_A2-8",
              isSelected: false
            },
            {
              value: 'PAU-0092Z-01',
              className: "JH_0_A2-9",
              isSelected: false
            },
            {
              value: 'PAU-0074Z-01',
              className: "JH_0_A2-10",
              isSelected: false
            },
            {
              value: 'PAU-0073Z-01',
              className: "JH_0_A2-11",
              isSelected: false
            },
            {
              value: 'PAU-0071Z-01',
              className: "JH_0_A2-12",
              isSelected: false
            },
            {
              value: 'S.004.1',
              className: "JH_0_A2-13",
              isSelected: false
            },
            {
              value: 'S.003-A',
              className: "JH_0_A2-14",
              isSelected: false
            },
            {
              value: 'ZONE 0.A2',
              className: "JH_0_A2-15",
              isSelected: false
            },
            {
              value: 'Storage tanks-2',
              className: "JH_0_A2-16",
              isSelected: false
            },
            {
              value: '0074AT001',
              className: "JH_0_A2-17",
              isSelected: false
            },
            {
              value: '0074BT001',
              className: "JH_0_A2-18",
              isSelected: false
            },
            {
              value: 'Storage tanks-1',
              className: "JH_0_A2-19",
              isSelected: false
            },
            {
              value: '0092AT001',
              className: "JH_0_A2-20",
              isSelected: false
            },
            {
              value: '0092BT001',
              className: "JH_0_A2-21",
              isSelected: false
            },
    
          ]
        },
        {
          floorName: 'Zone 0.B1',
          zoneSubList: [
             {
                value: 'ZONE 0.B1',
                className: "JH_0_B1-1",
                isSelected: false
              },
              {
                value: 'S.005',
                className: "JH_0_B1-2",
                isSelected: false
              },
              {
                value: 'TR01',
                className: "JH_0_B1-3",
                isSelected: false
              },
              {
                value: 'S.005.1',
                className: "JH_0_B1-4",
                isSelected: false
              },
          ]
        },
        {
          floorName: 'Zone 0.B2',
          zoneSubList: [
                {
                  value: 'PAU-0082Z-01',
                  className: "JH_0_B2-1",
                  isSelected: false
                },
                {
                  value: 'PAU-0081Z-01',
                  className: "JH_0_B2-2",
                  isSelected: false
                },
                {
                  value: 'S.003.1',
                  className: "JH_0_B2-3",
                  isSelected: false
                },
                {
                  value: '0082AT001',
                  className: "JH_0_B2-4",
                  isSelected: false
                },
                {
                  value: '0082BT001',
                  className: "JH_0_B2-5",
                  isSelected: false
                },
                {
                  value: 'Storage tanks-5',
                  className: "JH_0_B2-6",
                  isSelected: false
                },
                {
                  value: 'ZONE 0.B2',
                  className: "JH_0_B2-7",
                  isSelected: false
                },
                {
                  value: 'S.003-B',
                  className: "JH_0_B2-8",
                  isSelected: false
                },
                {
                  value: 'S.005.2',
                  className: "JH_0_B2-9",
                  isSelected: false
                },
                {
                  value: 'Storage tanks-3',
                  className: "JH_0_B2-10",
                  isSelected: false
                },
                {
                  value: '0081AT001',
                  className: "JH_0_B2-11",
                  isSelected: false
                },
                {
                  value: '0082BT001',
                  className: "JH_0_B2-12",
                  isSelected: false
                },
          ]
        },
      ]
    },

    // JH - 1st Floor

    {
      planType: "JH - 1st Floor",
      zoneList: [
        {
          floorName: 'Zone 1.A1',
          zoneSubList: [
              {
                value: '1.002',
                className: "JH_1_A1-1",
                isSelected: false
              },
              {
                value: 'ZONE 1.A1',
                className: "JH_1_A1-2",
                isSelected: false
              },
              {
                value: 'EL01',
                className: "JH_1_A1-3",
                isSelected: false
              },
              {
                value: 'TR02',
                className: "JH_1_A1-4",
                isSelected: false
              },
              {
                value: '1.006',
                className: "JH_1_A1-5",
                isSelected: false
              },
              {
                value: 'SK02',
                className: "JH_1_A1-6",
                isSelected: false
              },
          ]
        },
        {
          floorName: 'Zone 1.A2',
          zoneSubList: [
            {
              value: '0073AT001',
              className: "JH_1_A2-1",
              isSelected: false
            },
            {
              value: '0073BT001',
              className: "JH_1_A2-2",
              isSelected: false
            },
            {
              value: 'Storage tanks-4',
              className: "JH_1_A2-3",
              isSelected: false
            },
            {
              value: '0072AT001',
              className: "JH_1_A2-4",
              isSelected: false
            },
            {
              value: '0072BT001',
              className: "JH_1_A2-5",
              isSelected: false
            },
            {
              value: '1.002.2',
              className: "JH_1_A2-6",
              isSelected: false
            },
            {
              value: 'ZONE 1.A2',
              className: "JH_1_A2-7",
              isSelected: false
            },
            {
              value: '1.003.A',
              className: "JH_1_A2-8",
              isSelected: false
            },
            {
              value: 'Storage tanks-2',
              className: "JH_1_A2-9",
              isSelected: false
            },
            {
              value: '0074AT001',
              className: "JH_1_A2-10",
              isSelected: false
            },
            {
              value: '0074BT001',
              className: "JH_1_A2-11",
              isSelected: false
            },
            {
              value: 'Storage tanks-1',
              className: "JH_1_A2-12",
              isSelected: false
            },
            {
              value: '0092AT001',
              className: "JH_1_A2-13",
              isSelected: false
            },
            {
              value: '0092BT001',
              className: "JH_1_A2-14",
              isSelected: false
            },
    
          ]
        },
        {
          floorName: 'Zone 1.A3',
          zoneSubList: [
              {
                value: 'ZONE 1.A3',
                className: "JH_1_A3-1",
                isSelected: false
              },
              {
                value: '1.002.1',
                className: "JH_1_A3-2",
                isSelected: false
              },
          ]
        },
        {
          floorName: 'Zone 1.B1',
          zoneSubList: [
                {
                  value: 'TR01',
                  className: "JH_1_B1-1",
                  isSelected: false
                },
                {
                  value: '1.005',
                  className: "JH_1_B1-2",
                  isSelected: false
                },
                {
                  value: 'ZONE 1.B1',
                  className: "JH_1_B1-3",
                  isSelected: false
                },
          ]
        },
        {
          floorName: 'Zone 1.B2',
          zoneSubList: [
                {
                  value: '0082AT001',
                  className: "JH_1_B2-1",
                  isSelected: false
                },
                {
                  value: '0082BT001',
                  className: "JH_1_B2-2",
                  isSelected: false
                },
                {
                  value: 'Storage tanks-5',
                  className: "JH_1_B2-3",
                  isSelected: false
                },
                {
                  value: '1.003.1',
                  className: "JH_1_B2-4",
                  isSelected: false
                },
                {
                  value: '1.003-B',
                  className: "JH_1_B2-5",
                  isSelected: false
                },
                {
                  value: 'ZONE 1.B2',
                  className: "JH_1_B2-6",
                  isSelected: false
                },
                {
                  value: '134ZT001',
                  className: "JH_1_B2-7",
                  isSelected: false
                },
                {
                  value: '134YT001',
                  className: "JH_1_B2-8",
                  isSelected: false
                },
                {
                  value: 'Air Reciever-4',
                  className: "JH_1_B2-9",
                  isSelected: false
                },
                {
                  value: 'Storage tanks-3',
                  className: "JH_1_B2-10",
                  isSelected: false
                },
                {
                  value: '0081AT001',
                  className: "JH_1_B2-11",
                  isSelected: false
                },
                {
                  value: '0082BT001',
                  className: "JH_1_B2-12",
                  isSelected: false
                },
          ]
        },
        {
          floorName: 'Zone 1.B3',
          zoneSubList: [
                {
                  value: '1.003.2',
                  className: "JH_1_B3-1",
                  isSelected: false
                },
                {
                  value: '1.003.3',
                  className: "JH_1_B3-2",
                  isSelected: false
                },
                {
                  value: 'ZONE 1.B3',
                  className: "JH_1_B3-3",
                  isSelected: false
                },
          ]
        },

      ]
    },

    // JH Mezzanine Floor

    {
      planType: "JH - Mezzanine Floor",
      zoneList: [
        {
          floorName: 'Zone M.A1',
          zoneSubList: [
              {
                value: 'S.104-A',
                className: "JH_M_A1-1",
                isSelected: false
              },
              {
                value: 'TR02',
                className: "JH_M_A1-2",
                isSelected: false
              },
              {
                value: 'EL01',
                className: "JH_M_A1-3",
                isSelected: false
              },
              {
                value: 'ZONE M.A1',
                className: "JH_M_A1-4",
                isSelected: false
              },
              {
                value: 'S.006',
                className: "JH_M_A1-5",
                isSelected: false
              },
              {
                value: 'S.108.1',
                className: "JH_M_A1-6",
                isSelected: false
              },
              {
                value: 'S.108',
                className: "JH_M_A1-7",
                isSelected: false
              },
          ]
        },
        {
          floorName: 'Zone M.A2',
          zoneSubList: [
            {
              value: 'S.102',
              className: "JH_M_A2-1",
              isSelected: false
            },
            {
              value: 'S.102.1',
              className: "JH_M_A2-2",
              isSelected: false
            },
            {
              value: 'S.104.1',
              className: "JH_M_A2-3",
              isSelected: false
            },
            {
              value: 'ZONE M.A2',
              className: "JH_M_A2-4",
              isSelected: false
            },
            {
              value: 'S.004-B',
              className: "JH_M_A2-5",
              isSelected: false
            },
    
          ]
        },
        {
          floorName: 'Zone M.A3',
          zoneSubList: [
              {
                value: 'ZONE M.A3',
                className: "JH_M_A3-1",
                isSelected: false
              },
              {
                value: 'S.104.2',
                className: "JH_M_A3-2",
                isSelected: false
              },
          ]
        },
      ]
    },

    // JH Roof Floor

    {
      planType: "JH - Roof Plan",
      zoneList: [
        {
          floorName: 'Zone R_West',
          zoneSubList: [
              {
                value: 'TR01',
                className: "JH_R_West-1",
                isSelected: false
              },
              {
                value: 'R_West',
                className: "JH_R_West-2",
                isSelected: false
              },
          ]
        },
        {
          floorName: 'Zone R_East',
          zoneSubList: [
            {
              value: 'TR02',
              className: "JH_R_East-1",
              isSelected: false
            },
            {
              value: 'R_East',
              className: "JH_R_East-2",
              isSelected: false
            },
        
          ]
        },
      ]
    },

  

    ]
    return this.bulidingFloorData;
  }

  public GetAllSites(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'common/sites.php');
  }
  public GetAllBuildingsbyid(siteid): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'common/buildings.php?siteid=' + siteid);
  }
  public GetAllFloorsbyid(bid): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'common/floors.php?bid=' + bid);
  }
  public GetAllRoomsbyid(flid): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'common/rooms.php?flid=' + flid);
  }

  public GetAllRequests(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'request/read.php');
  }
  public GetAllRequestsByid(res: RequestBySubcontractorId): Observable<any[]> {
    return this.http.post<any[]>(environment.API_URL + 'request/readrequestid.php', res);
  }

  public GetRequestsImagesByid(id): Observable<any[]> {
    return this.http.get<any>(environment.API_URL + 'request/readImageslist.php?requestId=' + id);
  }

  public GetRequestsLogs(id: RequestsbyId): Observable<any[]> {
    return this.http.post<any>(environment.API_URL + 'request/readLogs.php', id);
  }

  public CreateNewRequest(req): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/create.php', req);
  }
  public UpdateRequest(req: EditRequestDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/update.php', req);
  }
  public UpdateListStatusRequest(req: UpdateRequestStatusListDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/update_status.php', req);
  }
  public DeleteRequest(req: DeleteRequestDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/delete.php', req);
  }
  public DeleteMultiRequest(req: DeleteMultiRequestDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/multipledelete.php', req);
  }
  public GetPlans(req: PlansDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/planslist.php', req);
  }
  public CopyRequest(req: CopyRequestDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/createbycount.php', req);
  }

  public SearchRequest(req: SearchRequestDto): Observable<any> {
    // req: readrequestinfo
    return this.http.post<any>(environment.API_URL + 'request/searchlist.php', req);
  }

  public CloseRequest(formData): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/upload.php', formData);
  }


  public UpdateListReqstNote(req: UpdateNotes): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/updateNotes.php', req);
  }
  public UpdateListReqstSafety(req: UpdateSafety): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/updateSafety.php', req);
  }
  public UpdateListReqstTime(req: UpdateTime): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/updateStartTime.php', req);
  }

  // pagination
  public listpagination(data): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/readrequestinfo.php', data);
  }

  public addCategory(data): Observable<any> {
    return this.http.post<any>(environment.API_URL + "category/create.php", data);
  }

  public readCategory(): Observable<any> {
    return this.http.get(environment.API_URL + "category/read.php");
  }

  public deleteActivity(data): Observable<any> {
    return this.http.post(environment.API_URL + "category/delete.php", data);
  }


  public deleteRamsFile(data): Observable<any> {
    return this.http.post(environment.API_URL + "request/ramsfiledelete.php", data);
  }

  public addRamsFiles(data): Observable<any> {
    return this.http.post(environment.API_URL + "request/multiramsfile.php", data);
  }

  // public SetselectedRequest(row)
  // {
  //   this.SelectedRequestData=row;
  // }
  // public GetSelectedRequestData():Observable<any[]> {
  //   return this.SelectedRequestData;
  // }
}
