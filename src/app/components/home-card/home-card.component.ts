import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { Router } from '@angular/router';
import { District } from '../../../models/District.interface';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss'
})
export class HomeCardComponent {
  cards: District[] = [];

  constructor(private fetchDataService: FetchDataService, private router: Router) {
    this.getCardDetails();
  }
 
  async getCardDetails() {
    const url = 'https://treasure-tangible-rain.glitch.me/districts';
    try {
      this.cards = await this.fetchDataService.fetchData(url);
    } catch (error) {
      console.error('Error loading cards:', error);
    }
  }

  viewDistrictDetails(id: number) {
    this.router.navigate(['/district', id]);
  }
}
