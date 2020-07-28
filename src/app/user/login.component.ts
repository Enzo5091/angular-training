import { Component } from '@angular/core';
import { AuthService } from './auth.sevice';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent{

    public formGroup: FormGroup;
    constructor(
         private authService: AuthService,
         private formBuilder: FormBuilder,
         private router: Router
         ){}
    
    ngOnInit(){
        this.formGroup = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login(form: FormGroup){
        this.authService.loginUser(form.value.userName, form.value.username);
        this.router.navigate(['events']);
    }
    
}