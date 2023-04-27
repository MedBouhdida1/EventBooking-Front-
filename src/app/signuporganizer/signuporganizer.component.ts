import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../Models/User.model';
import { Organizer } from '../Models/Organizer.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signuporganizer',
  templateUrl: './signuporganizer.component.html',
  styleUrls: ['./signuporganizer.component.css']
})
export class SignuporganizerComponent implements OnInit {

  Organizer = new Organizer();


  @ViewChild('myForm') myForm?: NgForm;
  constructor(
    private router: Router,
    private toast: NgToastService,
  ) {

  }

  submit() {
    if (this.myForm?.valid) {
      this.toast.success({
        detail: "Sign up success"
      })
      console.log(this.Organizer)
      this.router.navigate(["/signinorganizer"])
    }
    else {
      this.toast.warning({
        detail: "Fields required"
      })
    }
  }

  ngOnInit(): void {
  }

}
