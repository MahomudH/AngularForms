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

  userModel: User = new User(
    '',
    'Mah1998mod@gmail.com',
    123456789,
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
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel).subscribe({
      next: res=>{
        console.log("Enrollment Successfully"); 
      },
      error: err =>{
        console.log(err);
        
      }
    })
  }
}
