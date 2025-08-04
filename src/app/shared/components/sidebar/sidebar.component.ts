import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  public tagHistoryList: string[] = [];

  constructor(private gifService: GifsService) {}

  get tags() {
    return this.gifService.tagsHistory;
  }

  onClickSearchItem(tag: string): void {
    this.gifService.searchTag(tag)
  }
}
