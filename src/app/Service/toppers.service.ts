import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToppersService {

  constructor(private db:AngularFireDatabase) { }

  CreateToppers(payload:any){
    // console.log(payload)
    const dbRef= this.db.list('/Toppers')
    dbRef.push(payload).then(res=>{
      // payload.id=res.key
      this.db.object('/Toppers/').update(payload)
    })
}
getToppers(){
  return this.db.list("/Toppers").valueChanges()
}
}
