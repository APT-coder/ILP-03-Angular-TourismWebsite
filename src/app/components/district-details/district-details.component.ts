import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../../services/fetch-data.service';
import { District } from '../../../models/District.interface';
import { HomeCarouselComponent } from '../home-carousel/home-carousel.component';

@Component({
  selector: 'app-district-details',
  standalone: true,
  imports: [CommonModule, HomeCarouselComponent],
  templateUrl: './district-details.component.html',
  styleUrl: './district-details.component.scss'
})
export class DistrictDetailsComponent {
  districtId: number = 0;
  // district: District = {
  //   id: 0,
  //   image: '',
  //   title: '',
  //   description: '',
  //   long_description: '',
  //   places_to_visit: [],
  //   carousel: []
  // };
  district: any;

  constructor(private route: ActivatedRoute, private fetchDataService: FetchDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.districtId = +params['id'];
      this.getDistrictDetails(this.districtId);
    });
  }

  async getDistrictDetails(id: number) {
    const url = `https://treasure-tangible-rain.glitch.me/districts/${id}`;
    try {
      this.district = await this.fetchDataService.fetchData(url);
    } catch (error) {
      console.error('Error loading district:', error);
    }
  }
}
