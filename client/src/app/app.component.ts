import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/auth/login.component";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LoginComponent]
})
export class AppComponent {
  title = 'angular-auth-app';
  // http = inject(HttpClient);

  // constructor(){
  //   this.http.get('http://localhost:3000/users').subscribe((res)=>{
  //     console.log(res);
  //   })};
}
