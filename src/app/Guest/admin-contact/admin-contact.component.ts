import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.scss']
})
export class AdminContactComponent {

  OnSubmit()
  {
    alert("We will Reach You Back Soon!!!");
  }
}
