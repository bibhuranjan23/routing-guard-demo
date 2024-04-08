import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   token :any;
   constructor(private auth:AuthService,private router:Router){}
   login(userName:any,password:any){
    
      this.auth.loginApi(userName,password).subscribe(
         (data)=>{
            this.token = data;
         }
      );
      if(this.token!='')
      { 
          this.router.navigateByUrl("/home");
      }
   }
}
