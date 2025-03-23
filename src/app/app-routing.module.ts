import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/auth.guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) ,canActivate:[AuthGuardService],
    data:{roles:['ADMIN_ROLES']}
  },
   { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule),canActivate:[AuthGuardService],
    data:{roles:['CLIENT_ROLES','ADMIN_ROLES']}
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
