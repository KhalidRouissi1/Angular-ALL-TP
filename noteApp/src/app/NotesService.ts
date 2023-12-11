import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: string[] = [];
  subNotes:string[]=[];

  addNotes(note: string) {
    this.notes.push(note);
  }

  addSubNotes(note: string) {
    this.subNotes.push(note);
  }

  

  getNotes(): string[] {



    return JSON.parse(JSON.stringify(this.notes));
    
    // return this.notes.slice();
  }

  getSubNotes(): string[] {
    return JSON.parse(JSON.stringify(this.subNotes));
    
    // return this.notes.slice();
  }

  

  deleteNote(i: number) {
    this.notes.splice(i, 1);
  }
}


