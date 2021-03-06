import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { SocketComponent } from './socket/socket.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'socket', component: SocketComponent },
  { path: 'grid', component: GridComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
