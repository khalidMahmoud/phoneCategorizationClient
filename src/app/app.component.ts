import {Component} from '@angular/core';
import {PhoneService} from "./services/phone.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phoneCategorizationClient';

  constructor(private phoneService: PhoneService) {
    this.getPhoneList();
  }

  getPhoneList() {
    this.phoneService.getPhoneList().subscribe(result => {
      console.log(result)
      }, error => {

      }, () => {

      }
    );
  }
}
