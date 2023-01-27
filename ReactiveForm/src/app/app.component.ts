import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  registraionForm = new FormGroup({
    usernmae : new FormControl('Mahmoud'),
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
  
  });
}
