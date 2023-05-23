import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  registerForm = this.fb.group({
    id: '',
    company: null,
    name: [null, Validators.required],
    email: ['', Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.email],)
    ],
    phone: [null, Validators.required],
    city: [null, Validators.required],
    companyName: [null, Validators.required],
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  email = this.registerForm.controls['email'];

  getErrorEmail() {
    if (this.email.hasError('required')) {
      return 'Email is required'
    }
    return this.email.hasError('email') ? 'Email must be valid' : '';
  }

  onSubmit(): void {
    const user: IUser = {
      name: this.registerForm.controls['name'].value!,
      username: this.registerForm.controls['username'].value!,
      email: this.registerForm.controls['email'].value!,
      password: this.registerForm.controls['password'].value!,
      city: this.registerForm.controls['city'].value!,
      phone: this.registerForm.controls['phone'].value!,
      companyName: this.registerForm.controls['companyName'].value!
    };
    localStorage.setItem('user', JSON.stringify(user));
    this.userService.postUser(user).subscribe(newUser => {
      console.log(newUser);
    });
    alert('Thanks!');
  }
}
