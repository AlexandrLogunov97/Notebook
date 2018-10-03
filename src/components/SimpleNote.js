import React, { Component } from 'react';
import '../App.css';

export class SimpleNote extends Component {
    constructor(props) {
        super(props);
        this.getSelectNote=this.getSelectNote.bind(this);
    }
    getSelectNote() {
        this.props.onSelectNote(this.props.note);
    }
    render() {
        return (
            <div className='simple-note' onClick={this.getSelectNote}>
                {this.props.note.title}
            </div>
        );
    }
}
