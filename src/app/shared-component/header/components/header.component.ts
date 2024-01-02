import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SizeStyles } from '../models/header.model';
import { Size } from '../../../shared/models/size.model';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() label: string;
  @Input() icon: string;
  @Input() fontSize = Size.LARGE;

  readonly sizeStyles = SizeStyles;
}
