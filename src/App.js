
import './App.css';
//ant-d 组件样式
import 'antd/dist/antd.css';


//导入路由
import {BrowserRouter,Route,Redirect} from 'react-router-dom'

//导入组件
import Nav from './components/Nav'
import Login from './components/login'

//引入provider
import {Provider} from 'react-redux'
//引入store
import store from './store/index'
// 默认语言为 en-US，所以如果需要使用其他语言，推荐在入口文件全局设置 locale
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Route path="/login" component={Login} />
        <Route path="/" exact render={()=> <Redirect to="/login" /> } />
        <Route path="/" component={Nav} />
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
