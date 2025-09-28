import { Component } from '@angular/core';
import {  LoadGridsComponent } from './load-grids/load-grids.component';
import { DbService } from './db.service';
import { IChord } from 'src/app/models/IChord';
import { IColumn } from 'src/app/models/IColumn';
import { IDuration } from 'src/app/models/IDuration';
import { SaveGridsComponent } from './save-grids/save-grids.component';


@Component({
  selector: 'app-db-buttons',
  imports: [LoadGridsComponent, SaveGridsComponent],
  templateUrl: './db-buttons.component.html',
  styleUrl: './db-buttons.component.scss'
})
export class DbButtonsComponent {
 

}
