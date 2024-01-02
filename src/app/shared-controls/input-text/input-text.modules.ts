import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ControlErrorComponent } from '../control-error.component';

export const MODULES = [
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatTooltipModule,
  ControlErrorComponent,
];
