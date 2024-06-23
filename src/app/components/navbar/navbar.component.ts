import { Component } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  images: any = [];

  constructor(private fetchDataService: FetchDataService) {
    this.getCarousel();
  }
 
  async getCarousel() {
    const url = 'https://treasure-tangible-rain.glitch.me/logo';
    try {
      this.images = await this.fetchDataService.fetchData(url);
    } catch (error) {
      console.error('Error loading images:', error);
    }
  }
}
