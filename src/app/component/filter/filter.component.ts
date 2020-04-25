import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnChanges {
  checked: boolean[] = [];
  @Input() categories: string[];
  @Input() selectedGroup: string;
  @Output() filterCategory = new EventEmitter<string>();
  @Output() allCategoriesClicked = new EventEmitter<any>();
  activeCategories = new Array<boolean>();
  activeAllCategories: boolean = true;
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.activeCategories.length; i++) {
      this.activeCategories[i] = false;
    }

    
  }

  ngOnChanges() {
    for (let i = 0; i < this.activeCategories.length; i++) {
      this.activeCategories[i] = false;
      this.activeAllCategories = true;
    }
  }

  filterCategories(category, index) {
    this.filterCategory.emit(category);
    for (let i = 0; i < this.activeCategories.length; i++)
      this.activeCategories[i] = false;
    this.activeAllCategories = false;
    this.activeCategories[index] = true;
  }

  onAllCategoriesClick() {
    this.allCategoriesClicked.emit();
    for (let i = 0; i < this.activeCategories.length; i++)
      this.activeCategories[i] = false;
    this.activeAllCategories = true;
  }

}
