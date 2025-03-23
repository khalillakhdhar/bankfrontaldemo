import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials={userName:'',password:''};
  message='';
  constructor(private authService:AuthService,private router:Router){}
  onSubmit()
  {
    console.log("authentification",this.credentials);
    this.authService.login(this.credentials).subscribe(
    (response)=>{
      if(!response.token)
      {
        this.message="compte non reconnu!";
        return;
      }
      this.authService.saveToken(response.token);
      this.authService.saveUserRoles(response.roles);
     const roles=this.authService.getUserRoles();
      if(roles.includes('ADMIN_ROLES'))
      {
        this.router.navigate(['/admin']);
      }
      else if(roles.includes('USER_ROLES'))
      {
        this.router.navigate(['/client']);
      }
      else
      {
        this.message="compte non reconnu!"
        this.router.navigate(['/auth']);
      }
    }
    )
  }

}
