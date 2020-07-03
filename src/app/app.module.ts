import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsApp } from './events-app.component';
import { EventThumbnailComponent } from './Events/Event-thumbnail.component';
import { EventsListComponent } from './Events/Events-list.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './Events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './Events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './Events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './Events/event-details/event-route-activator.service';
import { EventListResolver } from './Events/events-list-resolver.service';

@NgModule({
  declarations: [
    EventsApp,
    EventThumbnailComponent,
    EventsListComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventListResolver,
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [EventsApp]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return false
}
