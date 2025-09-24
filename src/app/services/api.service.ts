import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IColumn } from "../models/IColumn";

@Injectable({ providedIn: "root" })
export class ApiService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:5045'

  saveGrid(gridData: IColumn[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/grid`, gridData);
  }
}
