import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() isLoading: boolean;
}
