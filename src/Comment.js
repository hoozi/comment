import React from 'react';

export default (props) => {
    const { comment, index } = props;
    return (
        <div className='comment'>
            <div className='comment-user'>
                <span>{ comment.userName }：</span>
            </div>
            <p>{ comment.content }</p>
        </div>
    )
}

