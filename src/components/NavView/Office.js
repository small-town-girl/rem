import React,{Component} from 'react'
import './Office.css'

import {Link,Route} from 'react-router-dom'
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
                        <Menu.Item key="/off/index" icon={<DesktopOutlined />}>
                          <Link to="/off/index">工作台</Link>
                        </Menu.Item>
                    
                        <Menu.Item key="/off/schedule" icon={<ProfileOutlined />}>
                        <Link to="/off/schedule">日程</Link>
                        </Menu.Item>
                    
                        <Menu.Item key="/off/task" icon={<ScheduleOutlined />}>
                        <Link to="/off/task">任务</Link>
                        </Menu.Item>
                    
                        <Menu.Item key="/off/notice" icon={<NotificationOutlined />}>
                        <Link to="/off/notice">公告</Link>
                        </Menu.Item>
                    
                        <Menu.Item key="/off/journal" icon={<SolutionOutlined />}>
                        <Link to="/off/journal">日志</Link>
                        </Menu.Item>
                    
                        <Menu.Item key="/off/examine" icon={<AuditOutlined />}>
                        <Link to="/off/examine">审批</Link>
                        </Menu.Item>
                    
                        <Menu.Item key="/off/addressbook" icon={<TeamOutlined />}>
                        <Link to="/off/addressbook">通讯录</Link>
                        </Menu.Item>
                    </Menu>
                </div>
                </div>
                <div className="index_right">
                    <div style={{height: 100+'%'}}>
                        <div className="workbench">
                            <Route path="/off/index" component={Index} />
                            <Route path="/off/schedule" component={Schedule} />
                            <Route path="/off/task" component={Task} />
                            <Route path="/off/notice" component={Notice} />
                            <Route path="/off/journal" component={Journal} />
                            <Route path="/off/examine" component={Examine} />
                            <Route path="/off/addressbook" component={Addressbook} />
                        </div>
                    </div>  
                </div>
            </main>
        )
    }
}