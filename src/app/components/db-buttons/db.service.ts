import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IColumn } from 'src/app/models/IColumn';
import { IGrids } from 'src/app/models/IGrids';





@Injectable({
  providedIn: 'root',
})
export class DbService {
  private baseUrl = 'http://localhost:5291/api'; // Replace with your actual API base URL
  public grids: IGrids[] = [];


  constructor(private http: HttpClient) {
    this.getGrids().subscribe({
      next: (response) => {
        this.grids = response.map((grids: any) => {
          return {
            chordGrid: grids.chordGrid.map((column: any, index: number) => {
              return {
                duration: { duration: column.duration, column: index + 1 },
                chord: { notes: column.notes }
              } as IColumn
            }),
            melodyGrid: grids.melodyGrid.map((column: any, index: number) => {
              return {
                duration: { duration: column.duration, column: index + 1 },
                chord: { notes: column.notes }
              } as IColumn
            }),
            id: grids.id  
          } as IGrids;
        });
      },
      error: (error) => {
        console.error('API call error:', error);
      },
      complete: () => {
        console.log('API call completed.');

      }
    });
  }


  getGrids(): Observable<any> {
    return this.http.get(`${this.baseUrl}/grids`)
  }



}
