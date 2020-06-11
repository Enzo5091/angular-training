import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsApp } from './events-app.component';
import { EventThumbnailComponent } from './Events/Event-thumbnail.component';
import { EventsListComponent } from './Events/Events-list.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './Events/shared/event.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  declarations: [
    EventsApp,
    EventThumbnailComponent,
    EventsListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [EventsApp]
})
export class AppModule { }
