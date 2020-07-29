import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventThumbnailComponent,
  EventsListComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  EventRouteActivator,
  CreateSessionComponent,
  SessionListComponent,
  CollapsibleWellComponent,
  DurationPipe
} from './events/index';

import { NavbarComponent } from './nav/index';
import { Error404Component } from './errors//index';

import { EventsApp } from './events-app.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.sevice';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventsApp,
    EventThumbnailComponent,
    EventsListComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventListResolver,
    EventRouteActivator,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [EventsApp]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
