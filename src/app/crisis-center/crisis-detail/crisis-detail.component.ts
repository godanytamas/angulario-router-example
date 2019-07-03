import { DialogService } from './../../dialog.service';
import { CanComponentDeactivate } from './../../can-deactivate.guard';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit, CanComponentDeactivate {

  // crisis$: Observable<Crisis>;
  crisis: Crisis;
  crisisId: number;
  editName: string;

  constructor(private crisisService: CrisisService,
              private route: ActivatedRoute,
              private router: Router,
              private dialogService: DialogService) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { crisis: Crisis }) => {
        this.editName = data.crisis.name;
        this.crisisId = data.crisis.id;
        this.crisis = data.crisis;
      }
    );
  }

  onSave() {
    this.crisis.name = this.editName;
    this.gotoCrisis();
  }

  onCancel() {
    this.gotoCrisis();
  }

  gotoCrisis() {
    this.router.navigate(['../', { id: this.crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }

    return this.dialogService.confirm('Do you want to discard changes?');
  }

}
