import { WinnerService } from './../Service/winner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
winnerList:any
  constructor(private service:WinnerService) { }
  displayedColumns: string[] = ['Name', 'Age', 'Scores'];
  ngOnInit(): void {
    this.getWinners();
  }

  getWinners(){
    this.service.getAllWinners().subscribe(res=>{
      this.winnerList=res;
      // console.log(res)
    })
    
  }

}
