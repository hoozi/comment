import React, { Component } from 'react';


export default class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            content: ''
        }
    }
    userNameChange(e) {
        this.setState({
            userName: e.target.value
        })
    }
    contentChange(e) {
        this.setState({
            content: e.target.value
        })
    }
    publish() {
        const { userName, content } = this.state;
        if(!userName || !content) {
            return alert('用户名或者内容不能为空！');
        }
        if( this.props.onSubmit ) {
            this.props.onSubmit(this.state);
        }
        this.setState({
            userName: '',
            content: ''
        })
    }
    render() {
        const { userName, content } = this.state;
        
        return (
            <div className='comment-input'>
                <Input fieldName='用户名' value={ userName } type='input' change={ this.userNameChange.bind(this) }/>
                <Input fieldName='内容' value={ content } type='textarea' change={ this.contentChange.bind(this) }/>
                <div className='comment-field-button'>
                    <button onClick={ this.publish.bind(this) }>发布</button>
                </div>
            </div>
        )
    }
}

const Input = (props) => {
    const { fieldName, type, change, value } = props
    return (
        <div className='comment-field'>
            <span className='comment-field-name'>{ fieldName }</span>
            <div className='comment-field-input'>
                { 
                    type === 'input' ? 
                    <input type='text' value={ value } name='userName' onChange={ change } /> : 
                    <textarea name="content" value={ value } onChange={ change }/> 
                }
            </div>
        </div>
    )
}