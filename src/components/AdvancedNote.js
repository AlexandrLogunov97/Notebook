import React, { Component } from 'react';
import '../App.css';
import { TagList } from './TagList';

export class AdvancedNote extends Component {
    constructor(props) {
        super(props);
        this.getSelectNote = this.getSelectNote.bind(this);
    }
    getSelectNote() {
        this.props.onSelectNote(this.props.note);
    }
    render() {
        let nowDate = new Date();

        return (
            <div className='advanced-note' onClick={this.getSelectNote}>
                {
                    this.props.note.title

                }<br/>
                date: {
                    this.props.note.date.toDateString()
                }
                <br/>
                tags: ({
                    this.props.note.tags.toString()
                }) 
            </div>
        );
    }
}
