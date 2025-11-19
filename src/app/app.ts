import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaveBar } from '../../Layout/NavFooter/nave-bar/nave-bar';
import { GenaricSlider } from '../../Layout/slider/genaric-slider/genaric-slider';
import { TestimonialSlider } from '../../Layout/slider/testimonial-slider/testimonial-slider';
import { CardsListSection } from './cards/cards-list-section/cards-list-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NaveBar, GenaricSlider, TestimonialSlider,CardsListSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RahimSolutions');
}
