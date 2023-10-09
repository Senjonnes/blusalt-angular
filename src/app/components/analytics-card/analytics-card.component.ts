import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Frame } from 'src/app/models/frame.model';

@Component({
  selector: 'app-analytics-card',
  templateUrl: './analytics-card.component.html',
  styleUrls: ['./analytics-card.component.scss'],
})
export class AnalyticsCardComponent {
  @Input() frame!: Frame;
  constructor() {}

  ngOnInit(): void {}
}
