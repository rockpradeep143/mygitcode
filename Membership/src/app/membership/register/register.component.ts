import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms'; 
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 userForm = this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required,Validators.minLength(8)],
    consfirmpass:['',Validators.required,Validators.minLength(8)],
    address:this.fb.group({
      street:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required],
      zip:['',Validators.required]


    }) 


 });

  constructor(private fb:FormBuilder) {

   }



 
}
