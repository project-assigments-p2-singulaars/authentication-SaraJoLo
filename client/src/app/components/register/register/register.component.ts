import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router);

  formgroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  submit() {
    if (this.formgroup.valid) { 
      this.authService.register(this.formgroup.value).subscribe(
        response => {
          if (response.accessToken) {
            localStorage.setItem('token', response.accessToken)
            this.router.navigate(['/login']);
          }
}
      );
    }
  }
}
