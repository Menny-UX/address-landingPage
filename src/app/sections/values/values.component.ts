import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {
  @Input()  data: Array<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
