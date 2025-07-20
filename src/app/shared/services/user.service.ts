import { Injectable } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { filter } from "rxjs/operators";
import { LayoutService } from "./layout.service";

@Injectable({
  providedIn: "root"
})
export class UserService {


RequestLists:any[]=[];
Planslist:any[]=[];
Departments:any[]=[];
Employees:any[]=[];

  constructor(
    private router: Router,
  ) {

  }


}