import { Component } from '@angular/core';
import { DbService } from './db.service';
import { IColumn } from 'src/app/models/IColumn';
import { IDuration } from 'src/app/models/IDuration';
import { SaveSongComponent } from './save-song/save-song.component';
import { LoadSongComponent } from './load-song/load-song.component';


@Component({
  selector: 'app-db-buttons',
  imports: [ SaveSongComponent, LoadSongComponent],
  templateUrl: './db-buttons.component.html',
  styleUrl: './db-buttons.component.scss'
})
export class DbButtonsComponent {
 

}
