import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { CreateeventComponent } from './createevent/createevent.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { BookingconfirmedComponent } from './bookingconfirmed/bookingconfirmed.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    EventsComponent,
    CreateeventComponent,
    EventdetailComponent,
    SigninComponent,
    SignupComponent,
    ContactComponent,
    BookingComponent,
    BookingconfirmedComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
