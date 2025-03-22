import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService:AuthService,private router:Router) { }
  canActivate(
next: ActivatedRouteSnapshot,
state: RouterStateSnapshot):boolean
  {
    const isAuthenticated=this.authService.getToken();
    const roles=this.authService.getUserRoles();
    const expectedRoles=next.data['roles'];
    if(!isAuthenticated|| (expectedRoles && !roles.some(r=>expectedRoles.includes(r))))
    {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;


  }
}
