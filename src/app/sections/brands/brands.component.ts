import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  @Input() data: Array<any>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
