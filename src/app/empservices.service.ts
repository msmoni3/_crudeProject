import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable()
export class EmpservicesService {

  constructor(private http:HttpClient) { 
  }

  baseUrl = 'https://crudsample-ade43.firebaseio.com/employeeDetail.json';

  savedata(employeeDetail:any[]):Observable<any>{

    return this.http.put(this.baseUrl,employeeDetail)

  }

}