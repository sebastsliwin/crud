import {
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { of, skipWhile, take } from 'rxjs';

@Component({
  template: '',
})
export abstract class ControlBaseComponent<T>
  implements ControlValueAccessor, OnInit
{
  @Input() label: string;
  @Input() placeholder: string;
  @Input() tooltip: string;
  @Input() appearance: MatFormFieldAppearance = 'outline';

  control = new FormControl();
  private readonly cdRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  constructor(@Optional() @Self() private ngControl: NgControl) {
    if (ngControl != null) {
      ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this._initNgControl();
  }

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: T): void {
    if (this.control && this.control.getRawValue() !== value) {
      this.control.setValue(value, { emitEvent: false });
    }
  }

  onBlur(): void {
    this.onTouched();
    this.control.setValue(this.control.value, { onlySelf: true });
  }

  private _initNgControl(): void {
    if (this.ngControl) {
      of(this.ngControl.control)
        .pipe(
          skipWhile(control => !control),
          take(1)
        )
        .subscribe(control => {
          this.control = <FormControl>control;
          this.cdRef.markForCheck();
        });
    }
  }

  protected onChange: (_: T) => void = (_: T) => {};
  private onTouched: () => void = () => {};
}
