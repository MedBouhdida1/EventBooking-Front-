import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})



export class CreateeventComponent implements OnInit {
  selectedDate: Date = new Date();
  selectedDuration = '';
  selectedTime = '';
  selectCategory = '';

  constructor(config: BsDropdownConfig,
    private toast: NgToastService
  ) {
    config.autoClose = true;

  }


  onSelectedDuration(value: string): void {
    this.selectedDuration = value;
    console.log(this.selectedDuration)
  }
  onSelectedTime(value: string): void {
    this.selectedTime = value;
    console.log(this.selectedTime)
  }
  onSelectedCategory(value: string): void {
    this.selectCategory = value;
    console.log(this.selectCategory)
  }



  submit() {
    console.log(this.selectedDate.toISOString().slice(0, 10))
    this.toast.success({
      detail: "Event has been added succeffuly"
    }
    );
  }

  ngOnInit(): void {
    // this.reloadJsFile();
  }

}
