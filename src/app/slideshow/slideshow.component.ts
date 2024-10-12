import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { TitleSlideComponent } from '../title-slide/title-slide.component';
import { ContentsComponent } from '../contents/contents.component';
import { CustomThemeComponent } from '../custom-theme/custom-theme.component';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [TitleSlideComponent, ContentsComponent, CustomThemeComponent],
  templateUrl: './slideshow.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideshowComponent implements AfterViewInit {
  public ngAfterViewInit() {
    register();
  }
}
