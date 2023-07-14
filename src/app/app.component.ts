import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'bws';
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
