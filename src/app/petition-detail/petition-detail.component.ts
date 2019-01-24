import { Component, OnInit } from '@angular/core';
import {AllPollsService} from "../all-polls.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Petition} from "../../class/petition";
 
@Component({
  selector: 'app-petition-detail',
  templateUrl: './petition-detail.component.html',
  styleUrls: ['./petition-detail.component.css']
})
export class PetitionDetailComponent implements OnInit {

  private id: string;
  public poll: Petition;
  constructor(private allPollsService: AllPollsService, private route:ActivatedRoute, private router:Router) { 
    this.id = route.snapshot.params['id'];
  }
  ngOnInit() {
    this.poll = this.allPollsService.getPoll(Number(this.id));
    console.log(this.poll.polls[0].description);
  }

  upVote(id: number) {
    this.allPollsService.upVote(Number(this.id), id);
  }
}
