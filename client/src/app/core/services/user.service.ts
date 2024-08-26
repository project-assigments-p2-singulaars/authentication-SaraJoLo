import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiUrl
  private http = inject(HttpClient);
  constructor() { }
  async getUserById(id:string){

    const result = await firstValueFrom(this.http.get<User>(this.url.concat('/users/',id)));

    const user = {
      email:result.email,
      id:result.id,
    }


    return user;
  }
}
