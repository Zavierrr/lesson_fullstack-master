import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    html, body {
        background: #f2f3f4;;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
`

export const Container = styled.div`
    width:327px;
    margin:0 auto;
    background-color:#ffffff;
    padding:10px 16px;
    border-bottom:2px rgba(231,234,237,0.9) solid;
    .page_top{
        width:100%;
        height:22px;
        display:flex;
        justify-content:space-between;
        color:rgba(84,94,111,0.8);
        font-size:10px;
        line-height:22px;
        div{
            span{
                padding:0 7px;
                &.author{
                    font-weight:bold;
                    border-right:1px rgba(84,94,111,0.3) solid;
                }
            }
        }
    }
    .page_center{
        margin:5px 0;
        p{
            font-size:15px;
            font-weight:bolder;
            text-align:left;
            margin:8px 0;
            color:black;
        }
        .article{
            width:100%;
            display:flex;
            .desc{
                flex:1;
                font-size:10px;
                color:gray;
                text-align:left;
                line-height:15px;
                margin-right:5px;
            }
            .pic{
                //background-image:url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic3.zhimg.com%2F50%2Fv2-ec934f0eb772b3faf0c82821364ec3ef_hd.jpg&refer=http%3A%2F%2Fpic3.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655622277&t=6dd3a42e975cdaa34b8e74588a286d9b);
                // width:95px;
                // height:70px;
                // background-position: center;
                // background-size:cover;
                img {
                    width:95px;
                    height:70px;
                    object-fit:cover;
                }
            }
        }
    }
    .page_bottom{
        height:26px;
        line-height:26px;
        display:flex;
        justify-content:space-between;
        font-size:10px;
        color:gray;
        .interact{
            width:130px;
            display:flex;
            div{
                margin-right:20px;
                img{
                    color:gray;
                    width:15px;
                    height:15px;
                    margin-right:2px;
                    position:relative;
                    top:2px;
                }
            }
        }
        .tag{
            flex:1;
            text-align:right;
            span{
                background-color:#fafafa;
                margin-left:10px;
                border-radius:15px;
                padding:2px;
            }
        }
    }
`
