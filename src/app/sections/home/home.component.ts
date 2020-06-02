import { NavigationComponent } from './../../layout/navigation/navigation.component';
import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @Input() data: any;
  @Input() info: any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  };

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
          'facebook',
          sanitizer.bypassSecurityTrustResourceUrl('../../../assets/socialIcons/facebook.svg'));
      iconRegistry.addSvgIcon(
          'twitter',
          sanitizer.bypassSecurityTrustResourceUrl('../../../assets/socialIcons/twitter.svg'));
      iconRegistry.addSvgIcon(
          'instagram',
          sanitizer.bypassSecurityTrustResourceUrl('../../../assets/socialIcons/instagram.svg'));
      iconRegistry.addSvgIcon(
          'linkedin',
          sanitizer.bypassSecurityTrustResourceUrl('../../../assets/socialIcons/linkedin.svg'));
      iconRegistry.addSvgIcon(
          'rightArrow',
          sanitizer.bypassSecurityTrustResourceUrl('../../../assets/arrowRight.svg'));
    }

  ngOnInit(): void {
  }



}
