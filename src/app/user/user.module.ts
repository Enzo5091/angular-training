import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    ProfileComponent,
    LoginComponent
} from './index';
import { userRoutes } from './user.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations:[
        ProfileComponent,
        LoginComponent
    ],
    providers: []
})

export class UserModule{

}