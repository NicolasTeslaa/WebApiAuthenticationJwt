import { Component, ElementRef } from '@angular/core';
import { UserRegisterModel } from 'src/models/userRegisterModel';
import { AuthService } from 'src/services/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  register = new UserRegisterModel()
  mostrarMenu = false;
  constructor(private el: ElementRef, private authService: AuthService) {
    this.mostraMenu();
  }
  title = 'LoginRegistro';
  toogleMenu() {
    let myTag = this.el.nativeElement.querySelector("#sidebarToggle");
    myTag.classList.toggle('sidenav-toggled');
    document.body.classList.toggle('sidenav-toggled');
  }

  mostraMenu() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar)
  }
  reload() {
    localStorage.removeItem('jwtToken')
  }
}
