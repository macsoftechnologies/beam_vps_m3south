import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-log-history-model',
  templateUrl: './log-history-model.component.html',
  styleUrls: ['./log-history-model.component.css']
})
export class LogHistoryModelComponent implements OnInit {
  displayedColumns: string[] = ['PermitNo','contractor_name','username','userType','requestType','createdTime'];
  expandedElement: any | null = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}

  toggleRow(row: any) {
    this.expandedElement = this.expandedElement === row ? null : row;
  }
}
