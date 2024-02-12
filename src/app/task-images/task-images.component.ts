import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Image } from '../../services/image.interface';

@Component({
  selector: 'app-task-images',
  templateUrl: './task-images.component.html',
  styleUrl: './task-images.component.css'
})
export class TaskImagesComponent implements OnInit{
  image: Image = {
    id: 0,
    url: '',
    isTasked: false
  }

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    const taskedImage = localStorage.getItem("IMAGE");
    this.image = JSON.parse(taskedImage);
  }
}
