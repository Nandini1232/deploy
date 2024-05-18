import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from './environment';
import { Observable } from 'rxjs';
import { ResponseModel } from './station';
import { CONSTANT } from './constant';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  apiEndPoint: string ='';
 
  constructor(private http: HttpClient) {
    this.apiEndPoint = Environment.ApiEndPoint;
  }
 
  getAllStations(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_STATION);
  }
}