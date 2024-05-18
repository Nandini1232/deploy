import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchhComponent } from './searchh/searchh.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { TrainsComponent } from './trains/trains.component';
import { TestDurationComponent } from './test-duration/test-duration.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdvancedTestComponent } from './advanced-test/advanced-test.component';
import { TestBoxComponent } from './test-box/test-box.component';
import { SimpleTestComponent } from './simple-test/simple-test.component';
import { TimePipe } from './time.pipe';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchhComponent,
    BookingsComponent,
    AdminComponent,
    TrainsComponent,
    TestDurationComponent,
    StatisticsComponent,
    SideNavComponent,
    ProfileComponent,
    PageNotFoundComponent,
    AdvancedTestComponent,
    TestBoxComponent,
    SimpleTestComponent,
    TimePipe,
    FooterComponent,
    AboutUsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
