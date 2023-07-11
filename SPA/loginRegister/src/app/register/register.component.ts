import { Router } from '@angular/router';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from 'src/services/auth-service';
import { UserRegisterModel } from 'src/models/userRegisterModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register = new UserRegisterModel();
constructor(private router: Router, private authService : AuthService) {


}


validate() {
  var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
  if (form.checkValidity() === false) {
    form.classList.add('was-validated');
    return;
  }
  this.authService.Create(this.register)
    .toPromise()
    .then((resultOk) => {
      Swal.fire({
        icon: 'success',
        title: 'Usuario adicionado com sucesso',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/']);

    })
    .catch(error => {
      Swal.fire('Erro ao efetuar cadastro!', `${error.message}`, 'error');
    })
  return;
}
}
