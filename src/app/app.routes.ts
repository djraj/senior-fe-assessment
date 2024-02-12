import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskImagesComponent } from './task-images/task-images.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'task', component: TaskImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
