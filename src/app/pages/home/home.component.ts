import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeCarouselComponent } from '../../components/home-carousel/home-carousel.component';
import { HomeCardComponent } from '../../components/home-card/home-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, HomeCarouselComponent, HomeCardComponent],
  standalone: true
})
export class HomeComponent {
  
  }
