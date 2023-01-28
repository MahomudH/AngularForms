import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  get username(){
    return this.registraionForm.get('username');
  }

  constructor(private fb: FormBuilder) {}

  registraionForm = this.fb.group({
    username: ['',[Validators.required,Validators.minLength(3)]],
    password: [],
    confirmPassword: [],
    address: this.fb.group({
      city: [],
      state: [],
      postalCode: [],
    }),
  });

  
  loadAPIData() {
    this.registraionForm.patchValue({
      username: 'Ahmed',
      password: '123456',
      confirmPassword: '123456',
      address: {
        postalCode: 3210546,
      },
    });

    // this.registraionForm.setValue({
    //   username: 'Ahmed',
    //   password: '123456',
    //   confirmPassword: '123456',
    //   address: {
    //     city: 'Gaze',
    //     state: 'palestine',
    //     postalCode: 3210546,
    //   },
    // });
  }
}
