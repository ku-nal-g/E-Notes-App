import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  notesArray:any = [];
  deleteIndex:number = -1;
  digitalTime:any ;

  addNotes(item:any){
    if(item.trim().length){
      this.notesArray.push(item);
    }
    else{
      alert("Please enter some text");
    }
  }
  deleteNotes(index:number){
    this.notesArray.splice(index,1);
  }
  ngOnInit():void{
    setInterval(()=>{
      this.digitalTime = new Date();
    },1000)
  }
}
