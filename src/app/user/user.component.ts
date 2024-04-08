import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user ={
    "address": {
      "geolocation": {
        "lat": "-37.3159",
        "long": "81.1496"
      },
      "city": "kilcoole",
      "street": "new road",
      "number": 7682,
      "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
      "firstname": "john",
      "lastname": "doe"
    },
   "phone": "1-570-26-7033"
   
  };

  onSubmit(userForm:any){
    console.log(userForm);
    console.log(userForm.value);
    this.user.email = userForm.value.email;
  }
}
