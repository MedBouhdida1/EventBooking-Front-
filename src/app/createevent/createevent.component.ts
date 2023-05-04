import { Component, OnInit, ViewChild } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Organizer } from '../Models/Organizer.model';
import { Venue } from '../Models/Venue.model';
import { Event } from '../Models/Event.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { APIsService } from '../Services/apis.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})



export class CreateeventComponent implements OnInit {
  selectedDate: Date = new Date();

  organizer = new Organizer();
  venue = new Venue();
  event = new Event()
  helper = new JwtHelperService()
  @ViewChild('myForm') myForm?: NgForm;

  constructor(
    private toast: NgToastService,
    private router: Router,
    private service: APIsService
  ) {


  }


  onSelectedDuration(value: string): void {
    this.event.duration = value;
    console.log(this.event.duration)
  }
  onSelectedTime(value: string): void {
    this.event.time = value;
    console.log(this.event.time)
  }
  onSelectedCategory(value: string): void {
    this.event.category = value;
    console.log(this.event.category)
  }

  // checkProperties(obj: any) {
  //   for (var key in obj) {
  //     if (obj[key] == null || obj[key] == '') {
  //       if (key == "id" || key == "organizer" || key == "venue" || key == "users" || key == "event" || key == "banner") {
  //         continue;
  //       }
  //       return false;
  //     }
  //   }
  //   return true;
  // }


  submit() {
    console.log(this.selectedDate)
    this.event.date = this.selectedDate.toISOString().slice(0, 10)

    // if (this.checkProperties(this.event) && this.checkProperties(this.venue)) {

    //   console.log(this.event, this.venue)
    //   this.toast.success({
    //     detail: "Event has been added succeffuly"
    //   }
    //   );
    // }
    // else {
    //   this.toast.warning({
    //     detail: "Fields required"
    //   })
    // }
    if (this.myForm!.valid) {
      this.service.addEvent(this.event, this.organizer.id!).subscribe(res => {
        console.log(res)
        this.toast.success({
          detail: "Event has been created succeffuly"
        })
        this.router.navigate(["/yourevents"])

      }, err => {
        console.log(err)
      })


      console.log(this.event, this.venue)
    } else {
      this.toast.warning({
        detail: "Fields required"
      })
    }


  }

  ngOnInit(): void {
    // this.reloadJsFile();
    let token = localStorage.getItem("token");
    if (token != null) {
      let decodetoken = this.helper.decodeToken(token)
      this.organizer = decodetoken.data
    }
  }

}
