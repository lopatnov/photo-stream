import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-thumbnail',
  templateUrl: './photo-thumbnail.component.html',
  styleUrls: ['./photo-thumbnail.component.scss']
})
export class PhotoThumbnailComponent implements OnInit {
  @Input() photoUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
