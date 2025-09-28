import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
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
      next: (response: HttpResponse<any>) => {
        this.grids = response.body.map((grids: any) => {
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
            id: grids.id,
            name: grids.name
          } as IGrids;
        });
      },
      error: (error: HttpErrorResponse) => {
        console.error('API call error:', error);
      }
    }

    )
  }

  getGrids(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.baseUrl}/grids`, { observe: 'response' });
  }

  saveGrids(body): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.baseUrl}/grids`, body, { observe: 'response' })
  }



}
