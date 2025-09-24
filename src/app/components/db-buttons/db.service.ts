import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IColumn } from 'src/app/models/IColumn';
import { IGrid } from 'src/app/models/IGrid';





@Injectable({
  providedIn: 'root',
})
export class DbService {
  private baseUrl = 'http://localhost:5291/api'; // Replace with your actual API base URL
  public grids: IGrid[] = [];


  constructor(private http: HttpClient) {
    this.getGrids().subscribe({
      next: (response) => {
        this.grids = response.map((grid: any) => {
          return {
            columns: grid.columns.map((column: any, index: number) => {
              return {
                duration: { duration: column.duration, column: index + 1 },
                chord: { notes: column.notes }
              } as IColumn
            }),
            id: grid.id
          } as IGrid;
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
