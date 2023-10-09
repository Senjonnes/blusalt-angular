import { Component, OnInit } from '@angular/core';
import { Frame } from '../models/frame.model';
import { FRAMES } from '../utils/constant';
import { DomSanitizer } from '@angular/platform-browser';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  frames: Frame[] = FRAMES;

  chartOption: EChartsOption = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false,
    },
    dataset: {
      source: [
        ['', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        ['', 27, 40, 25, 80, 50, 40, 80],
        ['', 25, 22, 20, 15, 30, 50, 10],
      ],
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: {
      left: '6%',
      right: '5%',
    },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
      },
    ],
  };

  options: EChartsOption = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      axisLabel: {
        color: '#ffffff',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#ffffff',
      },
    },
    series: [
      {
        data: [820, 932, 901, 934, 1000],
        type: 'bar',
        barWidth: '15%',
        itemStyle: {
          color: '#ffffff',
          borderRadius: [50, 50, 0, 0],
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
}
