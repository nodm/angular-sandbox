import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { PAGE_ONE_LINK, PAGE_TWO_LINK, TOOLBAR_HEIGHT } from '../../constants';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
  public readonly pageOneLink = PAGE_ONE_LINK;
  public readonly pageTwoLink = PAGE_TWO_LINK;
  public readonly toolbarHeight = TOOLBAR_HEIGHT;
  public mobileQuery: MediaQueryList;

  private readonly mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
