import { Component, Input, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.scss']
})
export class ViewModalComponent implements OnInit {
  @Input() modalId: string = 'viewModal';
  item: any;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(item: any): void {
    let imgModal = document.querySelector(`#${this.modalId}`);
    let modalRef = Modal.getOrCreateInstance(imgModal!);
    this.item = item;
    modalRef.toggle();

  }

  getHighResImgUrl(url?: string): string {
    if (url) return url.replace('m.jpg', 'b.jpg');
    else return '';
  }

  getAuthProfileUrl(authorId: string): string {
    return `https://www.flickr.com/people/${authorId}/`;
  }

  getAuthorName(authorStr: string): string {
    let start = authorStr.indexOf('\"');
    let end = authorStr.indexOf('\"', start + 1);
    return authorStr.substring(start + 1, end);
  }

  splitTags(tagStr: string): string[] {
    return tagStr.split(' ');
  }
}
