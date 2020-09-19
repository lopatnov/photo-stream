import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { PhotoData } from '../../services/DTO';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnChanges, OnInit {
  @Input() line: number;
  @Input() photos: Array<PhotoData>;
  @Output() thumbnailClick = new EventEmitter<PhotoData>();

  thumbnailWidth: number;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.calculateThumbnailWidth();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.line) {
      this.calculateThumbnailWidth();
    }
  }

  @HostListener('window:resize')
  private calculateThumbnailWidth(): void {
    const line = this.line || 3;
    const clientWidth = this.getClientWidth();
    this.thumbnailWidth = (clientWidth - 33) / line;
  }

  private getClientWidth(): number {
    const el: HTMLElement = this.el.nativeElement;
    return el.querySelector('.col').clientWidth;
  }

}
