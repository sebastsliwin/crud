import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injector,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field';
import { distinctUntilChanged, Observable, of } from 'rxjs';
import { FormControlStatus } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ValidationErrors } from '../shared/models/validation-errors';

@Component({
  selector: '[matErrorMessages]',
  standalone: true,
  imports: [AsyncPipe],
  template: '{{ error$ | async}}',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorComponent implements AfterViewInit {
  control: MatFormFieldControl<unknown>;
  error$: Observable<string | null> = of(null);

  constructor(
    private injector: Injector,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this._setControl();
  }

  private _updateErrors = (status: FormControlStatus): string | null => {
    if (status === 'VALID' || !this.control.ngControl?.errors) {
      return null;
    }

    const errorKey =
      this.control.ngControl && Object.keys(this.control.ngControl.errors)[0];

    if (!(errorKey in ValidationErrors)) {
      throw new Error(`No validation for key: ${errorKey}`);
    }

    return ValidationErrors[errorKey];
  };

  private _setControl(): void {
    const field = this.injector.get(MatFormField);
    this.control = field._control;

    if (
      !this.control ||
      !this.control.ngControl ||
      !this.control.ngControl.statusChanges
    ) {
      return;
    }

    this.error$ = this.control.ngControl.statusChanges.pipe(
      distinctUntilChanged(),
      map(this._updateErrors)
    );
    this.cdRef.markForCheck();
  }
}
