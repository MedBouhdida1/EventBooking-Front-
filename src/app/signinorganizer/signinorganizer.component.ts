import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../Models/User.model';
import { Organizer } from '../Models/Organizer.model';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signinorganizer',
  templateUrl: './signinorganizer.component.html',
  styleUrls: ['./signinorganizer.component.css']
})
export class SigninorganizerComponent implements OnInit {

  Organizer = new Organizer()
  @ViewChild('myForm') myForm?: NgForm;
  constructor(
    private toast: NgToastService,
    private router: Router
  ) {

  }


  submit() {
    if (this.myForm!.valid) {
      console.log(this.Organizer)
      this.toast.success({
        detail: "sign in success"
      })
      this.router.navigate(["/home"])

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
