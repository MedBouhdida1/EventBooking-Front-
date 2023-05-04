import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Organizer } from '../Models/Organizer.model';
import { Event } from '../Models/Event.model';

@Injectable({
  providedIn: 'root'
})
export class APIsService {

  event = "http://localhost:8080/event"
  organizer = "http://localhost:8080/organizer"
  user = "http://localhost:8080/user"

  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: NgToastService,
  ) { }

  registerOrganizer(organizer: Organizer) {
    return this.http.post<any>(this.organizer + "/register", organizer);
  }

  loginOrganizer(organizer: Organizer) {
    return this.http.post<any>(this.organizer + "/login", organizer);
  }

  getOrganizerByEmail(email: string) {
    return this.http.get<Organizer>(this.organizer + "/getbyemail", { params: { email } })
  }
  addEvent(event: Event, id: number) {
    const URL = `${this.event}/${id}`
    return this.http.post<Event>(URL, event)

  }
}
