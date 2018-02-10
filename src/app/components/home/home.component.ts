import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns = ['number', 'title', 'description', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() {
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


}

const ELEMENT_DATA = [
  {title: 'Hydrogen', description: 1.0079},
  {title: 'Helium', description: 4.0026},
  {title: 'Lithium', description: 6.941},
  {title: 'Beryllium', description: 9.0122},
  {title: 'Boron', description: 10.811},
  {title: 'Carbon', description: 12.0107},
  {title: 'Nitrogen', description: 14.0067},
  {title: 'Oxygen', description: 15.9994},
  {title: 'Fluorine', description: 18.9984},
  {title: 'Neon', description: 20.1797},
  {title: 'Sodium', description: 22.9897},
  {title: 'Magnesium', description: 24.305},
  {title: 'Aluminum', description: 26.9815},
  {title: 'Silicon', description: 28.0855},
  {title: 'Phosphorus', description: 30.9738},
  {title: 'Sulfur', description: 32.065},
  {title: 'Chlorine', description: 35.453},
  {title: 'Argon', description: 39.948},
  {title: 'Potassium', description: 39.0983},
  {title: 'Calcium', description: 40.078}
];
