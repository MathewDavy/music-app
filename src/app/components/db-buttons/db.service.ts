import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IColumn } from 'src/app/models/IColumn';
import { ISong } from 'src/app/models/ISong';





@Injectable({
  providedIn: 'root',
})
export class DbService {
  private baseUrl = 'http://localhost:5291/api'; // Replace with your actual API base URL
  public songs: ISong[] = [];
  public currentSong: ISong;


  constructor(private http: HttpClient) {
    this.getSongs().subscribe({
      next: (response: HttpResponse<any>) => {
        this.songs = response.body;
        console.log(this.songs)
      },
      error: (error: HttpErrorResponse) => {
        console.error('API call error:', error);
      }
    }

    )
  }


  getSongs(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.baseUrl}/songs`, { observe: 'response' });
  }

  saveSong(body): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.baseUrl}/songs`, body, { observe: 'response' })
  }



}
