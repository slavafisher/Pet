import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { fade } from '../animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [fade],
})
export class TableComponent implements OnInit {
  users: User[] = [];
  data = '';
  start = 0;
  clicked = false;

  constructor(
    private httpService: UsersService,
    public router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.httpService
      .getData(this.start)
      .subscribe((data: any) => (this.users = data));
  }

  onClick() {
    this.clicked = !this.clicked;
  }

  public track(index: number, user: User) {
    return user.name;
  }
  @HostListener('document:scroll')
  onScroll() {
    if (this.start === 0) {
      this.start += 5;

      this.httpService
        .getData(this.start)
        .subscribe((data: any) => (this.users = this.users.concat(data)));
    }
  }
}
