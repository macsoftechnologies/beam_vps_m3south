import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RequestService } from 'app/shared/services/request.service';

@Component({
  selector: 'app-cat-dialog',
  templateUrl: './cat-dialog.component.html',
  styleUrls: ['./cat-dialog.component.css']
})
export class CatDialogComponent implements OnInit {
  catForm: FormGroup;

  constructor(private beamServices: RequestService, private snackBar: MatSnackBar) { 
    this.catForm = new FormGroup({
      catName: new FormControl("", [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  addCat() {
    // console.log(this.catForm.value.catName, "Input value")
    let catObj = {
      category: this.catForm.value.catName
    }

    this.beamServices.addCategory(catObj).subscribe((catResp)=> {
      if(catResp.status === 200) {
        console.log("Category Added");
        this.snackBar.open("Category Created Successfully", 'close');
        this.beamServices.catDialogservice.emit('true');
        this.ngOnInit();
        // window.location.reload();
      }
      else {
        console.log("Something Went wrong", "dismiss");
      }
    })
  }

}
