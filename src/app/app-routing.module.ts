import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchhComponent } from './searchh/searchh.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AdminComponent } from './admin/admin.component';
import { SimpleTestComponent } from './simple-test/simple-test.component';
import { AdvancedTestComponent } from './advanced-test/advanced-test.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  
  {path:'home', component:HomeComponent},
  {path:'searchh', component:SearchhComponent},
  {path:'bookings', component:BookingsComponent},
  {path:'simple', component:SimpleTestComponent},
  {path:'admin', component:AdminComponent},
  {path:'advanced', component:AdvancedTestComponent},
  {path:'statistics', component:StatisticsComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'redirectTo', component:SimpleTestComponent},
  {path:'simple', component:SimpleTestComponent},
  { path: '', redirectTo: '/simple', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
