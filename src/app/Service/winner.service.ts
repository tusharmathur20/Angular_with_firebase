import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WinnerService {

  constructor(private db:AngularFireDatabase) { }

  
  getAllWinners(){
    return this.db.list("/Winners/").valueChanges()
  }
}

