import { Component } from '@angular/core';
import { NotesService } from './NotesService';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newNote: string = "";
  notes: string[] = [];
  _notes: string[] = [];
  
  constructor(private notesService: NotesService) {
  }

  onNoteInput(event: any) {
    this.newNote = event.target.value;
  }

  addNote() {
    if (this.newNote) {
    this.notesService.addNotes(this.newNote)
    }
  }
  ListeNote()
  {
    this._notes= this.notesService.getNotes();
    this._subNotes= this.notesService.getSubNotes();

  }



  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  generateColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  
    return randomColor;
  }
  
  deleteNote(i: number) {
    this.notesService.deleteNote(i);
    this._notes.splice(i, 1);
  }

  
  _subNotes : string[] = [];


  addSubNote() {
    if (this.newNote) {
    this.notesService.addSubNotes(this.newNote)
    }
  }






}
