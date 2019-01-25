import { Injectable } from '@angular/core';
import {polls} from "../testData/data";
import { Petition } from 'src/class/petition';

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
    return this.polls.filter((poll) => (poll.id === id))[0];
  }
  public upVote(petitionId: number, pollId: number) {
    this.polls.filter((poll) => (poll.id === petitionId))[0].polls.filter((poll) => (poll.id == pollId))[0].votes++;
  }
  
  maxId() {
    var max = 0;
    polls.forEach(element => {
      if(element.id > max){
        max = element.id;
      }
    });
    return max + 1;
  }

  addPoll(petition: Petition) {
    this.polls = [... polls, petition];
  }
}
