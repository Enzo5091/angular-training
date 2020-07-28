import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { first, last } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class AuthService{
    currentIuser: IUser; 

    loginUser(userName: string, password: string){
        this.currentIuser = {
            id: 1, 
            firstName: 'John',
            lastName: 'Papa',
            userName: userName
        }
    }

    isAuthenticated(){
        return !!this.currentIuser;
    }

    updateCurrentUser(firstName: string, lastName: string){
        this.currentIuser.firstName = firstName;
        this.currentIuser.lastName = lastName;
        this.currentIuser.userName = firstName;
    }
}