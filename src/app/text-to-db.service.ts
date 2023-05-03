import { Injectable } from '@angular/core';
import { addDoc, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Text } from './shared/models/Text'

@Injectable({
  providedIn: 'root'
})
export class TextToDbService {

  constructor(private fs: Firestore) { }

  addText(text:Text){
    const myCollections: any = collection(this.fs, 'texts')
    addDoc(myCollections, text);
  }
}
