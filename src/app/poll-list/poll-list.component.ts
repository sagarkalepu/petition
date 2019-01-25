import { Component, OnInit } from '@angular/core';
import {AllPollsService} from "../all-polls.service"
import {Petition} from "../../class/petition";

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {

  public allPolls: Petition[];
  constructor(private allPollsService: AllPollsService) { }

  ngOnInit() {
    this.allPolls = this.allPollsService.getAll();
  }

}
