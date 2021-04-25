
import React,{Component} from 'react'
import './Crm.css'

import {Link,Route,Redirect} from 'react-router-dom'
/* ant 组件 */

import { Menu,Button} from 'antd';
import {
  DesktopOutlined,
  ProfileOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ScheduleOutlined,
  NotificationOutlined,
  SolutionOutlined,
  AuditOutlined,
  TeamOutlined,
} from '@ant-design/icons';

// views视图
import Index from '../../views/Office/index'
import Schedule from '../../views/Office/schedule'
import Task from '../../views/Office/task'
import Notice from '../../views/Office/notice'
import Journal from '../../views/Office/journal'
import Examine from '../../views/Office/examine'
import Addressbook from '../../views/Office/address-book'

export default class Crm extends Component{
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
            <main className="index">
                <div className="index_left">
                <div className="leftNav" ref={this.buttonbox}>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }} className="leftNav_button" ref={this.Navbutton}>
                      {React.createElement(this.state.collapsed ? MenuFoldOutlined : MenuUnfoldOutlined)}
                    </Button>
                    <Menu
                      defaultSelectedKeys={[this.props.history.location.pathname]}
                      mode="inline"
                      theme="dark"
                      inlineCollapsed={this.collapsed}
                      className="ant-ul"
                    >
                        <Menu.Item key="/crm/index" icon={<DesktopOutlined />}>
                          <Link to="/crm/index">仪表盘</Link>
                        </Menu.Item>
                    
                        <Menu.Item key="/off/schedule" icon={<ProfileOutlined />}>
                        <Link to="/off/schedule">代办事项</Link>
                        </Menu.Item>
                    
                        <Menu.Item key="/off/task" icon={<ScheduleOutlined />}>
                        <Link to="/off/task">线索</Link>
                        </Menu.Item>
                    
                        <Menu.Item key="/off/notice" icon={<NotificationOutlined />}>
                        <Link to="/off/notice">客户</Link>
                        </Menu.Item>
                    
                        <Menu.Item key="/off/journal" icon={<SolutionOutlined />}>
                        <Link to="/off/journal">联系人</Link>
                        </Menu.Item>
                    
                        <Menu.Item key="/off/examine" icon={<AuditOutlined />}>
                        <Link to="/off/examine">公海</Link>
                        </Menu.Item>
                    
                        <Menu.Item key="/off/addressbook" icon={<TeamOutlined />}>
                        <Link to="/off/addressbook">商机</Link>
                        </Menu.Item>
                        <Menu.Item key="/off/addressbook" icon={<TeamOutlined />}>
                        <Link to="/off/addressbook">合同</Link>
                        </Menu.Item>
                        <Menu.Item key="/off/addressbook" icon={<TeamOutlined />}>
                        <Link to="/off/addressbook">回款</Link>
                        </Menu.Item>
                        <Menu.Item key="/off/addressbook" icon={<TeamOutlined />}>
                        <Link to="/off/addressbook">产品</Link>
                        </Menu.Item>
                    </Menu>
                </div>
                </div>
                <div className="index_right">
                    <div style={{height: 100+'%'}}>
                        <div className="workbench">
                            <Route path="/crm/index" component={Index}  />
                            <Route path="/crm/schedule" component={Schedule} />
                            <Route path="/crm/task" component={Task} />
                            <Route path="/crm/notice" component={Notice} />
                            <Route path="/crm/journal" component={Journal} />
                            <Route path="/crm/examine" component={Examine} />
                            <Route path="/crm/addressbook" component={Addressbook} />
                            <Route path="/crm" exact render={()=> <Redirect to="/crm/index" /> } />
                        </div>
                    </div>  
                </div>
            </main>
        )
    }
}