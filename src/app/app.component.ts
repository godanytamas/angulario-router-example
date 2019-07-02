import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Data, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isAdminPage = false;

  constructor(private router: Router,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route: ActivatedRoute) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap((route: ActivatedRoute) => route.data)
    ).subscribe((data: Data) => {
      this.isAdminPage = (data.isAdmin !== undefined) ? data.isAdmin : false;
    });
  }

}
