import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-theme',
  standalone: true,
  imports: [],
  templateUrl: './custom-theme.component.html',
})
export class CustomThemeComponent {
  java_code = `
  public class Example {
    public static void <span class="text-pink-500">main</span>(String[] args) {
        System.out.println("Hello World");
    }
  }
 `;
}
