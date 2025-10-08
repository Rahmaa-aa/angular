import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { HomeComponent } from  './layout/home/home.component';
import { ListEventComponent } from  './layout/list-event/list-event.component';
//import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'home',component: HomeComponent },
  {path:'',redirectTo:'home',pathMatch:'full'},
  //{path:'**',component : NotFoundComponent}
  {path:'/events',component: ListEventComponent  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
