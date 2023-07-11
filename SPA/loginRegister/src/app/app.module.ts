import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/services/auth-service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/services/guard/auth-guard';
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { ClienteAddComponent } from './clientes/cliente-add/cliente-add.component';
import { ClienteEditComponent } from './clientes/cliente-edit/cliente-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ClientesComponent,
    ClienteAddComponent,
    ClienteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ], 
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
