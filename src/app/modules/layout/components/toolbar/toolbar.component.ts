import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @Input() public title: string;
  @Input() public mobile: boolean;

  @Output() public toggleMenu = new EventEmitter<void>();

  public onToggleMenu(): void {
    this.toggleMenu.emit();
  }
}
