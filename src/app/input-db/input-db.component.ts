import { Component } from '@angular/core';
import { TextToDbService } from '../text-to-db.service';

@Component({
  selector: 'app-input-db',
  templateUrl: './input-db.component.html',
  styleUrls: ['./input-db.component.css']
})
export class InputDBComponent {
  inputValue: string ='';

  constructor(private textService: TextToDbService){
  }

  addText(){
    let newText = {Content: this.inputValue};
    this.textService.addText(newText);
  }
}
