import React, { Component } from 'react';
import '../App.css';

export class Tag extends Component {
  constructor(props) {
    super(props);
    this.onDeleteTag=this.onDeleteTag.bind(this);
  }
  onDeleteTag(e){
    this.props.onDeleteTag(this.props.tag);
  }
  render() {
    return (
      <div className='tag' onClick={this.onDeleteTag}>
        {
          this.props.tag
        }
      </div>
    );
  }
}
