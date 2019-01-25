import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
import { AllPollsService } from '../all-polls.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  createPoll: FormGroup;
  constructor(private allPollsService: AllPollsService) { }
  ngOnInit() {
    this.createPoll = new FormGroup({
      title: new FormControl(null,Validators.required),
      description: new FormControl(null, Validators.required),
      polls: new FormArray([])
    })
  }
  onSubmit() {
    var inputPoll = this.createPoll.value;
    inputPoll.id = this.allPollsService.maxId();
    inputPoll.polls.forEach((poll, i) => {
      poll.id = i;
      poll.votes = 0;
    });
    this.allPollsService.addPoll(inputPoll);
    console.log(this.createPoll.value);
  }

  addPoll() {
    const poll = new FormGroup({
      description: new FormControl(null, Validators.required)
    });
    (<FormArray>this.createPoll.get("polls")).push(poll);
  }
}
