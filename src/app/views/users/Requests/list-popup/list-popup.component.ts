import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { SafetyprecautionComponent } from 'app/views/Administrator/SafetyPrecautions/safetyprecaution/safetyprecaution.component';
import { SafetyprecautionService } from 'app/shared/services/safetyprecautionservice';
import { RequestService } from 'app/shared/services/request.service';
import { forkJoin } from 'rxjs';
import { RequestsbyId } from 'app/views/Models/RequestDto';

@Component({
  selector: 'app-list-popup',
  templateUrl: './list-popup.component.html',
  styleUrls: ['./list-popup.component.css']
})
export class ListPopupComponent implements OnInit {

  name: string = "abc";
  images: any[] = [];
  spinner: boolean = false;
  logsData: any[] = [];
  safetydata: any[] = [];
  reqId: RequestsbyId =
    {
      userId: null
    }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private safetyprec: SafetyprecautionService,
    private reqservice: RequestService,
    public dialogRef: MatDialogRef<ListPopupComponent>,) { }
  Data = [
    { Id: 101, Name: 'Nitin', Salary: 1234 },
    { Id: 102, Name: 'Sonu', Salary: 1234 },
    { Id: 103, Name: 'Mohit', Salary: 1234 },
    { Id: 104, Name: 'Rahul', Salary: 1234 },
    { Id: 105, Name: 'Kunal', Salary: 1234 }
  ];

  @ViewChild('content') content: ElementRef;
  Requestdata: any;
  ngOnInit() {

    let id = Number.parseInt(this.data.payload["id"]);
    this.reqId.userId = this.data.payload["id"];
    forkJoin(this.reqservice.GetRequestsImagesByid(id), this.reqservice.GetRequestsLogs(this.reqId)).subscribe(res => {
      // let imgs=[];
      //        imgs= res[0]["data"];
      //        imgs.forEach(x=>
      //         {
      //           x["imageName"]="https://safesiteworksbeam.online/beamapi/services/request/"+x["imageName"];
      //           this.images.push(x);
      //         });
      if(!res[0]["message"])
      {
        this.images = res[0]["data"];
      }
     
      this.logsData = res[1]["data"];
    });
    this.buildItemForm(this.data.payload);
  }
  buildItemForm(item) {
    this.Requestdata = item;
    this.spinner = true;
    this.safetydata = [];
    let safetyids = [];
    item["Safety_Precautions"] = item["Safety_Precautions"].split(',');

    safetyids = item["Safety_Precautions"];
    this.safetyprec.GetSafetyprecautions().subscribe(res => {
      let safetylist = [];
      this.spinner = false;
      safetylist = res["data"];
      safetylist.forEach(x => {
        safetyids.forEach(y => {
          if (x["id"] == y) {
            this.safetydata.push(x["precaution"]);
          }
        });
      });


      //this.Requestdata["Safety_Precautions"] = thissafetydata;
    });
  }


  public SavePDF(): void {
    let content = this.content.nativeElement;
    let doc = new jsPDF();
    let _elementHandlers =
    {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    doc.fromHTML(content.innerHTML, 15, 15, {

      'width': 190,
      'elementHandlers': _elementHandlers
    });

    doc.save('test.pdf');
  }
  //  makePdf() { 

  //   // let doc = new jsPDF();
  //   // doc.addHTML(this.content.nativeElement, function() {
  //   //   debugger
  //   //    doc.save("test.pdf");
  //   // });
  //   const filename  = 'ThisIsYourPDFFilename.pdf';

  // 	html2canvas(document.querySelector('#content'),{scale: 1}).then(canvas => {
  // 		let pdf = new jsPDF('p', 'mm', 'a4');
  // 		pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
  // 		pdf.save(filename);
  // 	});
  // }

  // public captureScreen()  
  // {  
  //   var data = document.getElementById('contentToConvert');  
  //   html2canvas(data).then(canvas => {  
  //     // Few necessary setting options  
  //     var imgWidth = 208;   
  //     var pageHeight = 295;    
  //     var imgHeight = canvas.height * imgWidth / canvas.width;  
  //     var heightLeft = imgHeight;  

  //     const contentDataURL = canvas.toDataURL('image/png')  
  //     let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
  //     var position = 0;  
  //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
  //     pdf.save('MYPdf.pdf'); // Generated PDF   
  //   });  
  // }  

  generatePdf() {
    // 123.pdf
    this.spinner=true;
    const filename = `ACTIVITY_PERMIT_${this.Requestdata.PermitNo}.pdf`;
    html2canvas(document.querySelector('#content'), { scale: 2, allowTaint: true, useCORS: true }).then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 200);
      pdf.save(filename);
      this.spinner=false;
    });
  }
}
