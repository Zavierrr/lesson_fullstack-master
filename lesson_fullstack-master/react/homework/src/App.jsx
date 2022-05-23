import './App.css'
import { GlobalStyle, Container } from './style'
import dianzan from './dianzan.svg'
import pinlun from './pinlun.svg'

function App() {
  const data = [{
    name: '一碗周', date: '2月前', title: '在项目中用ts封装axios，一次封装整个团队受益巴',
    desc: '这篇文章封装的axios已经满足如下功能:无处不在的代码提示;灵活的拦截器;可以创建多个实例，灵活根据项目进行调整;每个实例，或者说每个接口...',
    zan: 1057, pinlun: 212,
    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fpeople%2F201703%2F22%2F20170322080525_8CwZ4.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655818916&t=462d0f3dceac159b4ceb002d25bb03e2'
  },
  {
    name: 'Ali2333', date: '2月前', title: '关于电竞职业选手转前端开发这件事',
    desc: '在2021年之前我是一位王者荣耀职业选手，现是一名前端开发工程师,至于我为什么要这样选择呢，且听我慢慢道来~',
    zan: 659, pinlun: 492,
    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fcrop.0.3.960.533%2F006qkI5lly1gqp5blo73zj30qo0f0gtf.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655818916&t=1ab59f97e075b445c7db708ba5c8cb7b'
  }];
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Container>
        <div className="page_top">
          <div>
            <span className="author">{data[0].name}</span>
            <span>{data[0].date}</span>
          </div>
          <div>x</div>
        </div>

        <div className="page_center">
          <a>
            <p>{data[0].title}</p>
            <div className="article">
              <div className="desc">{data[0].desc}</div>
              <div className="pic">
                <img src={data[0].src} alt="" />
              </div>
            </div>
          </a>
        </div>

        <div className='page_bottom'>
          <div className='interact'>
            <div>
              <a><img src={dianzan}></img></a>
              <span>{data[0].zan}</span>
            </div>
            <div>
              <a><img src={pinlun}></img></a>
              <span>{data[0].pinlun}</span>
            </div>
          </div>
          <div className='tag'>
            <span>axios</span>
            <span>TypeScript</span>
          </div>
        </div>
      </Container>
      <Container>
        <div className="page_top">
          <div>
            <span className="author">{data[1].name}</span>
            <span>{data[1].date}</span>
          </div>
          <div>x</div>
        </div>
        <div className="page_center">
          <a>
            <p>{data[1].title}</p>
            <div className="article">
              <div className="desc">{data[1].desc}</div>
              <div className="pic">
                <img src={data[1].src} alt="" />
              </div>
            </div>
          </a>
        </div>
        <div className='page_bottom'>
          <div className='interact'>
            <div>
              <a><img src={dianzan}></img></a>
              <span>{data[1].zan}</span>
            </div>
            <div>
              <a><img src={pinlun}></img></a>
              <span>{data[1].pinlun}</span>
            </div>
          </div>
          <div className='tag'>
            <span>前端</span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default App