import { Route } from '@angular/router';
import { FeatureMovieSelection } from '@cinema/feature-movie-selection';

export const reservationRoutes: Route[] = [
  {path: 'movies', component: FeatureMovieSelection }
];
