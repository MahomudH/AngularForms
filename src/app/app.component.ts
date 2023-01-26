import { Component } from '@angular/core';
import { User } from './user';

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

  validTpoic(value: string) {
    if (value === 'default') this.topicHasError = true;
    else this.topicHasError = false;
  }
}
