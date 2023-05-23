import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.email],)
    ],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private authorizationService: AuthorizationService) { }

  email = this.loginForm.controls['email'];

  getErrorEmail() {
    if (this.email.hasError('required')) {
      return 'Email is required'
    }
    return this.email.hasError('email') ? 'Email must be valid' : '';
  }

  loginClick() {
    if (this.authorizationService.getLoginStatus())
      this.authorizationService.logout();
    else
      this.authorizationService.authorize();
  }
  onSubmit(): void {
    this.loginClick();
    alert('Thanks!');
  }
}
