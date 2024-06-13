import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  LoginForm!:FormGroup;
  userName:any
  password:any
  success = false;
  constructor(private formBuilder: FormBuilder, private loginService:LoginService) { }
  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmit(){
   this.loginService.login().subscribe((data:any)=>{
      console.log("This is data from DB", data)
      console.log(this.LoginForm.value.userName)
      console.log(this.LoginForm.value.password)
      if(data[0].userName===this.LoginForm.value.userName && data[0].password===this.LoginForm.value.password){
        alert("Login Successful")
      }
      else{
        alert("Login Failed")
      }
    })
  }

}
