import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { TaskImagesComponent } from './task-images/task-images.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ImageService } from '../services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ImageGridComponent,
    TaskImagesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideHttpClient(), ImageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
