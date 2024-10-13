import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface hero {
  name: string;
  alterEgo: string;
  location: string;
  mainPower: string;
}

@Component({
  selector: 'app-tailwind-basics',
  templateUrl: './tailwind-basics.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class TailwindBasicsComponent {
  protected showTailwindStyles = signal<boolean>(false);

  protected heroes = signal<hero[]>([
    {
      name: 'Captain America',
      alterEgo: 'Steve Rodgers',
      location: 'Washington DC?',
      mainPower: 'A good heart',
    },
    {
      name: 'Thor',
      alterEgo: 'N/A',
      location: 'Asgard',
      mainPower: 'Thunderbolt & Ligthning*',
    },
    {
      name: 'Buffy the vampire slayer',
      alterEgo: 'Buffy Summers',
      location: 'California',
      mainPower: 'Super stength',
    },
    {
      name: 'Spiderman (Toby Maguire)',
      alterEgo: 'Peter Parker',
      location: 'New York',
      mainPower: 'Webs',
    },
  ]);

  protected checkboxToggled() {
    const currentState = this.showTailwindStyles();
    this.showTailwindStyles.set(!currentState);
  }
}
