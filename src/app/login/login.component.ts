import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ScriptService } from '../services/script.service';
import { RegisterService } from '../services/register.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private stg: StorageService, public scp: ScriptService, public registerS: RegisterService) {}

  /**
   * Asynchronous function to log in a user.
   * It checks the provided email and password against the `users` array.
   * If a match is found, it saves the user's email and name to the LocalStorage and redirects to 'summary.html'.
   * Otherwise, it shows a popup with an error message.
   * @async
   */
  async login() {
      let emailLogin = document.getElementById('email') as HTMLInputElement;
      let passwordLogin = document.getElementById('password')  as HTMLInputElement;
      // if(emailLogin && passwordLogin) {
      //   let user = this.registerS.users.find(u => u.email == emailLogin.value && u.password == passwordLogin.value);
      //   //console.log(user);
      //   if (user) {
      //       this.saveUserinLocalStorge(user.email,user.name);
      //       window.location.href = './html/summary.html';
  
      //   } else {
      //       this.scp.showPopup('Email and/or password are incorrect.');
      //   }
      // }
  }

  /**
   * Saves a user's email and name to LocalStorage.
   * 
   * @param {string} u - The user's email.
   * @param {string} n - The user's name.
   */
saveUserinLocalStorge(u: string, n: string) {
      this.stg.user = JSON.stringify(u);
      let user_name = JSON.stringify(n);
      localStorage.setItem('user', this.stg.user);
      localStorage.setItem('name', user_name);
  }
}
