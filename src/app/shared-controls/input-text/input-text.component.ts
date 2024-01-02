import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlBaseComponent } from '../control-base.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

export type InputType = 'text' | 'email' | 'number' | 'password';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
  ],
  templateUrl: './input-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent extends ControlBaseComponent<string> {
  @Input() type: InputType = 'text';
}
