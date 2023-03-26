import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  })


  error: string = "";

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    let { email, password } = this.loginForm.value;
    if (email === null || email === undefined) email = "";
    if (password === null || password === undefined) password = "";
    this.auth.login(email, password)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.error = err;
        }
      });
  }

  hasErrors(control: string) {
    const input = this.loginForm.get(control);
    if (input === null) {
      return false;
    }
    return input.invalid && input.errors && (input.dirty && input.touched);
  }

  hasError(control: string, error: string) {
    const input = this.loginForm.get(control);
    if (input === null) {
      return false;
    }
    return input.hasError(error);
  }
}
