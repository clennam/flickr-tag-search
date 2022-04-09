import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordService } from 'src/app/core/password/password.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: string = '';

  // quick validation messages, since the password is just one field
  showPasswordErrorMsg: boolean = false;
  showPasswordOkMsg: boolean = false;

  constructor(private passwordService: PasswordService, private router: Router) { }

  ngOnInit(): void {
    if (this.passwordService.loggedIn) {
      this.router.navigate(['/search']);
    }
  }

  checkPassword() {
    this.passwordService.checkPassword(this.password).subscribe({
      next: (result) => {
        // display success message
        this.showPasswordErrorMsg = false;
        this.showPasswordOkMsg = true;

        // navigate after 1s
        setTimeout(() => {
          this.passwordService.loggedIn = true;
          this.router.navigate(['/search']);
        }, 1000)
      },
      error: (error) => {
        // show error message
        this.showPasswordErrorMsg = true;
        this.showPasswordOkMsg = false;
        this.passwordService.loggedIn = false;
      }
    });
  }

}
