import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public loginForm: FormGroup;


  get username(){
    return this.loginForm.get('username')
  }
  get password(){
    return this.loginForm.get('password')
  }

  public errorMessages = {
    username : [
      {type : 'required' , message: 'user name is required'},
      {type : 'pattern' , message: 'Please entera valid email address'}
    ],
    password : [
      {type : 'required' , message: 'password is required'},
      {type : 'minLength' , message: 'Password can be longer than 8 characters'}
    ]
  }

  constructor(public FormBuilder: FormBuilder) { //formbuiller intermédaire entre le formgroup et le forme control name
    this.loginForm = FormBuilder.group({
      username : [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-z0-z0-9]+$")
          
        ])
      ],
      password: [
        "",
        Validators.compose([
          Validators.required, 
          Validators.minLength(8)
        ])
      ],
    });
  }

  ngOnInit() {
  }
   public submit() {
     console.log(this.loginForm.value);
   }

}
