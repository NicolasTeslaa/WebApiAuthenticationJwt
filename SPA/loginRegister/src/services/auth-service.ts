import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRegisterModel } from 'src/models/userRegisterModel';
import { Observable } from 'rxjs';
import { UserLoginModel } from 'src/models/userLoginModel';
import { JwtAuth } from 'src/models/JwtAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.ApiUrl
  constructor(private http : HttpClient) {}

  Create(novoUsuario: UserRegisterModel): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${this.baseUrl}/Register`, novoUsuario);
  }
  Login(usuarioLogado: UserLoginModel): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${this.baseUrl}/Login`, usuarioLogado);
  }

}
