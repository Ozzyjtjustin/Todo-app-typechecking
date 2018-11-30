// @flow
import React, { Component } from 'react';

type Props = {
    key:number, 
    text:string,
    deleteMethod:function
} 

const Note = (props: Props) =>  {
    return (
      <div className="note" onClick={props.deleteMethod}>
        {props.text}
      </div>
    );
  }

export default Note;
