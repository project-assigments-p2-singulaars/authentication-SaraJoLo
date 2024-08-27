import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})


export class ProfileComponent{

  @Input() id!:string;
  private userService = inject(UserService);
  private router=inject(Router)
  user = inject(UserService);

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
userName(){
this.user.getUserById('user')
return(this.user)
}
}
