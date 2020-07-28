import { Routes } from '@angular/router';
import { Error404Component } from './errors/index';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    EventRouteActivator,
    CreateSessionComponent
  } from './events/index';

export const appRoutes: Routes = [
    { path: '404', component: Error404Component},
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/session/new', component: CreateSessionComponent},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
]   