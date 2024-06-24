import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit {
  @Input() id: any;
  @Input() carouselType: any;

  images: any = [];
  imageSet: any = [];
  url: string = "";
  HideCaption: boolean = false;

  constructor(private fetchDataService: FetchDataService) {}

  ngOnInit() {
    this.getCarousel();
  }

  async getCarousel() {
    if(!this.carouselType) {
      this.url = 'https://treasure-tangible-rain.glitch.me/carousel';
      try {
        this.images = await this.fetchDataService.fetchData(this.url);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    } else {
      this.url = `https://treasure-tangible-rain.glitch.me/districts/${this.id}`;
      try {
        this.HideCaption = true;
        this.imageSet = await this.fetchDataService.fetchData(this.url);
        this.images = this.imageSet.places_to_visit;
      } catch (error) {
        console.error('Error loading images:', error);
      }
    }
  }
}
