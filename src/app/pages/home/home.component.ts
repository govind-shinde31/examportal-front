import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  features = [
    { title: 'Feature 1', description: 'Learn more about Feature 1.' },
    { title: 'Feature 2', description: 'Discover the benefits of Feature 2.' },
    { title: 'Feature 3', description: 'Explore what Feature 3 offers.' },
  ];
}
