import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [LoaderComponent, MatCardModule],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() isLoading: boolean;
}
