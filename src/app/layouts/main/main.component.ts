import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FRAMER, ROOM_NUMBERS, ROUTES } from 'src/app/utils/constant';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() template!: TemplateRef<any>;
  navbarFixed: boolean = false;
  FRAMER: string = FRAMER;
  ROOM_NUMBERS: string[] = ROOM_NUMBERS;
  NAV_CLASS = 'w-full text-gray-300 cursor-pointer items-center mt-5';
  ACTIVE_ANCHOR_CLASS =
    'flex items-center focus:outline-none focus:ring-2 focus:ring-white menu is-active';
  ANCHOR_CLASS =
    'flex items-center focus:outline-none focus:ring-2 focus:ring-white menu';
  ACTIVE_ROOM =
    'flex px-4 py-1 items-center justify-center rounded-2xl text-white bg-[#111111] font-light';
  INACTIVE_ROOM =
    'flex px-4 py-1 items-center justify-center border-[1px] border-[#11111133] rounded-2xl trans-3 hover:border-[#111111]';

  routes = ROUTES;
  guests: number = 4;
  isVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  add() {
    this.guests = this.guests + 1;
  }

  remove() {
    this.guests = this.guests === 0 ? 0 : this.guests - 1;
  }

  showModal(): void {
    if (this.isVisible) {
      this.updateStyle();
    }
    this.isVisible = !this.isVisible;
  }

  handleOk(): void {
    if (this.isVisible) {
      this.updateStyle();
    }
    this.isVisible = false;
  }

  handleCancel(): void {
    this.updateStyle();
    this.isVisible = false;
  }

  updateStyle(): void {
    var element = document.querySelector('.ant-modal-wrap');
    element!.classList.remove('slide-in-from-right');
    element!.classList.add('slide-out-from-right');
  }

  setNavState() {
    this.isVisible = !this.isVisible;
  }
}
