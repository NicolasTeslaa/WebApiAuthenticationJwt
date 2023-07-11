import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRegisterModel } from 'src/models/userRegisterModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private baseUrl = environment.ApiUrl
  constructor(private http : HttpClient) {}

  Create(novoUsuario: UserRegisterModel): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Register`, novoUsuario);
  }
  Login(usuarioLogado: UserRegisterModel): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Login`, usuarioLogado);
  }

}
