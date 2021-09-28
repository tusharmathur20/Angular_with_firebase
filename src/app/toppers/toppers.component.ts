import { User } from './../user.model';
import { ToppersService } from './../Service/toppers.service';
import { UserService } from './../Service/user.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-toppers',
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.css']
})
export class ToppersComponent implements OnInit {

  constructor(private service:UserService,private topperService:ToppersService) { }

  displayedColumns: string[] = ['Name', 'Age', 'Scores'];


  final :any

  istrue = false
  



  ngOnInit(): void {
 
  this.getToppers()
  }

  
 
  getToppers(){

    this.service.ReadFunctionality().subscribe((res )=>{
  

     
         this.final=res

        

  
       
      })
     
    
      
      
      
    
  }



greaterthan(data:number ,  data1 : number){
  if (data > data1){
    this.istrue = true
    return true;

  }
  else{
    this.istrue = false
    return false
  }

}





    
   


}

