import { inject, Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, of } from 'rxjs';
import { LocalStorageService } from '../service/local-storage.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

type LoginResponseType = {
  accessToken:string,
  user:User,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl='http://localhost:3000';
  private url = environment.apiUrl;
  private http = inject(HttpClient);
  private localStorageService = inject(LocalStorageService);
  private router=inject(Router)

  
  register(formgroup: any) {
    return this.http.post<any>(`${this.apiUrl}/register`, formgroup);

    throw new Error('Method not implemented.');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
async login(credentials:User){
    try{
      const result = await firstValueFrom(this.http.post<LoginResponseType>(this.url.concat('/login'), credentials))

      const {user} = result;
      this.localStorageService.setItem('user',JSON.stringify(user))

    }catch(e){
      throw e;
    }
  }
}
