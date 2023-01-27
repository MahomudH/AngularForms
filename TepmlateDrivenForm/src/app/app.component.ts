import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMeg = '';

  userModel: User = new User(
    'mahmoud',
    'Mah1998mod@gmail.com',
    1234567890,
    'default',
    'morning',
    true
  );

  constructor(private _enrollmentService: EnrollmentService) {}

  validTpoic(value: string) {
    if (value === 'default') this.topicHasError = true;
    else this.topicHasError = false;
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel).subscribe({
      next: (res) => {
        console.log(res);
        console.log('Enrollment Successfully');
      },
      error:err=>{
       this.errorMeg = err.statusText;
      }  
    });
  }
}
