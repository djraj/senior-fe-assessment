import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, defaultIfEmpty, map } from 'rxjs';
import { Image } from './image.interface';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imageURL = 'sfe-images/image_paths.txt';
  totalImages = 0;

  constructor(private http: HttpClient) {}

  getImages(page: number, pageSize: number): Observable<Image[]> {
    return this.http.get(this.imageURL, { responseType: 'text' })
      .pipe(
        map(data => {
          const images: Image[] = data
            .split('\n')
            .slice((page - 1) * pageSize, page * pageSize)
            .map((image, index) => ({ id: index + 1, url: image.trim(), isTasked: false }));
          return images.filter(image => image.url.length > 0);
        }),
        defaultIfEmpty([]),
        map(images => images.filter(image => image.url.length > 0))
      );
  }

  getTotalImages(): number {
    this.http.get(this.imageURL, { responseType: 'text' })
      .pipe(
        map(data => {
          const lines = data.split('\n');
          return lines.length;
        })
      )
      .subscribe(total => {
        this.totalImages = total;
      });
    return this.totalImages;
  }

}