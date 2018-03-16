import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './CommentApp.css';

export default class CommentApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
    handleSubmit({userName, content}) {
        const { comments } = this.state;
        comments.push({
            userName,
            content
        });
        this.setState({
            comments
        })
        console.log(this.state)
    }
    render() {
        const { comments } = this.state;
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={ this.handleSubmit.bind(this) }/>
                <CommentList comments={ comments } />
            </div>
        )
    }
}