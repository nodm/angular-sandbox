import { HttpClient } from '@angular/common/http';
import { mapTo } from 'rxjs/operators';

export function userFactory(httpClient: HttpClient): () => Promise<void> {
  return () => httpClient.get('https://api.github.com/users/nodm')
    .pipe(
      mapTo(void 0),
    )
    .toPromise();
}
