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
  selector: 'app-slides',
  standalone: true,
  imports: [TitleSlideComponent, ContentsComponent, CustomThemeComponent],
  templateUrl: './slides.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlidesComponent implements AfterViewInit {
  public ngAfterViewInit() {
    register();
  }
}
