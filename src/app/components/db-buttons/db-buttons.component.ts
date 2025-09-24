import { Component } from '@angular/core';
import { LoadGridComponent } from './load-grid/load-grid.component';
import { IGrid } from 'src/app/models/IGrid';
import { DbService } from './db.service';
import { IChord } from 'src/app/models/IChord';
import { IColumn } from 'src/app/models/IColumn';
import { IDuration } from 'src/app/models/IDuration';


@Component({
  selector: 'app-db-buttons',
  imports: [LoadGridComponent],
  templateUrl: './db-buttons.component.html',
  styleUrl: './db-buttons.component.scss'
})
export class DbButtonsComponent {
 

}
