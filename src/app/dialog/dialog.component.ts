import { UserService } from './../Service/user.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatDialog } from '@angular/material/dialog';
import { UsersComponent } from './../users/users.component';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
    @Input()   data:any     
    incomingid : any
newdata:any

  constructor(public dialog:MatDialog,private service:UserService) { }

  ngOnInit(): void {
  //console.log(this.data)
  }
addWinnersOriginal (data:any){
  console.log(this.incomingid)
  this.service.ReadSingle(this.incomingid).subscribe(res=>{
this.newdata=res;
// console.log(res);
console.log(this.newdata);

this.service.CreateWinner(this.newdata);

  }
  
  )
  
}
// addtoWinners(){
// this.service.CreateWinner(this.newdata.value)
// this.dialog.closeAll();
// }

addWinners(data: any){
  console.log(data.id)
  this.incomingid = data.id


}

}
