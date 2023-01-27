import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  registraionForm = new FormGroup({
    usernmae: new FormControl('Mahmoud'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl(''),
    }),
  });

  loadAPIData(){
    this.registraionForm.patchValue({
      usernmae:'Ahmed',
      password:'123456',
      confirmPassword:'123456',
      address:{
        postalCode:3210546
      }
    });

    this.registraionForm.setValue({
      usernmae:'Ahmed',
      password:'123456',
      confirmPassword:'123456',
      address:{
        city:'Gaze',
        state:'palestine',
        postalCode:3210546
      }
    });
  }
}
