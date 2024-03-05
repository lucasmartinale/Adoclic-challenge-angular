import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public failPassword: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  public loginForm: FormGroup = new FormGroup({});

  private createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public sendLoginForm(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;

    if (this.authService.login(email, password)) {
      this.router.navigate(['/shopping']);
    } else {
      this.failPassword = true;
    }

    this.loginForm.reset();
  }

}
