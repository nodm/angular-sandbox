import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTwoComponent {
}
