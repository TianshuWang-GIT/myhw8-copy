import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ListComponent} from './list/list.component'
import {HomeComponent} from './home/home.component'
import {TvComponent} from './tv/tv.component'
import { MymovieComponent } from './mymovie/mymovie.component'
const routes: Routes = [
   {path:"",component:HomeComponent},
   {path:"mylist",component:ListComponent},
   {path:"watch/tv/:id",component:TvComponent},
   {path:"watch/movie/:id",component:MymovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
