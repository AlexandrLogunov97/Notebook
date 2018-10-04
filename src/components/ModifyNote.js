import React, { Component } from 'react';
import { TagList } from './TagList';
import '../App.css';

export class ModifyNote extends Component {
    constructor(props) {
        super(props);
        this.getModifyedNote = this.getModifyedNote.bind(this);
        this.state = {
            tag: ''
        }
        this.onModifyedTitleChanging = this.onModifyedTitleChanging.bind(this);
        this.onModifyedEntryChanging = this.onModifyedEntryChanging.bind(this);
        this.onCreatedTag = this.onCreatedTag.bind(this);
        this.onCreatedTagChange = this.onCreatedTagChange.bind(this);
        this.onUpdateTags = this.onUpdateTags.bind(this);
    }
    getModifyedNote(e) {
        this.props.onModifyNote(this.props.note);
    }
    onModifyedTitleChanging(e) {

        this.props.note.title = e.target.value;
    }
    onModifyedEntryChanging(e) {

        this.props.note.entry = e.target.value;
    }
    onCreatedTagChange(e) {
        this.setState({
            tag: e.target.value
        });
    }
    onCreatedTag(e) {
        if (this.state.tag) {
            if (!this.props.note.tags.find(tag => { return tag.trim().toLowerCase() === this.state.tag.trim().toLowerCase() ? tag : null }))
                this.props.note.tags.push(this.state.tag + ' ');
        }
        this.setState({
            tag: ''
        });
    }
    onUpdateTags(newTags) {
        this.props.note.tags = newTags;
        this.getModifyedNote(this.props.note);
    }
    render() {
        let tags = <TagList onUpdateTags={this.onUpdateTags} tagState='modify' tags={this.props.note.tags} />
        return (
            <div>
                <h3 className='item-justify'>Modify</h3>
                <input className='item-justify' placeholder='Title' onChange={this.onModifyedTitleChanging} defaultValue={this.props.note.title} /><br />
                <div className='item-justify'>
                    <input className='item-inner-justify' placeholder='Tag' onChange={this.onCreatedTagChange} value={this.state.tag} /><button onClick={this.onCreatedTag}>add</button>
                    {
                        tags
                    }
                </div>
                <textarea className='item-justify textarea' placeholder='Entry' onChange={this.onModifyedEntryChanging} defaultValue={this.props.note.entry}></textarea><br />
                <button className='item-right' onClick={this.getModifyedNote}>Modify</button>
            </div>
        );
    }
}
