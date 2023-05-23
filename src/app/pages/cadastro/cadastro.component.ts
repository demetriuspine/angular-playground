import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  registerForm = this.fb.group({
    id: '',
    company: null,
    firstName: [null, Validators.required],
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

  constructor(private fb: FormBuilder) { }

  email = this.registerForm.controls['email'];

  getErrorEmail() {
    if (this.email.hasError('required')) {
      return 'Email is required'
    }
    return this.email.hasError('email') ? 'Email must be valid' : '';
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
