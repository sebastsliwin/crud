import { Component, Input } from '@angular/core';
import { ControlBaseComponent } from '../control-base.component';
import { MODULES } from './input-text.modules';

export type InputType = 'text' | 'email' | 'number' | 'password';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: MODULES,
  templateUrl: './input-text.component.html',
})
export class InputTextComponent extends ControlBaseComponent<string> {
  @Input() type: InputType = 'text';
}
