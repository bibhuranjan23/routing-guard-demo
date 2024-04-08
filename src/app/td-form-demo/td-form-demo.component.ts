import { Component } from '@angular/core';

@Component({
  selector: 'app-td-form-demo',
  templateUrl: './td-form-demo.component.html',
  styleUrl: './td-form-demo.component.css'
})
export class TdFormDemoComponent {

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
  xyz(contactForm :any){
    console.log(contactForm);
         console.log(contactForm.value);
   }
}
