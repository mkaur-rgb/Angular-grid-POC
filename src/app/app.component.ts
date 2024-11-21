import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
/* Quartz Theme Specific CSS */
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular], // Add Angular Data Grid Component
  styleUrls: ['./app.component.scss'],
  template: `
  <ag-grid-angular
    [rowData]="rowData"
    [columnDefs]="colDefs" [pagination]="pagination"
    [paginationPageSize]="paginationPageSize"
    [paginationPageSizeSelector]="paginationPageSizeSelector" [class]="themeClass"
 style="height: 500px;"/>`
})
export class AppComponent {
  title = 'AgGrid';
  pagination= true;
  paginationPageSize = 50;
  paginationPageSizeSelector= [200,500,1000]

 ngOninit(){
  this.pagination= true;
  this.paginationPageSize = 50;
  this.paginationPageSizeSelector= [200,500,1000]
 }
  public themeClass: string = "ag-theme-quartz";
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ];
}
