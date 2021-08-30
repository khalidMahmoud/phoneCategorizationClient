import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) {
  }

  getPhoneList() {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin':'*'
    }

    const requestOptions = {
      headers: new Headers(headerDict),
    };
    // @ts-ignore
    return this.http.get(PHONE_LIST,requestOptions);
  }
}

export const PHONE_LIST: string = 'http://localhost:8080/api/phoneList';
