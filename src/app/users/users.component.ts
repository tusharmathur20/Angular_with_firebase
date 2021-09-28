import { User } from './../user.model';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from './../dialog/dialog.component';
import { UserService } from './../Service/user.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,AfterViewInit {
  tableData:any;
  userId:any

  @ViewChild(MatSort) sort!: MatSort;



  constructor(private firebase:UserService,public dialog:MatDialog) { }
  displayedColumns: string[] = [ 'Name', 'Age', 'Scores','Action'];
  dataSource = new MatTableDataSource<User>();

  ngAfterViewInit(): void {
   
    this.dataSource.sort=this.sort
  }
  ngOnInit(): void {
    
    this.getAllUsers();
   
  }

  getAllUsers(){
    this.firebase.ReadFunctionality().subscribe(res=>{
      // console.log(res);
    this.dataSource.data=res as User[];
      
    })
  }

  openDialog(data:any){
   const a=this.dialog.open(DialogComponent);
   
  a.componentInstance.addWinners(data)
  
  
   
  
  }

}
