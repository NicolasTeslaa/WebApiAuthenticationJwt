import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginModel } from 'src/models/userLoginModel';
import { AuthService } from 'src/services/auth-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = new UserLoginModel()
  constructor(private authService: AuthService, private router: Router) {

  }
  validate() {
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
      return;
    }
    this.authService.Login(this.login)
      .toPromise()
      .then((resultOk) => {
        Swal.fire({
          icon: 'success',
          title: 'Login realizado',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['']);

      })
      .catch(error => {
        Swal.fire('Erro ao efetuar login!', `${error.message}`, 'error');
      })
    return;
  }

}