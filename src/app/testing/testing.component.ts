import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import { RouterOutlet} from "@angular/router";
import { FileUploadModule } from 'primeng/fileupload';
@Component({
  selector: 'app-user',
  template: `
    @if (isLoggedIn) {
        <h1> Username: {{ username }}</h1>
    }
    @for (user of users; track user.id) {
        <p>{{ user.name }}</p>
    }
    <img alt="photo" [src]="imageURL">
    <p>The user's name is {{occupation}}</p>
    <button class="btn" (click)="onClick()">Click</button>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img src="/assets/logo.svg" alt="Angular logo" />
      </li>
      <li>
        Dynamic Image:

        <div class="image-container">
          <img ngSrc="www.example.com/image.png" height="600" width="800" priority />
        </div>
      </li>
    </ul>

  `,
  standalone: true,
  imports: [NgOptimizedImage],
})

export class UserComponent {
  username = 'youngTech';
  isLoggedIn = false;
  imageURL= 'https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png';
  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 4, name: 'Poornima'}];
  count = 0;

  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';

  @Input() occupation = '';
  @Output() incrementCountEvent = new EventEmitter<number>();

  onClick() {
    this.count++;
    console.log(this.count)
    this.incrementCountEvent.emit(this.count);
  }
}

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [RouterOutlet, UserComponent, FileUploadModule],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {

  title = 'test';
  city = 'San Francisco';
  message = '';
  occupation = 'Occupation';

  items = new Array();
  itemsCount = 0;

  addItem(item: number) {
    this.items.push(item);
    this.itemsCount = item;
  }

  greet() {
    console.log('Hello, there 👋');
  }

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  onUpload(event: any) {

  }
}
