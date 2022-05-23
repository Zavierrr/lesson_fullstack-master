import styled from 'styled-components';
import style from '../assets/css_variable.js'

// css in js
// 样式组件是组件的新发展
// 组件的样式这部分，都有相应的组件来做
// 嵌套样式，方便维护
export const Wrapper = styled.div`
    width: 500px;
    margin:10px auto;
    font-size:14px;
    background-color: ${style.white_color};
    border:1px solid #f1f1f1;
    padding: 20px;
    .comment-list{
        background-color:${style.white_color};
        padding:20px;
        .comment {
            display:flex;
        }
    }
`

export const InputWrapper = styled.div`
    background-color:#fff;
    border:1px solid #f1f1f1;
    padding:20px;
    margin-bottom:10px;
    /* 方便css 逻辑的封装 */
    .comment-field {
        margin-bottom:15px;
        display:flex;
        .comment-field-name {
            display:flex;
            flex-basis:100px;
            font-size:14px;
        }
        .comment-field-input {
            display:flex;
            flex:1;
            input,textarea{
                border:1px solid #e6e6e6;
                border-radius:3px;
                padding:5px;
                outline:none;
                font-size:14px;
                flex:1;
            }
            textarea{
                height:100px;
            }
        }
    }
    .comment-field-button {
        display:flex;
        justify-content:flex-end;
        button {
            padding:5px 10px;
            width:80px;
            border:none; 
            border-radius:3px;
            background-color:#00a3cf;
            color:#fff;
            outline:none;
            cursor: pointer;
            /* 虽然嵌套了，但加了&代表同级别 */
            &:active {
                background: #13c1f1;
            }
        }
    }
`