import React, { Component } from 'react';
import {TagList} from './TagList';
import '../App.css';

export class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.getCreatedNote = this.getCreatedNote.bind(this);
        this.state = {
            note: {
                title: '',
                entry: '',
                tags: [],
                date: {}
            },
            tag: ''
        }
        this.onCreatedTitleChanging=this.onCreatedTitleChanging.bind(this);
        this.onCreatedEntryChanging=this.onCreatedEntryChanging.bind(this);
        this.onCreatedTag=this.onCreatedTag.bind(this);
        this.onCreatedTagChange=this.onCreatedTagChange.bind(this);
        this.onUpdateTags=this.onUpdateTags.bind(this);
    }
    getCreatedNote(e) {
        this.props.onCreateNote(this.state.note);
    }
    onCreatedTitleChanging(e) {
        let note = this.state.note;
        note.title = e.target.value;
 
        if (note.title)
            this.setState({
                note: note
            });
    }
    onCreatedEntryChanging(e) {
        let note = this.state.note;
        note.entry = e.target.value;
        if (note.entry)
            this.setState({
                note: note
            });
    }
    onCreatedTagChange(e){
        this.setState({
            tag: e.target.value+' '
        });
    }
    onCreatedTag(e){
        let note=this.state.note;
        if(this.state.tag)
            note.tags.push(this.state.tag);
        this.setState({
            note: note,
            tag: ''
        });
    }
    onUpdateTags(newTags){
        let note =this.state.note;
        note.tags=newTags;
        this.setState({
            note: note
        });
    }
    render() {
        let tags=<TagList onUpdateTags={this.onUpdateTags} tagState='modify' tags={this.state.note.tags}/>
        return (
            <div>
                <h3 className='item-justify'>Create</h3>
                <input className='item-justify' placeholder='Title' onChange={this.onCreatedTitleChanging}/><br />
                <div className='item-justify'>
                    <input className='item-inner-justify' placeholder='Tag' onChange={this.onCreatedTagChange} value={this.state.tag}/><button onClick={this.onCreatedTag}>add</button>
                    {
                        tags
                    }
                </div>
                <textarea className='item-justify textarea' placeholder='Entry' onChange={this.onCreatedEntryChanging}></textarea><br />
                <button className='item-right' onClick={this.getCreatedNote}>Create</button>
            </div>
        );
    }
}
