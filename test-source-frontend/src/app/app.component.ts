import { Component } from '@angular/core';
import { FarmerSearchCarService } from './farmer-search-card/farmer-search-card.service';
import { Farmer } from './models/farmer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-source-frontend';

  farmers: Farmer[] = [];

  constructor(private farmerSearchService: FarmerSearchCarService) {

  }


  loadFarmers(fms:Farmer[]){
    this.farmers = fms;
  }
}
