import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../Models/User.model';
import { Organizer } from '../Models/Organizer.model';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signinuser',
  templateUrl: './signinuser.component.html',
  styleUrls: ['./signinuser.component.css']
})
export class SigninuserComponent implements OnInit {

  User = new User()
  Organizer = new Organizer()
  @ViewChild('myForm') myForm?: NgForm;
  constructor(
    private toast: NgToastService,
    private router: Router
  ) {

  }


  submit() {
    console.log("dssssssssssss")
    if (this.myForm!.valid) {
      console.log(this.User)
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
