import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './core/guards/auth.guard';


export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
      },
      {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
      },
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"profile",
        component:ProfileComponent,
        canActivate:[AuthGuard] 
        
      }
];
