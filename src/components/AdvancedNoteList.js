import React, { Component } from 'react';
import {AdvancedNote} from './AdvancedNote';

import '../App.css';

export class AdvancedNoteList extends Component {
  render() {
    const notes=this.props.notes;
    return (
      <div size={this.props.notes.length} className='item-justify simple-note-list'>
        {
            notes.map(note=>(
                <AdvancedNote  onSelectNote={this.props.onSelectNote} note={note}></AdvancedNote>
            ))
        }
      </div>
    );
  }
}
