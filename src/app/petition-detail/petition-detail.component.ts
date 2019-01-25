import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {AllPollsService} from "../all-polls.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Petition} from "../../class/petition";
import * as d3 from "d3";
 
@Component({
  selector: 'app-petition-detail',
  templateUrl: './petition-detail.component.html',
  styleUrls: ['./petition-detail.component.css']
})
export class PetitionDetailComponent implements OnInit {
  
  @ViewChild("svg") canvas : ElementRef;
  private id: string;
  public poll: Petition;
  constructor(private allPollsService: AllPollsService, private route:ActivatedRoute, private router:Router) { 
    this.id = route.snapshot.params['id'];
  }
  ngOnInit() {
    this.poll = this.allPollsService.getPoll(Number(this.id));
    this.drawPie();
  }

  drawPie() {
    var width = 550;
    var height = 350;
    var radius = 300 / 2;
    var svg = d3.select(this.canvas.nativeElement)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", 'translate(' + (width / 2) +
      ',' + (height / 2) + ')');
    
    var colors = ["pink", "green", "blue", "white" , "red"]  
    var votes= [];
    this.poll.polls.forEach((poll, i) => {
      votes[i] = poll.votes;
    })

    var pieGenerator = d3.pie().sort(null);
    var arcData = pieGenerator(votes);

    var arcGenerator = d3.arc()
      .innerRadius(0)
      .outerRadius(100);
    svg
      .selectAll("path")
      .data(arcData)
      .enter()
      .append("path")
      .attr("d", arcGenerator)
      .attr("stroke", "#C00C00")
      .attr("stroke-width", "3px")
      .attr("fill", (d, i) => (colors[i]));

  }

  upVote(id: number) {
    this.allPollsService.upVote(Number(this.id), id);
    this.drawPie();
  }
}
