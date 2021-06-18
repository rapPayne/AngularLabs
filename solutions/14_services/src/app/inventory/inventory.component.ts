import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/shared/login.service';

@Component({
  selector: 'nw-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  user;

  constructor(public _login: LoginService) { }

  ngOnInit() {
    this.user = this._login.user;
  }

}
