import { Component, OnInit } from '@angular/core';

import { Message } from '../../models/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

  public sendMessage($value) {
    return new Message($value);
  }

}
