import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit {

  homeWorkNo = 'HW4 - Part2';
  inputString = 'Angular is awesome';
  delimiterString = '#';

  constructor() { }

  ngOnInit(): void {
  }
}
