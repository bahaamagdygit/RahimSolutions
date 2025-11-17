import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaveBar } from '../../Layout/NavFooter/nave-bar/nave-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NaveBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RahimSolutions');
}
