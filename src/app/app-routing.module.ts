import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { CreateeventComponent } from './createevent/createevent.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { BookingconfirmedComponent } from './bookingconfirmed/bookingconfirmed.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { YoureventsComponent } from './yourevents/yourevents.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'createevent', component: CreateeventComponent },
  { path: 'eventdetail', component: EventdetailComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'bookingconfirmed', component: BookingconfirmedComponent },
  { path: 'yourevents', component: YoureventsComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
