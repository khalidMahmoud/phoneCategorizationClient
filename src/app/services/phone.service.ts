import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) {
  }

  getPhoneList() {
    return this.http.get(PHONE_LIST);
  }
}

export const PHONE_LIST: string = '/phoneList';
