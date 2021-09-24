import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user.model';
import { fade } from 'src/app/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [fade],
})
export class UserComponent implements OnInit {
  user!: User;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      username: this.route.snapshot.params['username'],
      adress: this.route.snapshot.params['adress'],
      email: this.route.snapshot.params['email'],
    };
  }
}
