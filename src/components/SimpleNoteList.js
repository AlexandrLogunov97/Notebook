import React, { Component } from 'react';
import {SimpleNote} from './SimpleNote';

import '../App.css';
export class SimpleNoteList extends Component {
  render() {
    const notes=this.props.notes;
    return (
      <div className='item-justify simple-note-list'>
        {
            notes.map(note=>(
                <SimpleNote  onSelectNote={this.props.onSelectNote} note={note}></SimpleNote>
            ))
        }
      </div>
    );
  }
}
