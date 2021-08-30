import {Component, OnInit} from '@angular/core';
import {PhoneService} from "./services/phone.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'phoneCategorizationClient';
  phoneNumbers: any;
  loading: boolean = true;

  states: any[] | any;

  constructor(private phoneService: PhoneService) {
  }

  ngOnInit(): void {
    this.getPhoneList();
    this.states = [
      {label: 'Valid', value: 'Valid'},
      {label: 'Not Valid', value: 'Not Valid'}
    ]
  }

  getPhoneList() {
    this.phoneService.getPhoneList().subscribe(result => {
        this.phoneNumbers = result;
        console.log(this.phoneNumbers);
      }, error => {

      }, () => {
        this.loading = false;
      }
    );
  }
}
