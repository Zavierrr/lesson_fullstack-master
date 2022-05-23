import React from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
// import './comment.css'
import { Wrapper } from './Comment.style'

// 样式组件 负责样式

function CommentApp() {
    return (
        <Wrapper>
            CommentApp
            <CommentInput />
            <CommentList />
        </Wrapper>
    )
}

export default CommentApp