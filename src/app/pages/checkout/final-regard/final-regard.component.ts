import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-final-regard',
  templateUrl: './final-regard.component.html',
  styleUrls: ['./final-regard.component.scss']
})
export class FinalRegardComponent {

  constructor(private router: Router) {
    pipe(
      delay(2000),
      tap(() => this.router.navigate(['/products']))
    )

  }
}
