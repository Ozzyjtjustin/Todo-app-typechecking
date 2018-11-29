// @flow
import React, { Component } from 'react';

type Props = {
    key:number, 
    text:string,
    deleteMethod:function
} 

class Note extends Component <Props> {

  render() {
    return (
      <div className="note" onClick={this.props.deleteMethod}>
        {this.props.text}
      </div>
    );
  }
}

export default Note;
