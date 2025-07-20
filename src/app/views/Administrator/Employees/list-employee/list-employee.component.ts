import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/shared/services/user.service';
import { EmployeeService } from 'app/shared/services/employee.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { EmployeeComponent } from '../employee/employee.component';
import { DeleteOptionComponent } from '../../delete-option/delete-option.component';
import { Mydocs } from 'app/views/Models/DocsDto';
import { DocsComponent } from 'app/views/users/docs/docs.component';
import { PrintDownloadOptions } from 'app/views/Models/PrintDownloadOptionsDto';
import * as moment from 'moment';
import { ExportExcelService } from 'app/shared/services/export-excel.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  ModalOptions: PrintDownloadOptions;

  spinner = false;
  public items: any[];

  temptest = [];

  reorderable = true;
  loadingIndicator = true;

  Cols = [
    { field: 'id', header: 'Id' },
    { field: 'employeeName', header: 'Name' },
    { field: 'badgeId', header: 'Badge Id' },
    { field: 'designation', header: 'Designation' },
    { field: 'phonenumber', header: 'Phone Number' }

  ];
  DownloadExcelData: any[]=[];
  dataForExcel: any[]=[];

  constructor(private empservice: EmployeeService,
    private dialog: MatDialog,public ete: ExportExcelService,) { 

    this.GetAllEmployees();
  }
  ngOnInit(): void {
  }

  GetAllEmployees()
  {
    this.spinner = true;
    this.empservice.GetAllEmployees().subscribe(res=>
      {
        this.spinner = false;
        
        this.items=res["data"];

        this.temptest = this.items;
        
      });
  }

  Editemp(row)
  {
    console.log(row)
    let title = 'Edit Employee';
    let dialogRef: MatDialogRef<any> = this.dialog.open(EmployeeComponent, {
      width: '1200px',
      height: '600px',
      disableClose: false,
      data: { title: title, payload: row, editform: true }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        this.spinner=true;
        setTimeout(() => {
          this.GetAllEmployees();
      }, 1000);
       
      });
  }

  DeleteEmp(row)
  {
    let title = 'Delete Employee';
    let dialogRef: MatDialogRef<any> = this.dialog.open(DeleteOptionComponent, {
      width: '300px',
      height: '150px',
      disableClose: false,
      data: { title: title, payload: row, type: "emp" }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        console.log("TESTING")
        this.GetAllEmployees();
      });
    }

    onActivate(event) {
      if (event.type == 'click') {
        let title = 'Employees Docs';
        let dialogRef: MatDialogRef<any> = this.dialog.open(DocsComponent, {
          width: '1100px',
          disableClose: false,
          data: { title: title, payload: event.row }
        })
        dialogRef.afterClosed()
          .subscribe(res => {
          });
      }
    }
    // exportToExcel()
    // {
    //       const rowsString: string[] = [];
    // let headerString = '';
    // let csv = '';

    // this.ModalOptions = {
    //   key: '',
    //   fileName: '',
    //   dialogHeader: '',
    //   dialogMessage: '',
    //   enableDownloadExcel: true,
    //   enablePrint: true,
    //   dataSource: '',
    //   tableData: '',
    //   columns: this.Cols,
    //   reportHeaderColumns: '',
    //   reportFooterColumns: ''

    // };

    // this.ModalOptions.tableData =  this.items;

    // this.ModalOptions.fileName = "test" + "_" + moment(new Date()).format('YYYY/MM/DD').toString();

    // for (const column of this.ModalOptions.columns) {
    //   let data = column.header;
    //   data = data === 'undefined' ? '' : data;
    //   data = data === null ? '' : data;
    //   data = data === 'null' ? '' : data;
    //   headerString += data + ',';

    // }
    // csv += headerString + '\n';

    // for (let i = 0; i < this.ModalOptions.tableData.length; i++) {
    //   let rowString = '';
    //   let colNames = '';
    //   let objValues = {};
    //   let val = '';

    //   const tableRow = this.ModalOptions.tableData[i];
    //   for (const column of this.ModalOptions.columns) {
    //     if (column.field.includes('.')) {
    //       colNames = column.field.split('.');
    //       objValues = tableRow[colNames[0]];
    //       val = String(objValues[colNames[1]])
    //         .replace(/[\n\r]+/g, '')
    //         .replace(/\s{2,}/g, ' ')
    //         .replace(/,/g, '')
    //         .trim();
    //       val = val === 'true' ? '1' : val === 'false' ? '0' : val;
    //       val = val === null ? '' : val;
    //       val = val === 'null' ? '' : val;
    //       val = val === '0' ? '' : val;
    //       val = val === 'undefined' ? '' : val;
    //       rowString += val + ',';
    //     } else {
    //       val = String(tableRow[column.field])
    //         .replace(/[\n\r]+/g, '')
    //         .replace(/\s{2,}/g, ' ')
    //         .replace(/,/g, '')
    //         .trim();
    //       val = val === 'true' ? '1' : val === 'false' ? '0' : val;
    //       val = val === null ? '' : val;
    //       val = val === 'null' ? '' : val;
    //       val = val === '0' ? '' : val;
    //       val = val === 'undefined' ? '' : val;
    //       rowString += val + ',';
    //     }
    //   }
    //   rowsString.push(rowString);
    // }

    // for (const row of rowsString) {
    //   csv += row + '\n';
    // }

    // csv += this.ModalOptions.reportFooterColumns + '\n';
    // const blob = new Blob(['\uFEFF', csv], { type: 'text/csv' });
    // const link = document.createElement('a');
    // link.setAttribute('href', window.URL.createObjectURL(blob));
    // link.setAttribute(
    //   'download',
    //   this.ModalOptions.fileName + this.ModalOptions.key + '.csv'
    // );
    // document.body.appendChild(link); // Required for FF
    // link.click();
    // }


    exportToExcel() {

      this.items.forEach(x=>
        {
          this.DownloadExcelData.push(
            {EmployeeName:x["employeeName"],BadgeId:x["badgeId"],
            Designation:x["designation"],PhoneNumber:x["phonenumber"],companyName:x["companyName"],email:x["email"]}
          )
        });
  
      this.DownloadExcelData.forEach((row: any) => {
        this.dataForExcel.push(Object.values(row))
      });
  
      let reportData = {
        title: 'Employees Data',
        data: this.dataForExcel,
        headers: Object.keys(this.DownloadExcelData[0])
      }
  
      this.ete.exportExcel(reportData);
    }


    searchFilter(event) {
      const val = event.target.value.toLowerCase();

      if(val != '') {
        const temp = this.items.filter(function (d) {
          return d.companyName.toLowerCase().indexOf(val) !== -1 || d.employeeName.toLowerCase().indexOf(val) !== -1; 
        });

        // console.log(temp);

        this.items = temp;
      }
      else {
        // console.log(this.temptest);
        return this.items = this.temptest;
      }
    }
}
