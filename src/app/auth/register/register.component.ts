import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    passwordConf: new FormControl("", [Validators.required])
  })
  

  error: string = "";

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    if (!this.registerForm.valid) {
      return;
    }
    let { email, password, passwordConf } = this.registerForm.value; 

    if(email === null || email === undefined) email = "";
    if(password === null || password === undefined) password = "";

    if (password !== passwordConf) {
      this.error = "Passwords don't match"
      return;
    } 

    this.auth.register(email, password)
    .subscribe({
      next : () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.error = "Email already in use";
      }
    });
  }

  hasErrors(control: string) {
    const input = this.registerForm.get(control);
    if (input === null) {
      return false;
    }
    return input.invalid && input.errors && (input.dirty && input.touched);
  }

  hasError(control: string, error: string) {
    const input = this.registerForm.get(control);
    if (input === null) {
      return false;
    }
    return input.hasError(error);
  }
}
