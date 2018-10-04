import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarrightComponent } from './sidebarright/sidebarright.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MembershipComponent, HeaderComponent, FooterComponent, LoginComponent, RegisterComponent, MyaccountComponent, SidebarComponent, SidebarrightComponent],
  exports:[MembershipComponent]
})
export class MembershipModule { }
