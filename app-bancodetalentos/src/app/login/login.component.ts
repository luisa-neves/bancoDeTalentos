import { Component } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private auth: AuthenticationService,
    private serviceCadastro: CadastroService,
    private router: Router
  ) {}
  msg: any;

  fazerLogin(form: any) {
    this.auth.login(form.email, form.password).subscribe(
      (response) => {
        let data = JSON.stringify(response);
        localStorage.setItem('token', data);
        //window.location.href = '';
        this.router.navigate(['/login']);
      },
      (error) => (this.msg = 'Email ou senha incorretos!')
    );
  }

  //-------- Função olho --------
  visible: boolean = true;
  changetype: boolean = true;

  viewPassword() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  //-------------------------------
}
