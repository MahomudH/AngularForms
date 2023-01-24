import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];

  userModel:User = new User(
    'Mahmoud',
    'Mah1998mod@gmail.com',
    123456789,
    '',
    'morning',
    true
  );
}
