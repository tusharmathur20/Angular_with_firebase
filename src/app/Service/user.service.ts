import { AngularFireDatabase, AngularFireDatabaseModule, AngularFireList } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) { }

  ReadFunctionality(){
        return this.db.list("/Users/").valueChanges()
      }

       ReadSingle(id:any){
        //  console.log(data)
          return this.db.object("/Users/"+`${id}`).valueChanges()
       }

       CreateWinner(payload:any){
        console.log(payload)
        const dbRef= this.db.list('/Winners')
        dbRef.push(payload).then(res=>{
          // payload.id=res.key
          this.db.object('/Winners/').update(payload)
        })
        
       }
     
}
