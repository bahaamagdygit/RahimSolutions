import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaveBar } from '../../Layout/NavFooter/nave-bar/nave-bar';
import { Footer } from '../../Layout/NavFooter/footer/footer';
import { ImgDetails } from "./Profile/img-details/img-details";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NaveBar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RahimSolutions');
}
