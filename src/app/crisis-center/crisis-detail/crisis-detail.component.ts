import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisis$: Observable<Crisis>;
  crisisId: number;

  constructor(private crisisService: CrisisService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) => {
          this.crisisId = +params.get('id');
          return this.crisisService.getCrisis(this.crisisId);
        }
      )
    );
  }

  gotoCrisis() {
    this.router.navigate(['../', { id: this.crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

}
