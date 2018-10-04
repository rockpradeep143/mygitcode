import { Component } from '@angular/core';
import  { MembershipComponent } from  './membership/membership.component';
import { HeaderComponent } from './membership/header/header.component'; 
import {  FooterComponent } from './membership/footer/footer.component'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
