import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
  lng = 'en';
  changeLang(lng: string) {
    this.lng = lng;
  }
}
