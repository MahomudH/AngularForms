import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validators';
import { PasswordValidator } from './shared/password.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  registraionForm: FormGroup;

  get username() {
    return this.registraionForm.get('username');
  }

  get email() {
    return this.registraionForm.get('email');
  }

  get alternateEmails() {
    return this.registraionForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmails() {
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registraionForm = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            forbiddenNameValidator(/password/),
          ],
        ],
        email: [],
        subscribe: [false],
        password: [],
        confirmPassword: [],
        address: this.fb.group({
          city: [],
          state: [],
          postalCode: [],
        }),
        alternateEmails: this.fb.array([]),
      },
      { validator: PasswordValidator }
    );

    this.registraionForm
      .get('subscribe')
      ?.valueChanges.subscribe((checkedValue) => {
        const email = this.registraionForm.get('email');
        if (checkedValue) {
          email?.setValidators(Validators.required);
        } else {
          email?.clearValidators();
        }
        email?.updateValueAndValidity();
      });
  }

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
