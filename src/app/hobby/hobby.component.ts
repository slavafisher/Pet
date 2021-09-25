import { Component, OnInit } from '@angular/core';
import { HobbyService } from '../hobby.service';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css'],
})
export class HobbyComponent implements OnInit {
  constructor(private http: HobbyService) {}

  matches: any = [];
  curMatches = 4;

  ngOnInit() {
    this.http.getData().subscribe((data: any) => (this.matches = data));
  }

  onClick() {
    this.curMatches += 4;
  }
}
