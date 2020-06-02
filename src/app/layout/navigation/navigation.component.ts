import { MediaObserver } from '@angular/flex-layout';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  selectedIndexChange: number;
  navLinks: Array<{path: string, label: string}> = [
  {
    path: 'home',
    label: 'home'
  },
  {
    path: 'about',
    label: 'aboutus'
  },
  {
    path: 'values',
    label: 'values'
  },
  {
    path: 'message',
    label: 'message'
  },
  {
    path: 'brands',
    label: 'brands'
  },
  {
    path: 'career',
    label: 'career'
  },
  {
    path: 'contact',
    label: 'contactus'
  },
];
  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(elementId): void {
    console.log(elementId);
    document.getElementById(`${elementId}`).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

}
