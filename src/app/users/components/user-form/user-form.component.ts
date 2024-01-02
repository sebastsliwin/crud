import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { User } from '../../models/users.model';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent {
  readonly form = this._initForm();

  @Input() set details(user: User | null) {
    if (!user) {
      return;
    }

    this.form.patchValue(user);
  }
  @Output() emitSave = new EventEmitter<User>();

  constructor(private toastr: ToastrService) {}

  save(): void {
    if (this.form.invalid) {
      this.toastr.error('Formularz zawiera błędy');
      return;
    }

    this.emitSave.emit(this.form.getRawValue());
  }

  private _initForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      age: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^[0-9]+$/)],
      }),
    });
  }
}
