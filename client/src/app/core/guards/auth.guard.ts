import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';



export const AuthGuard: CanActivateFn = (route, state) => {
  
  const authService= inject(AuthService);
  const router = inject(Router);

 if (authService.isAuth()) {
  return true ;
 }else{
  alert('No permitido')
  const url = router.createUrlTree(['/login']);
  return url;
 }


}
