import React,{Component} from 'react'
import './Office.css'

// views视图
import Ws1 from '../../views/Crm/ws1'
import Ws2 from '../../views/Crm/ws2'
import Ws3 from '../../views/Crm/ws3'
import Ws4 from '../../views/Crm/ws4'
import Ws5 from '../../views/Crm/ws5'
import Ws6 from '../../views/Crm/ws6'
import Ws7 from '../../views/Crm/ws7'
import Ws8 from '../../views/Crm/ws8'
import Ws9 from '../../views/Crm/ws9'
import Ws10 from '../../views/Crm/ws10'

import {Link,Route,Redirect} from 'react-router-dom'
/* ant 组件 */

import { Menu,Button} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  createFromIconfontCN,
} from '@ant-design/icons';
const MyIcon = createFromIconfontCN({
      scriptUrl: '//at.alicdn.com/t/font_2479319_jgiw05wekk.js', // 在 iconfont.cn 上生成
   });




export default class Office extends Component{
    constructor(){
        super();
        this.state = {
            collapsed:true
        };
        this.toggleCollapsed = this.toggleCollapsed.bind(this)
    }
    //获取loginbox
    Navbutton = React.createRef();
    //获取loginbox
    buttonbox = React.createRef();
    toggleCollapsed(){//设置buttonnav 的 right 数值
        this.setState({
            collapsed : !this.state.collapsed
        })
        console.log(this.state.collapsed)
        if(this.state.collapsed){
            this.Navbutton.current.style.right = 10 + '%'
            this.buttonbox.current.style.width = 64 + 'px'
        }else{
            this.Navbutton.current.style.right = 4 +'%'
            this.buttonbox.current.style.width = 200 + 'px'
        }
      }
    render(){
        return(
            <main className="index" style={{height:100+'%'}}>
                <div className="index_left">
                <div className="leftNav" ref={this.buttonbox}>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }} className="leftNav_button" ref={this.Navbutton}>
                      {React.createElement(this.state.collapsed ? MenuFoldOutlined : MenuUnfoldOutlined)}
                    </Button>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{height:100+'%'}}>
                      <Menu.Item key="1" icon={<MyIcon type="icon-yibiaopan" />}>
                        <Link to="/crm/ws1">仪表盘</Link>
                      </Menu.Item>
                      <Menu.Item key="2" icon={<MyIcon type="icon-lingdang" />}>
                        <Link to="/crm/ws2">待办事项</Link>
                      </Menu.Item>
                      <Menu.Item key="3" icon={<MyIcon type="icon-xiansuo" />}>
                        <Link to="/crm/ws3">线索</Link>
                      </Menu.Item>
                      <Menu.Item key="4" icon={<MyIcon type="icon-kehu" />}>
                        <Link to="/crm/ws4">客户</Link>
                      </Menu.Item>
                      <Menu.Item key="5" icon={<MyIcon type="icon-biaoqiankuozhan_lianxiren-379" />}>
                        <Link to="/crm/ws5">联系人</Link>
                      </Menu.Item>
                      <Menu.Item key="6" icon={<MyIcon type="icon-gonghai" />}>
                        <Link to="/crm/ws6">公海</Link>
                      </Menu.Item>
                      <Menu.Item key="7" icon={<MyIcon type="icon-shangji" />}>
                        <Link to="/crm/ws7">商机</Link>
                      </Menu.Item>
                      <Menu.Item key="8" icon={<MyIcon type="icon-hetongliebiao" />}>
                        <Link to="/crm/ws8">合同</Link>
                      </Menu.Item>
                      <Menu.Item key="9" icon={<MyIcon type="icon-huikuantixing" />}>
                        <Link to="/crm/ws9">回款</Link>
                      </Menu.Item>
                      <Menu.Item key="10" icon={<MyIcon type="icon-weibiaoti1" />}>
                        <Link to="/crm/ws10">产品</Link>
                      </Menu.Item>
                    </Menu>
                </div>
                </div>
                <div className="index_right">
                    <div style={{height: 100+'%'}}>
                        <div className="workbench">
                        <Route path="/crm" exact render={()=> <Redirect to="/crm/ws1" /> } />
                        <Route path="/crm/ws2" component={Ws2} />
                        <Route path="/crm/ws3" component={Ws3} />
                        <Route path="/crm/ws4" component={Ws4} />
                        <Route path="/crm/ws5" component={Ws5} />
                        <Route path="/crm/ws6" component={Ws6} />
                        <Route path="/crm/ws7" component={Ws7} />
                        <Route path="/crm/ws8" component={Ws8} />
                        <Route path="/crm/ws9" component={Ws9} />
                        <Route path="/crm/ws10" component={Ws10} />
                        <Route path="/crm/ws1" component={Ws1} />
                        </div>
                    </div>  
                </div>
            </main>
        )
    }
}