import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.use(environment.defaultLocale);
  }
}
