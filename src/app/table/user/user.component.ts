import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user.model';
import { fade } from 'src/app/animations';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [fade],
})
export class UserComponent implements OnInit {
  user!: User;
  id!: number;

  constructor(private route: ActivatedRoute, private http: UsersService) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.http.getUser(this.id).subscribe((data: any) => {
      this.user = new User(
        data.id,
        data.name,
        data.username,
        data.address.city,
        data.email
      );
    });
  }
}
