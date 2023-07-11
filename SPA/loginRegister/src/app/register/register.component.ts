import { Router } from '@angular/router';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private router: Router) {


}

validate(){
  Swal.fire({
    icon: 'success',
    title: 'Cliente adicionado com sucesso',
    showConfirmButton: false,
    timer: 1500
  })
  this.router.navigate(["/"])
}
}
