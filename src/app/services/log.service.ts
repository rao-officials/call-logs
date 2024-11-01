import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { urls } from '../utils/url-utils';


@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http :HttpClient) { }

  getCallLogs(): Observable<any> {
    return this.http.get<any>(urls.BASE_URL + urls.CALL_RECORDS);
  }
  getConversation(payload:any): Observable<any> {
    return this.http.post<any>(urls.BASE_URL + urls.CALL_RECORDING,{RecordingUrl:payload});
  }


}
