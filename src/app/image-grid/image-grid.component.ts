import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Router } from '@angular/router';
import { Image } from '../../services/image.interface';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.css',
})
export class ImageGridComponent implements OnInit {
  images: Image[] = [];
  currentImage: Image = {
    id: 0,
    url: '',
    isTasked: false
  };
  currentPage: number = 1;
  pageSize: number = 12;
  totalItems: number = 0;
  displayImage: boolean = false;

  constructor(private imageService: ImageService, private router: Router) {}

  ngOnInit(): void {
    this.getImages();
  }

  // getImages(): void {
  //   this.imageService.getImages(this.page, this.pageSize).subscribe(images => this.images = images);
  //   this.imageService.getTotalImages().subscribe(totalImages => this.totalImages = totalImages);
  // }

  getImages(): void {
    this.imageService
      .getImages(this.currentPage, this.pageSize)
      .subscribe((images) => {
        this.images = images;
        this.totalItems = this.imageService.getTotalImages();
      });
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getImages();
    }
  }

  nextPage() {
    if (this.currentPage * this.pageSize < this.totalItems) {
      this.currentPage++;
      this.getImages();
    }
  }

  setPage(page: number) {
    this.currentPage = page;
    this.getImages();
  }

  assignToTask(imageID: number): void {
    const image = this.images.find((image) => image.id === imageID);
    if (image) {
      image.isTasked = true;
      localStorage.removeItem("IMAGE");
      localStorage.setItem("IMAGE", JSON.stringify(image));
    }
  }

  viewImage(image: Image) {
    this.currentImage = image;
    this.displayImage = true;
    // window.open(image.url, "_blank");
  }

  exitView() {
    this.displayImage = false;
  }
}
