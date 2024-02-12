import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  showImages: boolean = false;

  constructor(public imageService: ImageService) { }

  ngOnInit(): void {
    // this.imageService.loadImages();
  }
  viewImages() {
    this.showImages = this.showImages?false:true;
  }
}
