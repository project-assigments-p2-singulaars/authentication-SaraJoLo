import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';



export const AuthGuard: CanActivateFn = (route, state) => {
  
  const authService= inject(AuthService);
  const router = inject(Router);

  if(localStorage.getItem('token'))
    {
      return true;
    }
  return false;


}
