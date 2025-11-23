import { Component } from '@angular/core';
import { GenaricSlider } from "../../../../Layout/slider/genaric-slider/genaric-slider";
import { TestimonialSlider } from "../../../../Layout/slider/testimonial-slider/testimonial-slider";
import { CardsListSection } from "../../cards/cards-list-section/cards-list-section";
import { MinSection } from "../../../../Layout/genaric-card/min-section/min-section";

@Component({
  selector: 'app-home-page',
  imports: [TestimonialSlider, CardsListSection, MinSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
