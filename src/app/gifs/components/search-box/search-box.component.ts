import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gif-search-box',
  standalone: false,
  template: `
    <h5>Search:</h5>
    <input
      type="text"
      placeholder="Search Gifs..."
      class="form-control"
      (keyup.enter)="searchTag()"
      #txtInputTag
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtInputTag')
  public inputTag!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService) {}

  searchTag() {
    const newTag = this.inputTag.nativeElement.value;

    this.gifService.searchTag(newTag);
    this.inputTag.nativeElement.value = '';
  }
}
