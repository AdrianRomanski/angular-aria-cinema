import { Route } from '@angular/router';
import { reservationRoutes } from '@cinema/reservation';

export const appRoutes: Route[] = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  ...reservationRoutes
];
