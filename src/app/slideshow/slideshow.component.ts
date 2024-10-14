import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { TitleSlideComponent } from './slides/title-slide/title-slide.component';
import { AboutMeComponent } from './slides/about-me/about-me.component';
import { PseudoClassesComponent } from './slides/pseudo-classes/pseudo-classes.component';
import { AboutTailwindComponent } from './slides/about-tailwind/about-tailwind.component';
import { CreditsComponent } from './slides/credits/credits.component';
import { TailwindBasicsComponent } from './slides/tailwind-basics/tailwind-basics.component';
import { TopTipsComponent } from './slides/top-tips/top-tips.component';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [
    TitleSlideComponent,
    AboutMeComponent,
    PseudoClassesComponent,
    AboutTailwindComponent,
    CreditsComponent,
    TailwindBasicsComponent,
    TopTipsComponent,
  ],
  templateUrl: './slideshow.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideshowComponent implements AfterViewInit {
  public ngAfterViewInit() {
    register();
  }
}
