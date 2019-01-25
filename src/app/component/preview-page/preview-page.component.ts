import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class PreviewPageComponent implements OnInit {

  constructor(public modal:NgbModal) { }

  ngOnInit() {
  }
  openLg(content) {
    this.modal.open(content, { size: 'lg' });
  }

}
