import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NaveBar } from '../../Layout/NavFooter/nave-bar/nave-bar';
import { Footer } from '../../Layout/NavFooter/footer/footer';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NaveBar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RahimSolutions');
  protected readonly showNavFooter = signal(true);

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Hide navbar and footer for dashboard routes
      const isDashboard = event.urlAfterRedirects.startsWith('/dashboard');
      this.showNavFooter.set(!isDashboard);
    });
  }
}
