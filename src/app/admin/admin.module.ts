import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './profile/profile.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProfileComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
