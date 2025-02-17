import { Component } from '@angular/core';

@Component({
  // selector: 'app-button', // Element Selector
  selector: 'button[appButton]', // Attribute Selector
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
