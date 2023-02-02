import { Component } from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  viewModes = [
    {title: 'Light', value: 'light', selected: true},
    {title: 'Yellow', value: 'yellow', selected: false},
    {title: 'Pink', value: 'pink', selected: false},
    {title: 'Green', value: 'green', selected: false},
    {title: 'Dark', value: 'dark', selected: false},
  ]
  selectedViewMode = this.viewModes[0].value;
  isDarkMode: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches;

  constructor() {}
  selectViewMode($event: Event) {
    console.log('$event.checked', ($event.currentTarget as HTMLSelectElement).value)
  }
}
