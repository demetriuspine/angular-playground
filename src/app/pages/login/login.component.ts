import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  addressForm = this.fb.group({
    email: ['', Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(50)])
    ],
    password: ['', Validators.required]
  });



  constructor(private fb: FormBuilder,
    private authorizationService: AuthorizationService) {}

  loginClick(){
    if(this.authorizationService.getLoginStatus())
      this.authorizationService.logout();
    else
      this.authorizationService.authorize();
  }
  onSubmit(): void {
    this.loginClick();
    alert('Thanks!');
  }
}
