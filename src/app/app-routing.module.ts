import { CareersComponent } from './sections/careers/careers.component';
import { BrandsComponent } from './sections/brands/brands.component';
import { ValuesComponent } from './sections/values/values.component';
import { AboutComponent } from './sections/about/about.component';
import { HomeComponent } from './sections/home/home.component';
import { ContactComponent } from './sections/contact/contact.component';
import { MessageComponent } from './sections/message/message.component';
import { BodyComponent } from './layout/body/body.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'home', component: BodyComponent },
  { path: '**', component: BodyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  BodyComponent,
  HomeComponent,
  ContactComponent,
  AboutComponent,
  ValuesComponent,
  BrandsComponent,
  CareersComponent,
  MessageComponent
];
