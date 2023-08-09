import { Component } from '@angular/core';

@Component({
  selector: 'app-our-spaces-section',
  templateUrl: './our-spaces-section.component.html',
  styleUrls: ['./our-spaces-section.component.css'],
})
export class OurSpacesSectionComponent {
  showBedroom = true;
  showEventSpace = false;
  showRestaurant = false;

  imagesList: string[] = [];
  constructor() {
    this.fillImageslist();
  }
  fillImageslist() {
    if (this.showBedroom) {
      this.imagesList = [
        '../../assets/places/bedroom1.png',
        '../../assets/places/bedroom2.png',
        '../../assets/places/bedroom3.png',
      ];
    } else if (this.showEventSpace) {
      this.imagesList = [
        '../../assets/places/event1.png',
        '../../assets/places/event2.png',
        '../../assets/places/event3.png',
      ];
    } else {
      this.imagesList = [
        '../../assets/places/rest1.png',
        '../../assets/places/rest2.png',
        '../../assets/places/rest3.png',
      ];
    }
  }

  showBedroomImages() {
    this.showBedroom = true;
    this.showEventSpace = false;
    this.showRestaurant = false;
    this.fillImageslist();
  }
  showEventImages() {
    this.showBedroom = false;
    this.showEventSpace = true;
    this.showRestaurant = false;
    this.fillImageslist();
  }
  showRestaurantImages() {
    this.showBedroom = false;
    this.showEventSpace = false;
    this.showRestaurant = true;
    this.fillImageslist();
  }
  handleRight() {
    if (this.showBedroom) {
      this.showEventSpace = true;
      this.showBedroom = false;
      this.fillImageslist();
    } else if (this.showEventSpace) {
      this.showRestaurant = true;
      this.showEventSpace = false;
      this.fillImageslist();
    } else {
      return;
    }
  }
  handleLeft() {
    if (this.showRestaurant) {
      this.showEventSpace = true;
      this.showRestaurant = false;
      this.fillImageslist();
    } else if (this.showEventSpace) {
      this.showBedroom = true;
      this.showEventSpace = false;
      this.fillImageslist();
    } else {
      return;
    }
  }
}
