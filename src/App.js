// @flow
import React, { Component } from 'react';
import Note from './components/Note';
import './App.css';

class App extends Component {

  constructor(props) {
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
    if(event.key === 'Entar'){

    }
  }
  render() {
    return (
      <div className="container">
       
        <div className="header">React Todo Application</div>

        <div className="btn">+</div>

        <input 
          type="text" 
          className="textInput" 
          value={this.state.noteText} 
          ref={((input)=> {this.textInput=input})}
          onChangeText={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
          />

      </div>
    );
  }
}

export default App;
