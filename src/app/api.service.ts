import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  addressUrl = 'https://socialnuts-eg.com/projects/address/api/all';

  constructor(private http: HttpClient) { }

  // Get Data
   getData(): Observable<any> {
    return this.http.get<any>(`${this.addressUrl}`);
   }
}
