import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  isOpen = false;

  constructor(
    private viewPortScroller: ViewportScroller,
    private scroller: ViewportScroller
  ) {}
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  goDown1() {
    this.scroller.scrollToAnchor('contactUs');
  }
  goDown(target: string) {
    //this.scroller.scrollToAnchor("targetGreen");
    document.getElementById(target).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
