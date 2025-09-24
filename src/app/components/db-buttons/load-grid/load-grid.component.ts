import { Component } from '@angular/core';
import { DbService } from '../db.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-load-grid',
  imports: [MatMenuModule],
  templateUrl: './load-grid.component.html',
  styleUrl: './load-grid.component.scss'
})
export class LoadGridComponent {

  constructor(
    public dbService: DbService,

  ) {
  }

  loadGrid = () => {
    console.log(this.dbService.grids);

  };

}
