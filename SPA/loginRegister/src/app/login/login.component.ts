import { Component, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuth } from 'src/models/JwtAuth';
import { UserLoginModel } from 'src/models/userLoginModel';
import { AuthService } from 'src/services/auth-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading: boolean = false;
  user = new UserLoginModel()
  senha: string = '';
  mostrarSenha: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.loggedUser()
  }
  goRegistrar() {
  }
  loadData() {
  }
  toggleMostrarSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }
  validate() {
    this.isLoading = true;
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
      return;
    }
    this.authService.Login(this.user).subscribe((JwtAuth) => {
      localStorage.setItem('jwtToken', JwtAuth.token)
      this.authService.loggedUser()
      Swal.fire({
        icon: 'success',
        title: 'Login realizado',
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      this.router.navigate(['']);
    }, (error) => {
      Swal.fire('Erro ao efetuar login!', `${error.message}`, 'error');
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    });
  }
}
