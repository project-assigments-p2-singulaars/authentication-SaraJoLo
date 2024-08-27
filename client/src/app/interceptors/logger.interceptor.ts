import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import {  tap } from 'rxjs';
import { LocalStorageService } from '../core/service/local-storage.service';
import { inject } from '@angular/core';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService)
  
  
  return next(req).pipe(
    tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        localStorage.setItem('token', event.body.accessToken);
      }
      return event;
    }))
};


  // console.log(`Request is on its way to ${req.url}`);


  // const authReq = req.clone({
  //   headers: req.headers.set('Authorization','Bearer the token'),
  // });
  // return next(authReq);

