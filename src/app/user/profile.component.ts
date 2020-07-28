import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators, Form } from '@angular/forms'
import { last } from 'rxjs/operators';
import { AuthService } from './auth.sevice';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em{ float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5  }
  `]
})
export class ProfileComponent implements OnInit{
  
  public firstName: FormControl;
  public lastName: FormControl;
  constructor(private authService: AuthService,
              private router: Router){ }

  profileForm: FormGroup;
  ngOnInit(){
    this.firstName = new FormControl(this.authService.currentIuser?.firstName, [Validators.required, Validators.pattern('[a-zA-z].*')]);
    this.lastName = new FormControl(this.authService.currentIuser?.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues: any){
    if(this.profileForm.valid)
    {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }

  cancel(){
    this.router.navigate(['events']);
  }

  validateLastName(): boolean{
    return this.lastName.valid || this.lastName.untouched;
  }

  
  validateFirstName(): boolean{
    return this.firstName.valid || this.firstName.untouched;
  }
}