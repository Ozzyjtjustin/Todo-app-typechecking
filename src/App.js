// @flow
import React, { Component } from 'react';
import Note from './components/Note';
import './App.css';
 
 
type State = {
  noteText:string,
  notes:string
} 

type Props = {} 

class App extends Component <State, Props>{

  constructor(props: Props) {
    super(props);
    this.state = {
      noteText: '',
      notes: [],
    }
  }

  updateNoteText(noteText){
    this.setState({ noteText: noteText.target.value})
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
        let notesArr = this.state.notes;
        notesArr.push(this.state.noteText);
        this.setState({ noteText: ''});
    }
  }

  deleteNote(index){
    let notesArr = this.state.notes;
    notesArr.splice(index, 1)
    this.setState({ notes: notesArr })
  }

  addNote(){
    if(this.state.noteText === ''){return false}
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: ''});
    this.textInput.focus();
  }

  render() {

    let notes = this.state.notes.map((val, key)=> {
      return <Note 
                key={key} 
                text={val} 
                deleteMethod={()=> this.deleteNote(key)} 
                />
    })
    return (
      <div className="container">
       
        <div className="header">React Todo Application</div>
        {notes}
        <div className="btn" onClick={this.addNote.bind(this)}>+</div>

        <input 
          type="text" 
          className="listInput" 
          value={this.state.noteText} 
          ref={((input)=> {this.textInput=input})}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
          />

        <input 
          type="text" 
          className="taskInput" 
          value={this.state.noteText} 
          ref={((input)=> {this.textInput=input})}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
          />

      </div>
    );
  }
}

export default App;
