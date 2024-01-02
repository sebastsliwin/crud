import { Component } from '@angular/core';
import { MODULES } from './app.modules';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: MODULES,
  templateUrl: './app.component.html',
})
export class AppComponent {}
