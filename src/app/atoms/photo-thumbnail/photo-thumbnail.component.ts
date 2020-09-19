import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-thumbnail',
  templateUrl: './photo-thumbnail.component.html',
  styleUrls: ['./photo-thumbnail.component.scss']
})
export class PhotoThumbnailComponent {
  @Input() photoUrl: string;
}
