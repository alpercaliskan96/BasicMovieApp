import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes= [
  { path:'movies', component: MoviesComponent } // http://localhost:4200/movies
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
