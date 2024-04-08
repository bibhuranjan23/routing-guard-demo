import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { OldauthGuard } from './oldauth.guard';
const routes: Routes = [
     {path:'',component:LoginComponent},
     {path:'home',component:HomeComponent},
     {path:'contact',component:ContactComponent},
     {path:'product',component:ProductComponent,canActivate:[authGuard]},
     {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
