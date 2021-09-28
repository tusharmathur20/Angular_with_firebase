import { ToppersService } from './../Service/toppers.service';
import { UserService } from './../Service/user.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-toppers',
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.css']
})
export class ToppersComponent implements OnInit {

  constructor(private service:UserService,private topperService:ToppersService) { }

  displayedColumns: string[] = ['Name', 'Age', 'Scores'];

  dataNew:any
  Newdata :Array<any>=[]
  final : any


  ngOnInit(): void {
 
  this.getAllToppers()
  }

 
  getToppers(){

    this.service.ReadFunctionality().subscribe((res )=>{
  

     
   this.dataNew=res

  //  if(this.dataNew.filter(this.dataNew.Scores>70)){
  //    console.log(this.dataNew);
     
  //  }

   
  //  console.log(this.dataNew)

      // this.dataNew.Scores=this.final;

      

   
      for (let i =0 ; i< this.dataNew.length ; i++) {
        if (this.dataNew[i].Scores > 70){
          //console.log(this.dataNew[i])
          this.Newdata.push(this.dataNew[i])
         this.topperService.CreateToppers(this.dataNew[i])
        
          
        }
       
      }
      // console.log(this.Newdata);
    
      
      
      
    
  })


}


getAllToppers(){
  this.topperService.getToppers().subscribe(res=>{
    this.final=res;
    console.log(this.final)
  
  })
  console.log(this.final)
}
}

