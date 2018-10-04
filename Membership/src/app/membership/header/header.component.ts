import { Component, OnInit } from '@angular/core';
import { Navigation } from './navigation';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  label:Navigation;
  mobile:number=null;
  i:number=0;
  constructor() { 
  

  }

  ngOnInit() {
  	this.label=[
  {
      name:'Login',
      url:'/login',
      icon:''

  },{
      name:'Register',
      url:'/register',
      icon:''

  },
  {
      name:'My Account',
      url:'/myaccount',
      icon:''

  }]; 
   
console.log(this.label); 
  }
  showdrop(){
    this.i=this.i+1;
    if(this.i%2==0){
this.mobile=0;
}else{
  this.mobile=1;
}

  }

}
