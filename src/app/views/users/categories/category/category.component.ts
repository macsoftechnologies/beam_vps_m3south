import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/shared/services/category.service';
import { Category } from 'app/views/Models/Category';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  catName:string="";
  catData:Category=
  {
    category:null
  }
  constructor(private catservice:CategoryService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  CreateCategoty()
  {
   this.catData.category=this.catName;
     
   this.catservice.CreateCategory(this.catData).subscribe(x=>
    {
      this.openSnackBar("Category Created Successfully");
    });
  }
  openSnackBar(msg) {
    this._snackBar.open(msg, "Close", {
      duration: 2000,

    });
  }
}
