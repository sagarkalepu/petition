import { Injectable } from '@angular/core';
import {polls} from "../testData/data";

@Injectable({
  providedIn: 'root'
})
export class AllPollsService {
  private polls = polls;

  constructor() {

  }

  public getAll() {
    return this.polls;
  }
  
  public getPoll(id: number){
    console.log(this.polls.filter((poll) => (poll.id === id))[0]);
    return this.polls.filter((poll) => (poll.id === id))[0];
  }

  public upVote(petitionId: number, pollId: number) {
    this.polls.filter((poll) => (poll.id === petitionId))[0].polls.filter((poll) => (poll.id == pollId))[0].votes++;
  }
}
