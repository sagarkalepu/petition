import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {PetitionDetailComponent} from "./petition-detail/petition-detail.component";

const routes: Routes = [
  {path : "home", component: HomeComponent},
  {
    path: "petition/:id",
    component: PetitionDetailComponent
  },
  {path: "", redirectTo: "home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
