import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentApp from './CommentApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CommentApp comments={[
    {
        userName: 'hoozi',
        content: 'haha'
    },
    {
        userName: '李三',
        content: 'hehe'
    }
]}/>, document.getElementById('root'));
registerServiceWorker();
