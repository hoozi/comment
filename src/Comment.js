import React from 'react';

export default (props) => {
    const { comment, index, onDelete } = props;

    return (
        <div className='comment'>
            <div className='comment-user'>
                <span>{ comment.userName }：</span>
            </div>
            <p>{ comment.content }</p>
            <button onClick={ () => { onDelete(index) } }>删除</button>
        </div>
    )
}

