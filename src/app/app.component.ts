import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './core/navigation/components/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crud';
}
