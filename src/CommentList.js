import React from 'react';
import Comment from './Comment';
export default (props) => {
    const { comments } = props;
    return (
        <div>
            { 
                comments.map((comment, index) => {
                    return <Comment comment={ comment } key={ index } index= { index }/>
                })
            }
        </div>
    )
}
