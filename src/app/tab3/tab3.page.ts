import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(public photoService: PhotoService) {}

  ngOnInit() {
    // Load saved photos when the Tab3 page is initialized
    this.photoService.loadSaved();
  }
}
