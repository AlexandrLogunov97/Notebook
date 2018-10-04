import React, { Component } from 'react';
import {compiler} from 'markdown-to-jsx';
import { TagList } from './TagList';

export class Note extends Component {
  render() {
    let note=this.props.note?{
      title: this.props.note.title,
      entry: compiler(this.props.note.entry ),
      tags: <TagList tags={this.props.note.tags}></TagList>
    }: {
      title: 'Empty',
      entry: ''
    }
    return (
      <div>
        <h4>Tags</h4>{note.tags}<br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
        <h2>{note.title}</h2>
        <h3>{note.entry}</h3>
      </div>
    );
  }
}
