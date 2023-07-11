import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRegisterModel } from 'src/models/userRegisterModel';
import { Observable } from 'rxjs';
import { UserLoginModel } from 'src/models/userLoginModel';
import { JwtAuth } from 'src/models/JwtAuth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.ApiUrl
  usuarioAutenticado = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private http : HttpClient, private router: Router) {}

  Create(novoUsuario: UserRegisterModel): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${this.baseUrl}/Register`, novoUsuario);
  }
  Login(usuarioLogado: UserLoginModel): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${this.baseUrl}/Login`, usuarioLogado);
  }
  loggedUser() {
    if () {
      this.usuarioAutenticado = true;
      this.router.navigate(["/dashboard"])
      this.mostrarMenuEmitter.emit(true)
    } else {

      this.mostrarMenuEmitter.emit(false)
    }
  }
  usuarioEstaAutenticado(){
    this.usuarioAutenticado;
 }
}
