import { Pipe, PipeTransform } from '@angular/core';
import { District } from '../../models/District.interface';

@Pipe({
  name: 'districtFilter',
  standalone: true
})
export class DistrictFilterPipe implements PipeTransform {

  transform(districts: District[], searchTerm: string): District[] {
    if (!districts || !searchTerm) {
      return districts;
    }

    return districts.filter(district =>
      district.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }


}
