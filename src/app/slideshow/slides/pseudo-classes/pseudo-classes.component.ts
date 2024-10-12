import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pseudo-classes',
  standalone: true,
  templateUrl: './pseudo-classes.component.html',
})
export class PseudoClassesComponent {
  protected buttonExample = signal<string>(`
    &lt;button class="rounded bg-red-600 px-2 py-1 text-2xl italic <span class="font-bold underline">hover:bg-red-500 hover:text-yellow-300</span>">
        Click me
    <&sol;button>`);

  protected people = signal<string[]>(['Sarah', 'Joshua', 'Emily', 'Martin']);

  protected showDancingDog = signal<boolean>(false);

  protected onTemptingButtonClicked() {
    this.showDancingDog.set(true);
  }
}
