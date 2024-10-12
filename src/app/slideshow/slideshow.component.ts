import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { TitleSlideComponent } from './slides/title-slide/title-slide.component';
import { ContentsComponent } from './slides/contents/contents.component';
import { CustomThemeComponent } from './slides/custom-theme/custom-theme.component';
import { AboutMeComponent } from './slides/about-me/about-me.component';
import { PseudoClassesComponent } from './slides/pseudo-classes/pseudo-classes.component';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [
    TitleSlideComponent,
    ContentsComponent,
    CustomThemeComponent,
    AboutMeComponent,
    PseudoClassesComponent,
  ],
  templateUrl: './slideshow.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideshowComponent implements AfterViewInit {
  public ngAfterViewInit() {
    register();
  }
}
