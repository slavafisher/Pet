import { Component, OnInit, Input } from '@angular/core';
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
  userInfo!: any;
  id!: number;
  status = false;
  constructor(private route: ActivatedRoute, private http: UsersService) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    setTimeout(() => (this.status = true), 1000);

    this.http.getUser(this.id).subscribe((data: any) => {
      this.userInfo = new User(
        data.id,
        data.name,
        data.username,
        data.address.city,
        data.email
      );
    });
    // this.http.getAllData().subscribe((data: any) => {
    //   this.user = data[this.id - 1];
    //   console.log(this.user);
  }
}
