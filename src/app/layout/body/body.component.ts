import { Component, OnInit } from '@angular/core';
import { APIService } from '../../api.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})


export class BodyComponent implements OnInit {
  AData: any;
  options = {
    autoHide: false,
    forceVisible: 'y',
    direction: 'ltr',
    classNames: {
      scrollbar: 'scrollbar-custom',
      track: 'track-custom'
    }
  };

  constructor(private DataService: APIService ) { }

  ngOnInit(): void {
    this.DataService.getData().subscribe(result =>
      this.AData = result.data
    );
  }

}
