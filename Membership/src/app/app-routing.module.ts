import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './membership/login/login.component';
import { RegisterComponent } from './membership/register/register.component';
import { MyaccountComponent } from './membership/myaccount/myaccount.component';
import { MembershipComponent } from './membership/membership.component';
const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: '**', redirectTo: 'register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
