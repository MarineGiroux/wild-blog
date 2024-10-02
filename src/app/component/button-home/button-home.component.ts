import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button-home.component.html',
  styleUrl: './button-home.component.scss'
})
export class ButtonHomeComponent {

 @Input() messageButtonHome: string = 'Retour à la page d\'accueil';
}
