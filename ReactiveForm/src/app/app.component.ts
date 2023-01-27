import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  registraionForm = this.fb.group({
    usernmae: ['Mahmoud'],
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
      usernmae: 'Ahmed',
      password: '123456',
      confirmPassword: '123456',
      address: {
        postalCode: 3210546,
      },
    });

    // this.registraionForm.setValue({
    //   usernmae: 'Ahmed',
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
