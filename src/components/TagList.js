import React, { Component } from 'react';
import { Tag } from './Tag'
import '../App.css';

export class TagList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        };
        this.onDeleteTag = this.onDeleteTag.bind(this);
    }
    componentWillMount() {
        this.setState({
            tags: this.props.tags
        });
    }
    componentDidUpdate() {
        if (!(this.state.tags === this.props.tags))
            this.setState({
                tags: this.props.tags
            });
    }

    onDeleteTag(tag) {
        if (this.props.tagState) {
            let newTags = this.props.tags;
            newTags.splice(newTags.indexOf(tag), 1);
            this.props.onUpdateTags(newTags);
        }
    }
    render() {
        return (
            <div>
                {
                    this.props.tags.map(tag => (
                        <Tag tag={tag} onDeleteTag={this.onDeleteTag}></Tag>
                    ))
                }
            </div>
        );
    }
}
