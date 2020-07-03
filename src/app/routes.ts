import { EventsListComponent } from './Events/Events-list.component';
import { Routes } from '@angular/router';
import { EventDetailsComponent } from './Events/event-details/event-details.component';
import { CreateEventComponent } from './Events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './Events/event-details/event-route-activator.service';
import { EventListResolver } from './Events/events-list-resolver.service';

export const appRoutes: Routes = [
    { path: '404', component: Error404Component},
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
]   